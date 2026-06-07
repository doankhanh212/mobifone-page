'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function FloatingZaloButton() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href="https://zalo.me/84902931119"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tư vấn qua Zalo"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        boxShadow: reduceMotion
          ? '0 12px 24px rgba(37, 99, 235, 0.25)'
          : [
              '0 0 20px rgba(37, 99, 235, 0.4)',
              '0 0 40px rgba(37, 99, 235, 0.6)',
              '0 0 20px rgba(37, 99, 235, 0.4)',
            ],
      }}
      transition={{
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 },
        boxShadow: { duration: 2, repeat: reduceMotion ? 0 : Infinity },
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5" aria-hidden="true" />
      <span className="text-sm">Tư vấn Zalo</span>
    </motion.a>
  )
}
