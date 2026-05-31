'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function FloatingZaloButton() {
  return (
    <motion.a
      href="https://zalo.me/84902931119"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        boxShadow: [
          '0 0 20px rgba(37, 99, 235, 0.4)',
          '0 0 40px rgba(37, 99, 235, 0.6)',
          '0 0 20px rgba(37, 99, 235, 0.4)',
        ],
      }}
      transition={{
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 },
        boxShadow: { duration: 2, repeat: Infinity },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm">Tư vấn Zalo</span>
    </motion.a>
  )
}
