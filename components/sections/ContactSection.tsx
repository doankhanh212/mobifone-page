'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            Liên hệ MobiFone Solutions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Hỗ trợ nhanh qua Zalo, điện thoại hoặc email để tư vấn giải pháp phù hợp với nhu cầu của doanh nghiệp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-14 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm dark:border-cyan-500/25 dark:from-slate-900 dark:to-slate-800"
        >
          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative flex min-h-[360px] items-center justify-center bg-white p-3 sm:min-h-[440px] dark:bg-slate-950">
              <Image
                src="/lien-he.jpg"
                alt="Tư vấn chuyển đổi số doanh nghiệp MobiFone"
                fill
                priority
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="mb-4 inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-cyan-500/15 dark:text-cyan-200">
                Tư vấn chuyển đổi số
              </span>
              <h2 className="text-2xl font-bold leading-snug text-slate-900 md:text-3xl dark:text-white">
                Kết nối với đội ngũ tư vấn để chọn đúng giải pháp
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                Chia sẻ nhu cầu vận hành, bán hàng, chứng từ hoặc chăm sóc khách hàng. Chúng tôi sẽ gợi ý bộ giải pháp MobiFone phù hợp với quy mô và ngân sách của bạn.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ZaloLink variant="primary" className="justify-center">
                  Tư vấn qua Zalo
                </ZaloLink>
                <a
                  href="tel:0902931119"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-900 transition-all duration-300 hover:border-blue-500 hover:text-blue-700 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-200"
                >
                  Gọi 0902 931 119
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white">
            Chọn kênh liên hệ thuận tiện
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Bạn có thể liên hệ trực tiếp qua các kênh dưới đây.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 text-center transition-all duration-300 hover:border-blue-400 hover:shadow-lg dark:from-slate-900 dark:to-slate-800 dark:border-cyan-500/35"
          >
            <MessageCircle className="mx-auto mb-4 h-8 w-8 text-blue-600 dark:text-cyan-300" />
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Nhắn Zalo</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
              Nhanh nhất và tiện lợi nhất
            </p>
            <ZaloLink variant="primary" className="inline-flex w-full justify-center">
              Liên hệ qua Zalo
            </ZaloLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-300 bg-slate-50 p-8 text-center transition-all duration-300 hover:border-slate-400 hover:shadow-lg dark:bg-slate-900 dark:border-cyan-500/25"
          >
            <Phone className="mx-auto mb-4 h-8 w-8 text-slate-700 dark:text-cyan-300" />
            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Hotline</h3>
            <a
              href="tel:0902931119"
              className="mb-2 block text-lg font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-cyan-300"
            >
              0902 931 119
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-300 bg-slate-50 p-8 text-center transition-all duration-300 hover:border-slate-400 hover:shadow-lg dark:bg-slate-900 dark:border-cyan-500/25"
          >
            <Mail className="mx-auto mb-4 h-8 w-8 text-slate-700 dark:text-cyan-300" />
            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Email</h3>
            <a
              href="mailto:trongnghiavo89@gmail.com"
              className="break-all text-sm text-blue-600 transition-colors hover:text-blue-700 dark:text-cyan-300"
            >
              trongnghiavo89@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
