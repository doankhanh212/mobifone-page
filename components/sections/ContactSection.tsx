'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

export function ContactSection() {
  return (
    <section id="contact" className="bg-white dark:bg-slate-950">
      <div className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/lien-he.jpg"
          alt="Tư vấn giải pháp số MobiFone"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/15" />
        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <span className="mb-4 inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-100 backdrop-blur">
              Liên hệ MobiFone Solutions
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Sẵn sàng tư vấn giải pháp phù hợp cho doanh nghiệp của bạn
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-100">
              Trao đổi nhanh qua Zalo, điện thoại hoặc email để được hỗ trợ lựa chọn giải pháp số hóa vận hành, chứng từ, bán hàng và chăm sóc khách hàng.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ZaloLink variant="primary" className="justify-center">
                Tư vấn qua Zalo
              </ZaloLink>
              <a
                href="tel:0902931119"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-slate-950"
              >
                Gọi 0902 931 119
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            Chọn kênh liên hệ thuận tiện
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Hỗ trợ nhanh qua Zalo, điện thoại hoặc email.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative rounded-xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 text-center transition-all duration-300 hover:border-blue-400 hover:shadow-lg dark:from-slate-900 dark:to-slate-800 dark:border-cyan-500/35"
          >
            <MessageCircle className="mx-auto mb-4 h-8 w-8 text-blue-600" />
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
            className="group relative rounded-xl border border-slate-300 bg-slate-50 p-8 text-center transition-all duration-300 hover:border-slate-400 hover:shadow-lg dark:bg-slate-900 dark:border-cyan-500/25"
          >
            <Phone className="mx-auto mb-4 h-8 w-8 text-slate-700 dark:text-cyan-300" />
            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Hotline</h3>
            <a
              href="tel:0902931119"
              className="mb-2 block text-lg font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              0902 931 119
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-xl border border-slate-300 bg-slate-50 p-8 text-center transition-all duration-300 hover:border-slate-400 hover:shadow-lg dark:bg-slate-900 dark:border-cyan-500/25"
          >
            <Mail className="mx-auto mb-4 h-8 w-8 text-slate-700 dark:text-cyan-300" />
            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Email</h3>
            <a
              href="mailto:trongnghiavo89@gmail.com"
              className="break-all text-sm text-blue-600 transition-colors hover:text-blue-700"
            >
              trongnghiavo89@gmail.com
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 dark:from-slate-900 dark:to-slate-800 dark:border-cyan-500/25"
        >
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Gửi thông tin tư vấn
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập họ tên của bạn"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Số điện thoại</label>
                <input
                  type="tel"
                  placeholder="0123 456 789"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Doanh nghiệp</label>
              <input
                type="text"
                placeholder="Tên công ty/doanh nghiệp"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Giải pháp quan tâm</label>
              <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none">
                <option>Chọn giải pháp</option>
                <option>Loa Thần Tài MobiFone</option>
                <option>MOBIFONE CA</option>
                <option>MobiFone eOffice</option>
                <option>MobiFone eContract</option>
                <option>MobiFone Invoice</option>
                <option>MobiFone eWork</option>
                <option>MobiFone HRM</option>
                <option>Cloud Contact Center 3C</option>
                <option>SIP Trunk</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Nội dung cần tư vấn</label>
              <textarea
                rows={4}
                placeholder="Mô tả nhu cầu của bạn"
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="pt-4">
              <ZaloLink variant="primary" className="w-full justify-center">
                Gửi thông tin qua Zalo
              </ZaloLink>
              <p className="mt-3 text-center text-xs text-slate-600 dark:text-slate-400">
                Bấm nút sẽ mở Zalo để gửi thông tin của bạn trực tiếp đến chúng tôi.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
