'use client'

import { motion } from 'framer-motion'
import { Cloud, Shield, Zap } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Decorative grid background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,170,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 dark:text-white">Hạ tầng công nghệ sẵn sàng cho doanh nghiệp số</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto dark:text-slate-300">
            Nền tảng cloud ổn định, bảo mật cao và khả năng mở rộng linh hoạt cho tất cả giải pháp số của bạn
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Cloud,
              title: 'Hạ tầng ổn định',
              description: 'Chạy trên các data center đa vùng với tính sẵn sàng 99.99%',
            },
            {
              icon: Shield,
              title: 'Bảo mật dữ liệu',
              description: 'Mã hóa end-to-end, tuân thủ tiêu chuẩn quốc tế, backup tự động',
            },
            {
              icon: Zap,
              title: 'Sẵn sàng mở rộng',
              description: 'Tự động mở rộng theo nhu cầu, không lo về khả năng xử lý',
            },
            {
              icon: Cloud,
              title: 'Hỗ trợ tích hợp',
              description: 'API toàn diện cho kết nối với các hệ thống hiện có',
            },
            {
              icon: Shield,
              title: 'Tuân thủ pháp lý',
              description: 'Đáp ứng yêu cầu của pháp luật Việt Nam về lưu trữ dữ liệu',
            },
            {
              icon: Zap,
              title: 'Hỗ trợ 24/7',
              description: 'Đội ngũ kỹ thuật sẵn sàng hỗ trợ bất kỳ lúc nào',
            },
          ].map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-xl p-6 group hover:border-blue-300 hover:shadow-lg transition-all duration-300 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 dark:border-cyan-500/30 dark:hover:border-cyan-400/50"
              >
                <div className="inline-block p-3 rounded-lg bg-cyan-600/20 mb-4 group-hover:bg-cyan-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-white">{benefit.title}</h3>
                <p className="text-slate-600 text-sm dark:text-slate-300">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-2xl p-8 mb-12 shadow-lg dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 dark:border-cyan-500/30"
        >
          <h4 className="text-slate-900 font-bold mb-8 dark:text-white">Kiến trúc hệ thống doanh nghiệp</h4>

          {/* Diagram - Desktop */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-8">
              {/* User Layer */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-center flex-1"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg px-4 py-3 text-white font-semibold inline-block mb-2">
                  Ứng dụng & Portal
                </div>
                <p className="text-slate-600 text-sm dark:text-slate-400">Web, Mobile, Desktop</p>
              </motion.div>

              {/* Arrow */}
              <div className="flex-1 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-transparent" />
              </div>

              {/* API Layer */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                className="text-center flex-1"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg px-4 py-3 text-white font-semibold inline-block mb-2">
                  API Gateway
                </div>
                <p className="text-slate-600 text-sm dark:text-slate-400">RESTful & Integration</p>
              </motion.div>

              {/* Arrow */}
              <div className="flex-1 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-transparent" />
              </div>

              {/* Services */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
                className="text-center flex-1"
              >
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg px-4 py-3 text-white font-semibold inline-block mb-2">
                  Microservices
                </div>
                <p className="text-slate-600 text-sm dark:text-slate-400">12 Giải pháp số</p>
              </motion.div>

              {/* Arrow */}
              <div className="flex-1 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-600 to-transparent" />
              </div>

              {/* Database */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                className="text-center flex-1"
              >
                <div className="bg-gradient-to-br from-cyan-600 to-green-600 rounded-lg px-4 py-3 text-white font-semibold inline-block mb-2">
                  Database & Storage
                </div>
                <p className="text-slate-600 text-sm dark:text-slate-400">Distributed, Replicated</p>
              </motion.div>
            </div>

            {/* Security Layer */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-cyan-500/20">
              <p className="text-slate-600 text-sm text-center mb-4 dark:text-slate-400">🔒 Lớp bảo mật toàn diện</p>
              <div className="flex justify-center gap-4">
                {[
                  'Firewall & DDoS',
                  'SSL/TLS Encryption',
                  'WAF',
                  'Intrusion Detection',
                  'Access Control',
                ].map((layer, i) => (
                  <div key={i} className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold dark:bg-slate-700/50 dark:border-cyan-500/30 dark:text-cyan-300">
                    {layer}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Diagram - Mobile */}
          <div className="lg:hidden space-y-4">
            {[
              { label: 'Ứng dụng & Portal', sub: 'Web, Mobile, Desktop' },
              { label: 'API Gateway', sub: 'RESTful & Integration' },
              { label: 'Microservices', sub: '12 Giải pháp số' },
              { label: 'Database & Storage', sub: 'Distributed, Replicated' },
            ].map((layer, i) => (
              <div key={i}>
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg px-4 py-3 text-white font-semibold text-center">
                  {layer.label}
                </div>
                <p className="text-slate-600 text-sm text-center my-2 dark:text-slate-400">{layer.sub}</p>
                {i < 3 && <div className="h-1 bg-gradient-to-b from-cyan-600 to-transparent mb-4" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <ZaloLink variant="primary" className="text-base">
            Tư vấn hạ tầng triển khai
          </ZaloLink>
        </motion.div>
      </div>
    </section>
  )
}
