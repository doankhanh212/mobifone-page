'use client'

import { motion } from 'framer-motion'
import {
  FileText,
  BarChart3,
  Cloud,
  MessageSquare,
  Shield,
} from 'lucide-react'

const solutions = [
  { icon: FileText, label: 'Smart Office', color: 'from-blue-600 to-blue-400' },
  {
    icon: BarChart3,
    label: 'eContract',
    color: 'from-cyan-600 to-cyan-400',
  },
  { icon: Shield, label: 'MobiCA', color: 'from-violet-600 to-violet-400' },
  { icon: FileText, label: 'Invoice', color: 'from-orange-600 to-orange-400' },
  {
    icon: MessageSquare,
    label: '3C Center',
    color: 'from-pink-600 to-pink-400',
  },
  { icon: Cloud, label: 'Cloud', color: 'from-emerald-600 to-emerald-400' },
]

export function DashboardMockup() {
  return (
    <div className="relative h-full min-h-96 flex items-center justify-center">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
        >
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Central floating element */}
      <motion.div
        className="absolute w-32 h-32 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur"
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, 2, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Orbiting solution cards */}
      {solutions.map((solution, i) => {
        const Icon = solution.icon
        const angle = (360 / solutions.length) * i
        const radius = 150

        return (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: Math.cos((angle * Math.PI) / 180) * radius,
              y: Math.sin((angle * Math.PI) / 180) * radius,
              rotateZ: -angle,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.div
              className={`flex items-center justify-center w-20 h-20 rounded-lg bg-gradient-to-br ${solution.color} shadow-lg border border-white/10`}
              animate={{ rotateZ: angle }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
            <p className="absolute top-24 left-1/2 -translate-x-1/2 text-xs text-slate-300 text-center whitespace-nowrap font-medium mt-2">
              {solution.label}
            </p>
          </motion.div>
        )
      })}

      {/* Glow orbs in corners */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-600/10 blur-3xl"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-cyan-600/10 blur-3xl"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </div>
  )
}
