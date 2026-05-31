'use client'

import { motion } from 'framer-motion'
import { ThreeHeroScene } from '@/components/ThreeHeroScene'

export function HeroSection() {
  return (
    <section className="relative z-0 overflow-hidden bg-white px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-28 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,91,170,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,91,170,0.06)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(0,170,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.1)_1px,transparent_1px)]" />
        <motion.div
          className="absolute bottom-0 top-0 w-[200%] skew-x-[45deg] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="mx-auto w-full max-w-7xl"
      >
        <ThreeHeroScene />
      </motion.div>
    </section>
  )
}
