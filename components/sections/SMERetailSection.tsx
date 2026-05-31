'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Receipt } from 'lucide-react'
import { ZaloLink } from '../ZaloLink'

export function SMERetailSection() {
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Giải pháp cho hộ kinh doanh và bán lẻ</h2>
          <p className="text-slate-600 text-lg">
            Quản lý bán hàng, thanh toán và hóa đơn toàn diện cho cửa hàng và hộ kinh doanh
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Loa Thần Tài MobiFone</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Thông báo giao dịch thông minh với âm thanh cho mỗi thanh toán thành công, giúp cửa hàng nhận tiền nhanh chóng
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">MobiFone 1POS</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Hệ thống quản lý bán hàng và POS dễ sử dụng cho cửa hàng nhỏ và hộ kinh doanh
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <Receipt className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">MobiFone Invoice & 1ERP</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Phát hành hóa đơn điện tử tự động và quản lý bán hàng tích hợp cho SME
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <ZaloLink variant="primary">
                Tư vấn cho hộ kinh doanh
              </ZaloLink>
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 shadow-lg">
              {/* Dashboard Grid */}
              <div className="space-y-4">
                {/* Revenue Card */}
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="text-xs text-slate-600 font-semibold mb-1">Doanh thu hôm nay</p>
                  <p className="text-2xl font-bold text-slate-900">12.500.000đ</p>
                  <p className="text-xs text-green-600 mt-1">↑ 15% so với hôm qua</p>
                </div>

                {/* Orders */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <p className="text-xs text-slate-600 font-semibold mb-2">Đơn hàng</p>
                    <p className="text-xl font-bold text-slate-900">24</p>
                    <p className="text-xs text-slate-500 mt-1">Hôm nay</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <p className="text-xs text-slate-600 font-semibold mb-2">Hóa đơn</p>
                    <p className="text-xl font-bold text-slate-900">24</p>
                    <p className="text-xs text-slate-500 mt-1">Đã phát hành</p>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="text-xs text-slate-600 font-semibold mb-3">Đơn hàng gần đây</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Khách A</span>
                      <span className="text-blue-600 font-semibold">850.000đ</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Khách B</span>
                      <span className="text-blue-600 font-semibold">1.200.000đ</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Khách C</span>
                      <span className="text-blue-600 font-semibold">2.100.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Icon components
function Smartphone({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}
