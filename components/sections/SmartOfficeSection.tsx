'use client'

import { motion } from 'framer-motion'
import { FileText, Users, MessageSquare, Briefcase, Calendar, HardDrive } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

const modules = [
  { icon: FileText, title: 'eOffice', description: 'Quản lý tài liệu & phê duyệt' },
  { icon: Users, title: 'eHRM', description: 'Quản lý nhân sự tập trung' },
  { icon: MessageSquare, title: 'eCollaboration', description: 'Cộng tác & giao tiếp' },
  { icon: Briefcase, title: 'eAsset', description: 'Quản lý tài sản doanh nghiệp' },
  { icon: Calendar, title: 'eMeeting', description: 'Lịch họp & phòng họp thông minh' },
  { icon: HardDrive, title: 'Drive', description: 'Lưu trữ tệp tập trung' },
]

export function SmartOfficeSection() {
  return (
    <section id="smart-office" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Smart Office - Giải Pháp Ưu Tiên</h2>
          <p className="text-slate-600 text-lg dark:text-slate-400">
            6 module tích hợp hoàn hảo để quản lý toàn bộ văn phòng số
          </p>
        </motion.div>

        {/* Mockup Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden border border-blue-200 bg-white p-8 mb-12 shadow-lg dark:border-blue-500/30 dark:bg-slate-900"
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Dashboard header mockup */}
            <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Dashboard Quản Lý</h3>
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  Hoạt động
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400">Tổng quan tất cả hoạt động hôm nay</p>
            </div>

            {/* Modules grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {modules.map((module, i) => {
                const Icon = module.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors group cursor-pointer dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-cyan-500/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{module.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{module.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800/30 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">98%</div>
                <p className="text-xs text-slate-600 mt-1 dark:text-slate-400">Hiệu suất</p>
              </div>
              <div className="text-center border-l border-r border-slate-200 dark:border-slate-600">
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <p className="text-xs text-slate-600 mt-1 dark:text-slate-400">Sẵn sàng</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">∞</div>
                <p className="text-xs text-slate-600 mt-1 dark:text-slate-400">Mở rộng</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <ZaloLink variant="primary" className="text-lg">
            Nhận Tư Vấn Smart Office Ngay
          </ZaloLink>
          <p className="text-slate-600 mt-4 text-sm dark:text-slate-400">
            Triển khai trong 2 tuần • Đội ngũ hỗ trợ 24/7
          </p>
        </motion.div>
      </div>
    </section>
  )
}
