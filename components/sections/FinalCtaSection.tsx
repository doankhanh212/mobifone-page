'use client'

import { motion } from 'framer-motion'
import { ZaloLink } from '../ZaloLink'

export function FinalCtaSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Decorative grid background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,170,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex mb-6"
        >
          <span className="px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium dark:bg-cyan-500/20 dark:border-cyan-500/50 dark:text-cyan-300">
            ✨ Bạn muốn số hóa quy trình nào trước?
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-slate-900 dark:text-white"
        >
          Nhắn Zalo để được tư vấn <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            giải pháp phù hợp
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed dark:text-slate-300"
        >
          Trao đổi trực tiếp qua Zalo để được tư vấn giải pháp phù hợp với mô hình vận hành, ngân sách và mục tiêu tăng trưởng của bạn.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <ZaloLink variant="primary" className="text-lg px-8 py-3">
            Nhắn Zalo tư vấn ngay
          </ZaloLink>
          <a
            href="/giai-phap"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-300 text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 font-medium dark:border-slate-500 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10"
          >
            Xem lại 12 giải pháp
          </a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-slate-600 flex flex-col sm:flex-row gap-4 justify-center items-center dark:text-slate-400"
        >
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Tư vấn miễn phí
          </span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Không cần đăng ký
          </span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Phù hợp tất cả doanh nghiệp
          </span>
        </motion.p>
      </div>
    </section>
  )
}
