'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  DollarSign,
  TrendingUp,
  Shield,
  Database,
  Scaling,
} from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Chuẩn hóa quy trình vận hành',
    description:
      'Định nghĩa rõ ràng các quy trình, tự động hóa các công việc thủ công',
  },
  {
    icon: DollarSign,
    title: 'Rút ngắn thời gian xử lý hồ sơ',
    description: 'Giảm thời gian xử lý từ ngày xuống giờ với quy trình tự động',
  },
  {
    icon: TrendingUp,
    title: 'Tối ưu chi phí giấy tờ và vận hành',
    description: 'Giảm đến 40% chi phí giấy tờ, lưu trữ và quản lý hành chính',
  },
  {
    icon: Shield,
    title: 'Tăng hiệu suất nhân sự',
    description:
      'Nhân viên tập trung vào công việc có giá trị cao thay vì thao tác thủ công',
  },
  {
    icon: Database,
    title: 'Quản trị dữ liệu tập trung',
    description:
      'Một kho lưu trữ duy nhất, dễ truy cập, an toàn với khả năng kiểm toán đầy đủ',
  },
  {
    icon: Scaling,
    title: 'Mở rộng linh hoạt theo nhu cầu',
    description:
      'Từ 10 nhân viên đến 10,000 nhân viên, hệ thống vẫn hoạt động ổn định',
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Lợi ích doanh nghiệp nhận được</h2>
          <p className="text-slate-600 text-lg">
            Các lợi ích cụ thể từ việc triển khai giải pháp MobiFone
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 group-hover:border-blue-400 transition-all duration-300 dark:from-slate-900 dark:to-slate-800 dark:border-cyan-500/25 dark:group-hover:border-cyan-400/50" />

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300 dark:bg-cyan-500/15 dark:group-hover:bg-cyan-500/25">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-cyan-300" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-white">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed dark:text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
