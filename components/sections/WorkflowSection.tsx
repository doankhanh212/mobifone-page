'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

const workflowSteps = [
  {
    number: '1',
    label: 'Quản lý văn bản',
    product: 'eOffice',
    description: 'Tập trung hóa quản lý tài liệu',
  },
  {
    number: '2',
    label: 'Giao việc',
    product: 'eWork',
    description: 'Phân công công việc hiệu quả',
  },
  {
    number: '3',
    label: 'Ký hợp đồng',
    product: 'eContract',
    description: 'Ký kết hợp đồng điện tử',
  },
  {
    number: '4',
    label: 'Ký số',
    product: 'MOBIFONE CA',
    description: 'Chứng thư số pháp lý',
  },
  {
    number: '5',
    label: 'Xuất hóa đơn',
    product: 'MobiFone Invoice',
    description: 'Phát hành hóa đơn tự động',
  },
  {
    number: '6',
    label: 'Lưu trữ',
    product: 'MobiFone IMS',
    description: 'Quản lý chứng từ tập trung',
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Số hóa quy trình vận hành từ văn bản đến chứng từ</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Quy trình hoàn chỉnh từ quản lý tài liệu đến lưu trữ chứng từ, được tối ưu bởi các giải pháp MobiFone
          </p>
        </motion.div>

        {/* Workflow - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-4 mb-12">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Arrow connector */}
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-12 left-full w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 origin-left"
                  />
                )}

                {/* Step Card */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold mb-3 mx-auto">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{step.label}</h4>
                  <p className="text-xs text-cyan-600 font-semibold mb-2">{step.product}</p>
                  <p className="text-xs text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow - Mobile/Tablet */}
        <div className="lg:hidden space-y-4 mb-12">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <div className="flex-grow pt-1">
                <h4 className="font-bold text-slate-900">{step.label}</h4>
                <p className="text-sm text-cyan-600 font-semibold">{step.product}</p>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < workflowSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-slate-300 mt-2" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <ZaloLink variant="primary" className="text-base">
            Tư vấn quy trình số hóa
          </ZaloLink>
        </motion.div>
      </div>
    </section>
  )
}
