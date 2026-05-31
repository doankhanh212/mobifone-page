'use client'

import { motion } from 'framer-motion'
import { Building, ShoppingBag, School, Phone, Users, Factory } from 'lucide-react'

const useCases = [
  {
    icon: Building,
    title: 'Doanh nghiệp SME',
    description: 'Chuyển đổi số toàn bộ quy trình vận hành từ bán hàng đến tài chính',
    problems: [
      'Quản lý bán hàng theo cách thủ công',
      'Không có hệ thống quản lý tập trung',
      'Chứng từ giấy nhiều, khó theo dõi',
    ],
    recommendations: ['eOffice', '1POS', 'Invoice', '1ERP'],
  },
  {
    icon: ShoppingBag,
    title: 'Hộ kinh doanh & Cửa hàng',
    description: 'Giải pháp nhẹ, dễ sử dụng và chi phí thấp',
    problems: [
      'Quản lý cửa hàng với công cụ cơ bản',
      'Không theo dõi được doanh thu chính xác',
      'Khó phát hành hóa đơn',
    ],
    recommendations: ['Loa Thần Tài', '1POS', 'Invoice'],
  },
  {
    icon: Phone,
    title: 'Trung tâm chăm sóc khách hàng',
    description: 'Tổng đài cloud hiện đại với quản lý hiệu suất',
    problems: [
      'Tổng đài cũ, chi phí cao',
      'Khó quản lý hiệu suất tổng đài viên',
      'Không có dữ liệu cho phân tích',
    ],
    recommendations: ['Cloud Contact Center 3C', 'SIP Trunk'],
  },
  {
    icon: School,
    title: 'Trường học & Đơn vị đào tạo',
    description: 'Quản lý tài liệu số, hợp đồng điện tử và ký số',
    problems: [
      'Quản lý tài liệu học sinh truyền thống',
      'Cấp chứng chỉ cần ký số pháp lý',
      'Hợp đồng dạy học cần bảo mật',
    ],
    recommendations: ['eOffice', 'eContract', 'MOBIFONE CA'],
  },
  {
    icon: Users,
    title: 'Tổ chức hành chính',
    description: 'Số hóa quy trình nội bộ và giao dịch điện tử',
    problems: [
      'Quy trình duyệt tài liệu chậm',
      'Lưu trữ giấy tờ tốn không gian',
      'Cần chữ ký điện tử cho giao dịch',
    ],
    recommendations: ['eOffice', 'eWork', 'eContract', 'MOBIFONE CA'],
  },
  {
    icon: Factory,
    title: 'Doanh nghiệp lớn',
    description: 'Hệ sinh thái số hoàn chỉnh cho toàn bộ vận hành',
    problems: [
      'Nhiều phòng ban, cần tích hợp tập trung',
      'Quy trình phức tạp cần tối ưu',
      'Cần quản lý toàn diện từ văn phòng đến hạ tầng',
    ],
    recommendations: ['Tất cả 12 giải pháp'],
  },
]

export function UseCasesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Phù hợp với nhiều mô hình tổ chức</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Các giải pháp MobiFone được thiết kế cho các loại tổ chức khác nhau từ SME đến doanh nghiệp lớn
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-block p-3 rounded-lg bg-blue-100 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4">
                  {useCase.description}
                </p>

                {/* Problems */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-700 mb-2 uppercase">Thách thức</p>
                  <ul className="space-y-1">
                    {useCase.problems.map((problem, j) => (
                      <li key={j} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendations */}
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-2 uppercase">Giải pháp đề nghị</p>
                  <div className="flex flex-wrap gap-1">
                    {useCase.recommendations.map((rec, j) => (
                      <span key={j} className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
