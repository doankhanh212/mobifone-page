'use client'

import { motion } from 'framer-motion'
import { FileText, PenTool, CheckCircle2, FileBarChart2 } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

const steps = [
  {
    number: 1,
    label: 'Tạo Hợp Đồng',
    description: 'Soạn thảo & quản lý hợp đồng điện tử',
    icon: FileText,
  },
  {
    number: 2,
    label: 'Ký Số',
    description: 'Ký số bảo mật với chứng chỉ MobiCA',
    icon: PenTool,
  },
  {
    number: 3,
    label: 'Phê Duyệt',
    description: 'Phê duyệt quy trình tự động',
    icon: CheckCircle2,
  },
  {
    number: 4,
    label: 'Xuất Hóa Đơn',
    description: 'Phát hành hóa đơn điện tử tự động',
    icon: FileBarChart2,
  },
]

const products = [
  {
    title: 'eContract',
    description: 'Quản lý hợp đồng điện tử toàn diện',
  },
  {
    title: 'MobiCA',
    description: 'Chứng chỉ số ký pháp lý',
  },
  {
    title: 'Invoice',
    description: 'Hóa đơn điện tử tự động',
  },
]

export function DigitalLegalSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Quy Trình Pháp Lý Điện Tử</h2>
          <p className="text-slate-600 text-lg dark:text-slate-400">
            Từ soạn thảo đến lưu trữ - toàn bộ quy trình ký số & hóa đơn tự động
          </p>
        </motion.div>

        {/* Workflow timeline */}
        <div className="mb-16">
          {/* Desktop timeline */}
          <div className="hidden md:grid grid-cols-4 gap-4 mb-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 h-full transition-all duration-300 dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-cyan-500/50">
                    {/* Step number */}
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <Icon className="w-8 h-8 text-cyan-400 mb-3" />

                    {/* Content */}
                    <h3 className="font-bold mb-1">{step.label}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>

                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <motion.div
                      className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-4 mb-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-slate-200 mt-2 dark:bg-slate-700" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex-1 mt-1 dark:bg-slate-800/50 dark:border-slate-700">
                    <h3 className="font-bold mb-1 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-cyan-400" />
                      {step.label}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Products section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all duration-300 text-center group dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-blue-500/50"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {product.title}
              </h3>
              <p className="text-slate-600 text-sm dark:text-slate-400">{product.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <ZaloLink variant="primary" className="text-lg">
            Tư Vấn Quy Trình Ký Số & Hóa Đơn
          </ZaloLink>
        </motion.div>
      </div>
    </section>
  )
}
