'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
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
          className="mb-14 grid overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm md:grid-cols-[1.05fr_0.95fr] dark:border-cyan-500/25 dark:from-slate-900 dark:to-slate-800"
        >
          <div className="relative min-h-[260px] md:min-h-[360px]">
            <Image
              src="/lien-he.jpg"
              alt="Tư vấn chuyển đổi số doanh nghiệp MobiFone"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
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
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
