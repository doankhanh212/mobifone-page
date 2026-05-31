'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Sparkles,
  CheckCircle2,
  Building2,
} from 'lucide-react'
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
    <section className="relative pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-slate-950 z-0">
      {/* Animated Background Grid & Scanline */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,91,170,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,91,170,0.06)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(0,170,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.1)_1px,transparent_1px)]" />
        <motion.div
          className="absolute top-0 bottom-0 w-[200%] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-[45deg]"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
        {/* Subtle Ambient Glows */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        {/* Tech Particles */}
        {[
          { top: '15%', left: '15%', delay: 0 },
          { top: '25%', left: '85%', delay: 1 },
          { top: '65%', left: '10%', delay: 2 },
          { top: '75%', left: '80%', delay: 1.5 },
          { top: '45%', left: '50%', delay: 0.5 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500/40 dark:bg-cyan-400/50 shadow-[0_0_8px_2px_rgba(34,211,238,0.4)]"
            style={{ top: pos.top, left: pos.left }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: pos.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-start">
              <span className="px-4 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold dark:bg-blue-900/30 dark:border-blue-800/50 dark:text-blue-300 shadow-sm shadow-blue-500/10">
                <Sparkles className="mr-2 inline h-4 w-4" />
                Hệ sinh thái chuyển đổi số
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance leading-[1.15]"
            >
              <span className="text-slate-900 dark:text-white">Giải pháp chuyển đổi số</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                toàn diện cho doanh nghiệp
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed dark:text-slate-400"
            >
              Từ văn phòng số, hợp đồng điện tử, chữ ký số, hóa đơn điện tử, quản lý bán hàng, tổng đài 3C đến hạ tầng Cloud — tất cả trong một hệ sinh thái vận hành hiện đại.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-start"
            >
              <ZaloLink variant="primary" className="text-base font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300">
                Nhận tư vấn ngay
              </ZaloLink>
              <a
                href="/giai-phap"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 font-semibold dark:border-slate-800 dark:text-slate-300 dark:hover:border-cyan-500/50 dark:hover:text-cyan-300 dark:hover:bg-cyan-500/10 hover:-translate-y-0.5"
              >
                Khám phá 12 giải pháp
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4 pt-4 text-sm font-medium text-slate-600 dark:text-slate-400"
            >
              {[
                { text: '12 giải pháp số', icon: CheckCircle2 },
                { text: 'Tư vấn nhanh qua Zalo', icon: CheckCircle2 },
                { text: 'SME & Hộ kinh doanh', icon: Building2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-default">
                  <item.icon className="w-4 h-4 text-emerald-500 dark:text-cyan-400 dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Digital Core */}
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
