'use client'

import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { DigitalCommandCenter } from '@/components/hero/DigitalCommandCenter'

const trustItems = ['12 giải pháp số', '99.9% uptime', 'Tư vấn nhanh qua Zalo']

export function HeroSection() {
  return (
    <section className="relative z-0 overflow-hidden bg-white px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-28 dark:bg-slate-950">
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

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Hệ sinh thái chuyển đổi số MobiFone
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            MobiFone - Giải pháp chuyển đổi số hàng đầu cho doanh nghiệp của bạn
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Kết nối văn phòng số, ký số, hóa đơn, bán hàng, tổng đài 3C và hạ tầng số trong một hệ sinh thái dễ triển khai, dễ mở rộng.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/giai-phap"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/35"
            >
              Khám phá 12 giải pháp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="https://zalo.me/84902931119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-300/40 bg-white/80 px-6 text-base font-bold text-blue-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-50 dark:bg-slate-950/70 dark:text-cyan-100 dark:hover:bg-cyan-950/60"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Tư vấn qua Zalo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-cyan-300/20 dark:bg-slate-950/50 dark:text-slate-300"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-500" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full lg:justify-self-end">
          <DigitalCommandCenter />
        </div>
      </motion.div>
    </section>
  )
}
