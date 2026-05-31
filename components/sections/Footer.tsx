'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'

export function Footer() {
  const footerLinks = [
    { icon: MessageCircle, label: 'Zalo', href: 'https://zalo.me/84902931119' },
    { icon: Phone, label: '0902 931 119', href: 'tel:0902931119' },
    { icon: Mail, label: 'Email', href: 'mailto:trongnghiavo89@gmail.com' },
  ]

  return (
    <footer className="border-t border-slate-200 bg-white py-16 px-4 sm:px-6 lg:px-8 dark:border-cyan-500/20 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand - Large column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              MobiFone Solutions
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 dark:text-slate-300">
              Giải pháp chuyển đổi số toàn diện cho doanh nghiệp Việt Nam. Từ văn phòng số đến hạ tầng cloud, chúng tôi hỗ trợ bạn trên toàn hành trình số hóa.
            </p>
            <div className="flex gap-3">
              {footerLinks.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white transition-all dark:bg-slate-700/50 dark:text-slate-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Solutions - Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider dark:text-white">Giải pháp</h3>
            <div className="space-y-2">
              {PRODUCTS.slice(0, 6).map((product) => (
                <a
                  key={product.id}
                  href={product.detailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-blue-600 transition-colors text-sm dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  {product.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Solutions - Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider dark:text-white">&nbsp;</h3>
            <div className="space-y-2">
              {PRODUCTS.slice(6).map((product) => (
                <a
                  key={product.id}
                  href={product.detailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-blue-600 transition-colors text-sm dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  {product.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider dark:text-white">Liên hệ</h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-500 text-xs mb-1 dark:text-slate-400">Hotline</p>
                <a href="tel:0902931119" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  0902 931 119
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1 dark:text-slate-400">Email</p>
                <a href="mailto:trongnghiavo89@gmail.com" className="text-cyan-400 hover:text-cyan-300 text-sm break-all">
                  trongnghiavo89@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 py-8 dark:border-slate-700">
          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm dark:text-slate-400">
            <p>
              © {new Date().getFullYear()} MobiFone Solutions. Giải pháp chuyển đổi số toàn diện. Liên hệ hợp tác
            </p>
            <div className="flex gap-6">
              <a href="/lien-he" className="hover:text-cyan-400 transition-colors">
                Chính sách bảo mật
              </a>
              <a href="/lien-he" className="hover:text-cyan-400 transition-colors">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
