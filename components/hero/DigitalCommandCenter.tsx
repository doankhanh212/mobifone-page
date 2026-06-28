'use client'

import type { LucideIcon } from 'lucide-react'
import {
  BriefcaseBusiness,
  Cloud,
  FileSignature,
  FileText,
  Headphones,
  RadioTower,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Users,
  Volume2,
  Workflow,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

type SolutionNode = {
  label: string
  Icon: LucideIcon
  x: number
  y: number
}

const bars = [45, 65, 38, 80, 56, 92, 72, 58]

const kpis = [
  { value: '12', label: 'Giải pháp số' },
  { value: '99.9%', label: 'Uptime' },
  { value: 'Zalo', label: 'Tư vấn nhanh' },
]

const solutionNodes: SolutionNode[] = [
  { label: 'eOffice', Icon: Workflow, x: 10, y: 18 },
  { label: 'CA', Icon: ShieldCheck, x: 38, y: 8 },
  { label: 'Invoice', Icon: ReceiptText, x: 67, y: 14 },
  { label: 'eContract', Icon: FileSignature, x: 78, y: 34 },
  { label: '3C', Icon: Headphones, x: 72, y: 68 },
  { label: 'HRM', Icon: Users, x: 42, y: 80 },
  { label: 'eWork', Icon: BriefcaseBusiness, x: 14, y: 68 },
  { label: '1POS', Icon: ShoppingCart, x: 8, y: 45 },
  { label: 'IMS', Icon: FileText, x: 18, y: 34 },
  { label: 'TTTM', Icon: RadioTower, x: 84, y: 52 },
  { label: '1ERP', Icon: Cloud, x: 50, y: 22 },
  { label: 'Loa TT', Icon: Volume2, x: 55, y: 72 },
]

const tabletLabels = ['eOffice', 'CA', 'Invoice', 'eContract', '3C', 'HRM', 'eWork', 'IMS']
const mobileLabels = ['eOffice', 'CA', 'Invoice', '3C']
const connectorTarget = { x: 50, y: 50 }

export function DigitalCommandCenter({ className = '' }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className={`relative mx-auto aspect-[4/3] w-full max-w-[720px] overflow-hidden rounded-2xl border border-cyan-300/35 bg-[#020B18] shadow-[0_0_44px_rgba(0,170,255,0.22)] sm:aspect-[16/9] ${className}`}
      aria-label="MobiFone digital command center visual"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.18)_1px,transparent_1px)] bg-[size:30px_30px] opacity-70"
        animate={reduceMotion ? undefined : { backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,229,255,0.18),transparent_30%),radial-gradient(circle_at_18%_72%,rgba(0,170,255,0.14),transparent_28%),linear-gradient(135deg,rgba(2,11,24,0.1),rgba(4,18,37,0.7)_52%,rgba(2,11,24,0.28))]" />
      <motion.div
        className="absolute right-[4%] top-[3%] h-[42%] w-[42%] rounded-full bg-cyan-300/10 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.45, 0.9, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[8%] left-[8%] h-[36%] w-[36%] rounded-full bg-blue-500/10 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1.08, 0.96, 1.08], opacity: [0.72, 0.4, 0.72] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {!reduceMotion && (
        <motion.div
          className="absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-24deg] bg-gradient-to-r from-transparent via-cyan-200/12 to-transparent"
          animate={{ x: ['0%', '430%'] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* SVG connectors */}
      <svg
        className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full sm:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dcc-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00AAFF" stopOpacity="0.62" />
          </linearGradient>
          <filter id="dcc-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="0.9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {solutionNodes.map((node, index) => {
          const tabletVisible = tabletLabels.includes(node.label)

          return (
            <g key={node.label} className={tabletVisible ? '' : 'hidden lg:block'}>
              <motion.line
                x1={node.x}
                y1={node.y}
                x2={connectorTarget.x}
                y2={connectorTarget.y}
                stroke="url(#dcc-line)"
                strokeWidth="0.18"
                initial={{ pathLength: reduceMotion ? 1 : 0.2, opacity: 0.25 }}
                animate={
                  reduceMotion
                    ? { pathLength: 1, opacity: 0.34 }
                    : { pathLength: [0.28, 1, 0.5], opacity: [0.16, 0.7, 0.22] }
                }
                transition={{ duration: 3.8, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: index * 0.12 }}
              />
              {!reduceMotion && (
                <motion.circle
                  r="0.55"
                  fill="#7DF7FF"
                  filter="url(#dcc-dot-glow)"
                  animate={{
                    cx: [node.x, connectorTarget.x],
                    cy: [node.y, connectorTarget.y],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3.3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.19,
                  }}
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Dashboard */}
      <div className="absolute left-1/2 top-1/2 z-20 w-[72%] -translate-x-1/2 -translate-y-1/2 sm:w-[55%] lg:w-[50%]">
        <motion.div
          className="relative rounded-[18px] border border-cyan-300/60 bg-[#041225]/84 p-3 shadow-[0_0_32px_rgba(0,170,255,0.24)] backdrop-blur sm:p-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, y: [0, -7, 0], scale: [1, 1.01, 1] }}
          transition={{ duration: 5, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
        >
        <motion.div
          className="absolute inset-0 rounded-[18px] border border-cyan-100/25"
          animate={reduceMotion ? undefined : { opacity: [0.24, 0.72, 0.24] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold text-[#E8F4FF] sm:text-sm">
              MobiFone Digital Command
            </p>
            <p className="mt-0.5 truncate text-[9px] text-[#7EB8D8] sm:text-[11px]">
              Realtime ecosystem operations
            </p>
          </div>
          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold text-emerald-200 sm:text-[10px]">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#00FF9D]"
              animate={reduceMotion ? undefined : { scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            Active
          </div>
        </div>

        <div className="relative mt-3 rounded-xl border border-cyan-300/42 bg-[#061A30]/82 p-3 text-center">
          <div className="absolute inset-x-[16%] top-[55%] h-px bg-cyan-300/10" />
          <p className="truncate text-[11px] font-semibold text-[#E8F4FF] sm:text-sm">
            Tổng quan vận hành số
          </p>
          <div className="mx-auto mt-3 flex h-16 max-w-[220px] items-end justify-center gap-1.5 overflow-hidden sm:h-20 sm:gap-2">
            {bars.map((height, index) => (
              <motion.span
                key={height}
                className="w-3 origin-bottom rounded-full bg-gradient-to-t from-cyan-500/65 to-cyan-200 shadow-[0_0_14px_rgba(0,229,255,0.26)] sm:w-4"
                style={{ height: `${height}%` }}
                initial={{ scaleY: reduceMotion ? 1 : 0 }}
                animate={reduceMotion ? { scaleY: 1 } : { scaleY: [0.7, 1, 0.84] }}
                transition={{ duration: 1.9, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: index * 0.08 }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {kpis.map((kpi) => (
            <div key={kpi.value} className="rounded-xl border border-cyan-300/24 bg-[#071E36]/84 p-2">
              <div className="truncate text-base font-extrabold text-[#E8F4FF] sm:text-xl">{kpi.value}</div>
              <div className="mt-0.5 truncate text-[8px] text-[#7EB8D8] sm:text-[10px]">{kpi.label}</div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>

      {/* Product chips */}
      {solutionNodes.map((node, index) => {
        const Icon = node.Icon
        const tabletVisible = tabletLabels.includes(node.label)
        const mobileVisible = mobileLabels.includes(node.label)

        return (
          <motion.div
            key={node.label}
            className={[
              'absolute z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-xl border border-cyan-300/65 bg-[#020817]/92 px-2.5 py-1.5 text-[10px] font-bold text-[#E8F4FF] shadow-[0_0_16px_rgba(0,229,255,0.24)] backdrop-blur sm:text-xs',
              mobileVisible ? 'flex' : 'hidden sm:flex',
              tabletVisible ? '' : 'sm:hidden lg:flex',
            ].join(' ')}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={
              reduceMotion
                ? { opacity: 1, scale: 1 }
                : {
                    opacity: 1,
                    scale: 1,
                    y: [0, -4, 0],
                    boxShadow: [
                      '0 0 10px rgba(0,229,255,0.16)',
                      '0 0 22px rgba(0,229,255,0.38)',
                      '0 0 10px rgba(0,229,255,0.16)',
                    ],
                  }
            }
            transition={{ duration: 4 + (index % 4) * 0.42, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: index * 0.12 }}
          >
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-200">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span>{node.label}</span>
          </motion.div>
        )
      })}
    </div>
  )
}
