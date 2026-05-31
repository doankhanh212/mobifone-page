'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ZaloLink } from './ZaloLink'

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  category: string
  featured?: boolean
  delay?: number
}

export function SolutionCard({
  icon: Icon,
  title,
  description,
  features,
  category,
  featured = false,
  delay = 0,
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative group rounded-xl border transition-all duration-300 h-full flex flex-col ${
        featured
          ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500/50 lg:col-span-2 lg:row-span-2'
          : 'bg-slate-900 border-slate-700 hover:border-blue-500/50'
      }`}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          featured
            ? 'glow-blue-strong'
            : 'glow-blue'
        }`}
      />

      <div className="relative p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="inline-block p-3 rounded-lg bg-blue-500/10 mb-3 group-hover:bg-blue-500/20 transition-colors">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className={`font-bold mb-2 ${featured ? 'text-2xl' : 'text-lg'}`}>
            {title}
          </h3>
          <span className="inline-block px-2 py-1 text-xs rounded bg-cyan-500/20 text-cyan-300 mb-3">
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-300 mb-4 flex-grow">{description}</p>

        {/* Features */}
        {featured && (
          <ul className="mb-6 space-y-2">
            {features.map((feature, i) => (
              <li
                key={i}
                className="text-sm text-slate-400 flex items-start gap-2"
              >
                <span className="text-cyan-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <ZaloLink variant="primary" className="w-full justify-center text-sm">
            Tư vấn qua Zalo
          </ZaloLink>
        </div>
      </div>
    </motion.div>
  )
}
