'use client'

import { motion } from 'framer-motion'
import { PRODUCTS } from '@/lib/products'
import { MessageCircle } from 'lucide-react'

export function SolutionsGrid() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            12 giải pháp số MobiFone cho doanh nghiệp
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tổng hợp các giải pháp hỗ trợ doanh nghiệp số hóa vận hành, chứng từ, bán hàng, nhân sự và chăm sóc khách hàng.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
          {PRODUCTS.map((product, index) => {
            const Icon = product.icon
            const numberBadge = String(index + 1).padStart(2, '0')

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-cyan-500/50"
              >
                {/* Header (Icon + Number) */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center dark:bg-blue-900/30 dark:text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-100 dark:text-slate-800/80 select-none">
                    {numberBadge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="mb-6 flex-1">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold uppercase tracking-wider mb-3 dark:bg-slate-800 dark:text-slate-400">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Single Zalo CTA */}
                <div className="mt-auto border-t border-slate-100 dark:border-slate-800 pt-4">
                  <a
                    href="https://zalo.me/84902931119"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 dark:bg-blue-900/30 dark:text-cyan-300 dark:hover:bg-cyan-600 dark:hover:text-white"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Tư vấn Zalo
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto dark:from-slate-900 dark:to-slate-800 dark:border-cyan-500/30 shadow-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Bạn cần tư vấn giải pháp phù hợp?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Trao đổi nhanh qua Zalo để được gợi ý giải pháp phù hợp với mô hình vận hành và ngân sách của doanh nghiệp.
          </p>
          <a
            href="https://zalo.me/84902931119"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-blue-500/50 transition-all duration-300 dark:bg-cyan-600 dark:hover:bg-cyan-500"
          >
            <MessageCircle className="w-5 h-5" />
            Nhắn Zalo tư vấn ngay
          </a>
        </motion.div>
      </div>
    </section>
  )
}
