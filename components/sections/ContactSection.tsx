'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Liên hệ MobiFone Solutions</h2>
          <p className="text-slate-600 text-lg">
            Hỗ trợ 24/7 qua Zalo, điện thoại, hoặc email
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Zalo - Primary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center dark:from-slate-900 dark:to-slate-800 dark:border-cyan-500/35"
          >
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Nhắn Zalo</h3>
            <p className="text-slate-600 mb-4 text-sm dark:text-slate-300">
              Nhanh nhất và tiện lợi nhất
            </p>
            <ZaloLink variant="primary" className="inline-flex w-full justify-center">
              Liên hệ qua Zalo
            </ZaloLink>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-xl border border-slate-300 bg-slate-50 hover:border-slate-400 hover:shadow-lg transition-all duration-300 text-center dark:bg-slate-900 dark:border-cyan-500/25"
          >
            <Phone className="w-8 h-8 text-slate-700 mx-auto mb-4 dark:text-cyan-300" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Hotline</h3>
            <a
              href="tel:0902931119"
              className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors block mb-2"
            >
              0902 931 119
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-xl border border-slate-300 bg-slate-50 hover:border-slate-400 hover:shadow-lg transition-all duration-300 text-center dark:bg-slate-900 dark:border-cyan-500/25"
          >
            <Mail className="w-8 h-8 text-slate-700 mx-auto mb-4 dark:text-cyan-300" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
            <a
              href="mailto:trongnghiavo89@gmail.com"
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors break-all"
            >
              trongnghiavo89@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Optional Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 dark:from-slate-900 dark:to-slate-800 dark:border-cyan-500/25"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Gửi thông tin tư vấn</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập họ tên của bạn"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Số điện thoại</label>
                <input
                  type="tel"
                  placeholder="0123 456 789"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Doanh nghiệp</label>
              <input
                type="text"
                placeholder="Tên công ty/doanh nghiệp"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Giải pháp quan tâm</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-blue-500">
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
              <label className="block text-sm font-medium text-slate-900 mb-2">Nội dung cần tư vấn</label>
              <textarea
                rows={4}
                placeholder="Mô tả nhu cầu của bạn"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div className="pt-4">
              <ZaloLink variant="primary" className="w-full justify-center">
                Gửi thông tin qua Zalo
              </ZaloLink>
              <p className="text-xs text-slate-600 text-center mt-3 dark:text-slate-400">
                Bấm nút sẽ mở Zalo để gửi thông tin của bạn trực tiếp đến chúng tôi
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
