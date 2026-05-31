'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const nodePositions = [
  new THREE.Vector3(2.7, 0.2, 0.2),
  new THREE.Vector3(1.3, 1.85, -0.25),
  new THREE.Vector3(-1.15, 1.75, 0.25),
  new THREE.Vector3(-2.55, -0.1, -0.15),
  new THREE.Vector3(-1.25, -1.8, 0.35),
  new THREE.Vector3(1.35, -1.7, -0.2),
]

export function ThreeHeroScene() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const isMobile = window.matchMedia('(max-width: 640px)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0.15, 7)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? 'low-power' : 'high-performance',
      })
    } catch {
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75))
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.width = '100%'
    host.appendChild(renderer.domElement)

    const root = new THREE.Group()
    scene.add(root)

    const ambient = new THREE.AmbientLight(0xffffff, 1.8)
    scene.add(ambient)

    const key = new THREE.PointLight(0x22d3ee, 14, 12)
    key.position.set(2.5, 3, 4)
    scene.add(key)

    const fill = new THREE.PointLight(0x2563eb, 10, 12)
    fill.position.set(-3, -2, 3)
    scene.add(fill)

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x075985,
      emissiveIntensity: 0.75,
      metalness: 0.55,
      roughness: 0.24,
    })
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.86, 1), coreMaterial)
    root.add(core)

    const innerWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 1),
      new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      }),
    )
    root.add(innerWire)

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.24,
    })
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.012, 12, 160), ringMaterial)
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.95, 0.01, 12, 160), ringMaterial.clone())
    ringB.rotation.x = Math.PI / 2.8
    const ringC = new THREE.Mesh(new THREE.TorusGeometry(3.35, 0.008, 12, 160), ringMaterial.clone())
    ringC.rotation.y = Math.PI / 2.5
    root.add(ringA, ringB, ringC)

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.28,
    })

    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.35,
      metalness: 0.2,
      roughness: 0.2,
    })

    const nodes: THREE.Mesh[] = []
    nodePositions.forEach((position) => {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        position,
      ])
      root.add(new THREE.Line(lineGeometry, lineMaterial))

      const node = new THREE.Mesh(new THREE.SphereGeometry(0.13, 32, 32), nodeMaterial.clone())
      node.position.copy(position)
      nodes.push(node)
      root.add(node)

      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 32, 32),
        new THREE.MeshBasicMaterial({
          color: 0x22d3ee,
          transparent: true,
          opacity: 0.12,
        }),
      )
      halo.position.copy(position)
      root.add(halo)
    })

    const stars = new THREE.Group()
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.45,
    })
    for (let i = 0; i < 48; i += 1) {
      const star = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), starMaterial)
      const angle = (i / 48) * Math.PI * 2
      const radius = 3.6 + (i % 5) * 0.23
      star.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.7) * 1.8,
        Math.sin(angle) * radius * 0.25,
      )
      stars.add(star)
    }
    root.add(stars)

    let pointerX = 0
    let pointerY = 0
    const resetPointer = () => {
      pointerX = 0
      pointerY = 0
    }
    const onPointerMove = (event: PointerEvent) => {
      if (isMobile || prefersReducedMotion) return
      const rect = host.getBoundingClientRect()
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.45
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.3
    }
    host.addEventListener('pointermove', onPointerMove)
    host.addEventListener('pointerleave', resetPointer)

    const resize = () => {
      const width = Math.max(1, host.clientWidth)
      const height = Math.max(1, host.clientHeight)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    resize()

    let frameId = 0
    let isVisible = true
    const clock = new THREE.Clock()

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    }, { threshold: 0.05 })
    visibilityObserver.observe(host)

    const onVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    const animate = () => {
      if (!isVisible) {
        frameId = requestAnimationFrame(animate)
        return
      }

      const time = clock.getElapsedTime()

      root.rotation.y += (pointerX - root.rotation.y) * 0.04
      root.rotation.x += (-pointerY - root.rotation.x) * 0.04
      root.rotation.z = Math.sin(time * 0.25) * 0.025

      const speed = prefersReducedMotion ? 0.28 : 1
      core.rotation.x = time * 0.45 * speed
      core.rotation.y = time * 0.58 * speed
      innerWire.rotation.y = -time * 0.18 * speed
      ringA.rotation.z = time * 0.16 * speed
      ringB.rotation.z = -time * 0.12 * speed
      ringC.rotation.x = time * 0.08 * speed
      stars.rotation.z = time * 0.025 * speed

      nodes.forEach((node, index) => {
        const pulse = 1 + Math.sin(time * 2.1 * speed + index) * 0.16
        node.scale.setScalar(pulse)
      })

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      host.removeEventListener('pointermove', onPointerMove)
      host.removeEventListener('pointerleave', resetPointer)
      renderer.dispose()
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose())
          } else {
            object.material.dispose()
          }
        }
      })
      renderer.domElement.remove()
    }
  }, [])

  return (
    <div className="pointer-events-auto relative min-h-[360px] overflow-visible sm:min-h-[460px] lg:min-h-[560px]">
      <div ref={hostRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(14,165,233,0.16)_0%,transparent_42%)] dark:bg-[radial-gradient(circle_at_50%_48%,rgba(34,211,238,0.16)_0%,transparent_44%)]" />
    </div>
  )
}
