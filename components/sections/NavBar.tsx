'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ZaloLink } from '../ZaloLink'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giải pháp', href: '/giai-phap' },
    { label: 'Hệ sinh thái', href: '/he-sinh-thai' },
    { label: 'Văn phòng số', href: '/van-phong-so' },
    { label: 'Hạ tầng số', href: '/ha-tang-so' },
    { label: 'Liên hệ', href: '/lien-he' },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors dark:border-cyan-500/20 dark:bg-slate-950/85"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              >
                MobiFone Solutions
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors',
                      isActive
                        ? 'text-blue-600 dark:text-cyan-300'
                        : 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-300',
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <ZaloLink variant="primary" className="text-sm">
                Tư vấn qua Zalo
              </ZaloLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200 py-4 space-y-3"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'block px-4 py-2 rounded-lg transition-colors',
                    pathname === item.href
                      ? 'bg-blue-50 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-4 pt-2">
                <ThemeToggle />
                <ZaloLink variant="primary" className="flex-1 justify-center">
                  Tư vấn qua Zalo
                </ZaloLink>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  )
}
