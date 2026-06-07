'use client'

import { motion } from 'framer-motion'
import { PhoneCall, Radio } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

export function CommunicationSection() {
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Liên lạc và truyền thông thông minh</h2>
          <p className="text-slate-600 text-lg">
            Kết hợp tổng đài cloud đa kênh với truyền thanh ứng dụng CNTT, IoT và nền tảng cloud
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product 1 - Cloud Contact Center 3C */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-blue-600 text-white">
                <PhoneCall className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Cloud Contact Center 3C</h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Giải pháp tổng đài Cloud Contact Center giúp doanh nghiệp quản lý chăm sóc khách hàng, telesales và hiệu suất tổng đài viên.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Tổng đài inbound/outbound tích hợp',
                'Quản lý hàng đợi gọi thông minh',
                'Phân tích hiệu suất thời gian thực',
                'Ghi âm và lưu trữ tự động',
                'Tích hợp CRM và hệ thống khác',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 bg-white rounded-full" />
                  </span>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <ZaloLink variant="primary" className="w-full justify-center">
              Tư vấn giải pháp 3C
            </ZaloLink>
          </motion.div>

          {/* Product 2 - Smart Broadcast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-cyan-300 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-cyan-600 text-white">
                <Radio className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Truyền thanh thông minh</h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Giải pháp truyền thanh thế hệ mới của MobiFone giúp phát tin qua IP, quản lý thiết bị IoT từ xa và chuyển văn bản thành giọng nói bằng AI.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Phát thanh từ điện thoại, máy tính bảng, laptop hoặc PC',
                'Đặt lịch phát bản tin theo giờ, ngày và tuần',
                'Chuyển văn bản thành file ghi âm bằng AI text-to-speech',
                'Quản lý thiết bị MIRA, mGateway từ xa',
                'Biên soạn và phát hành tin tức địa phương tới ứng dụng người dân',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 bg-white rounded-full" />
                  </span>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <ZaloLink variant="primary" className="w-full justify-center">
              Tư vấn Truyền thanh thông minh
            </ZaloLink>
          </motion.div>
        </div>

        {/* Call Center Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:border-slate-700"
        >
          <h4 className="text-slate-900 font-bold mb-6 dark:text-white">Giao diện Tổng đài 3C - Quản lý Cuộc gọi</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Gọi đến', value: '12', color: 'bg-blue-600' },
              { label: 'Gọi đi', value: '8', color: 'bg-cyan-600' },
              { label: 'Chờ xử lý', value: '3', color: 'bg-yellow-600' },
              { label: 'Đang nói', value: '5', color: 'bg-green-600' },
            ].map((stat, i) => (
              <div key={i} className={`${stat.color} rounded-lg p-4 text-white`}>
                <p className="text-sm opacity-90">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <p className="text-slate-600 text-sm mb-3 dark:text-slate-400">Danh sách tổng đài viên</p>
            <div className="space-y-2">
              {[
                { name: 'Trần Thị A', status: 'Đang nói', duration: '2:34' },
                { name: 'Nguyễn Văn B', status: 'Sẵn sàng', duration: '-' },
                { name: 'Lê Văn C', status: 'Đang nói', duration: '5:12' },
                { name: 'Phạm Thị D', status: 'Giải lao', duration: '-' },
              ].map((agent, i) => (
                <div key={i} className="flex items-center justify-between text-sm text-slate-700 p-2 bg-white rounded border border-slate-100 dark:text-slate-300 dark:bg-slate-700/50 dark:border-transparent">
                  <span>{agent.name}</span>
                  <div className="flex items-center gap-3">
                    <span className={agent.status === 'Đang nói' ? 'text-green-600 dark:text-green-400' : 'text-slate-500 dark:text-slate-400'}>
                      {agent.status}
                    </span>
                    <span className="text-slate-500 dark:text-slate-500">{agent.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <ZaloLink variant="primary" className="text-base">
            Tư vấn giải pháp truyền thông
          </ZaloLink>
        </motion.div>
      </div>
    </section>
  )
}
