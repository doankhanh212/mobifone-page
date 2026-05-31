'use client'

import { motion } from 'framer-motion'
import { Zap, Lock, Gauge, BarChart3 } from 'lucide-react'

const trustItems = [
  { icon: Zap, label: '12 giải pháp số', value: 'Chuyên nghiệp' },
  { icon: Lock, label: 'Tư vấn nhanh qua Zalo', value: '24/7' },
  { icon: Gauge, label: 'Phù hợp doanh nghiệp', value: 'SME+' },
  { icon: BarChart3, label: 'Hỗ trợ chuyển đổi số', value: 'Toàn diện' },
]

export function TrustStrip() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Grid of trust items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative group p-6 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-slate-900">{item.label}</h3>
                  <p className="text-sm text-cyan-600 font-bold">{item.value}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
