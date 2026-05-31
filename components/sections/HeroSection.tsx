'use client'

import { motion, type Variants } from 'framer-motion'
import { Building2, CheckCircle2, Sparkles } from 'lucide-react'
import { ThreeHeroScene } from '@/components/ThreeHeroScene'
import { ZaloLink } from '../ZaloLink'

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative z-0 overflow-hidden bg-white px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,91,170,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,91,170,0.06)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(0,170,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.1)_1px,transparent_1px)]" />
        <motion.div
          className="absolute bottom-0 top-0 w-[200%] skew-x-[45deg] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 xl:gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex justify-start">
              <span className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm shadow-blue-500/10 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300">
                <Sparkles className="mr-2 inline h-4 w-4" />
                Hệ sinh thái chuyển đổi số
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-6xl"
            >
              <span className="text-slate-900 dark:text-white">Giải pháp chuyển đổi số</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                toàn diện cho doanh nghiệp
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl dark:text-slate-400"
            >
              Từ văn phòng số, hợp đồng điện tử, chữ ký số, hóa đơn điện tử, quản lý bán hàng, tổng đài 3C đến hạ tầng Cloud - tất cả trong một hệ sinh thái vận hành hiện đại.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col justify-start gap-4 pt-6 sm:flex-row">
              <ZaloLink variant="primary" className="text-base font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40">
                Nhận tư vấn ngay
              </ZaloLink>
              <a
                href="/giai-phap"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-800 dark:text-slate-300 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
              >
                Khám phá 12 giải pháp
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4 pt-4 text-sm font-medium text-slate-600 dark:text-slate-400"
            >
              {[
                { text: '12 giải pháp số', icon: CheckCircle2 },
                { text: 'Tư vấn nhanh qua Zalo', icon: CheckCircle2 },
                { text: 'SME & Hộ kinh doanh', icon: Building2 },
              ].map((item) => (
                <div key={item.text} className="group flex cursor-default items-center gap-2">
                  <item.icon className="h-4 w-4 text-emerald-500 transition-transform group-hover:scale-110 dark:text-cyan-400 dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  <span className="transition-colors group-hover:text-slate-900 dark:group-hover:text-white">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative z-10 mx-auto w-full max-w-xl lg:max-w-none"
          >
            <ThreeHeroScene />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
