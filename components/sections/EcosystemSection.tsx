'use client'

import { motion } from 'framer-motion'
import { ECOSYSTEM_CATEGORIES, PRODUCTS } from '@/lib/products'

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Một hệ sinh thái số cho toàn bộ vận hành doanh nghiệp
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Các giải pháp MobiFone được tổ chức thành 4 hạng mục chính, từ vận hành, pháp lý, bán hàng đến liên lạc
          </p>
        </motion.div>

        {/* Ecosystem Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ECOSYSTEM_CATEGORIES.map((category, i) => {
            const categoryProducts = PRODUCTS.filter(p => category.products.includes(p.id))
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-600">
                    {category.description}
                  </p>
                </div>

                {/* Products List */}
                <div className="space-y-3">
                  {categoryProducts.map((product) => {
                    const Icon = product.icon
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/60 hover:bg-white transition-colors"
                      >
                        <Icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-grow">
                          <p className="font-semibold text-slate-900 text-sm">
                            {product.name}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {product.category}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Category Badge */}
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                    {categoryProducts.length} giải pháp
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Integration Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
            <p className="text-slate-900 font-semibold mb-2">
              🔗 Tất cả các giải pháp được tích hợp hoàn hảo
            </p>
            <p className="text-slate-600 text-sm">
              Dữ liệu đồng bộ, quy trình liên kết và quản lý tập trung cho hiệu suất tối đa
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
