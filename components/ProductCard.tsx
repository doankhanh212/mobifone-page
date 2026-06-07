'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Product } from '@/lib/products'
import { ZaloLink } from './ZaloLink'

interface ProductCardProps {
  product: Product
  delay?: number
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const Icon = product.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative group rounded-xl border transition-all duration-300 h-full flex flex-col ${
        product.featured
          ? 'bg-white border-cyan-300 shadow-lg hover:shadow-2xl hover:border-cyan-500 hover:scale-[1.02] dark:bg-slate-900/95 dark:border-cyan-400/40 dark:shadow-cyan-950/30'
          : 'bg-slate-50 border-slate-200 hover:border-blue-300 hover:shadow-lg hover:scale-[1.02] dark:bg-slate-900/80 dark:border-cyan-500/20 dark:hover:border-cyan-400/50'
      }`}
    >
      {/* Featured badge */}
      {product.featured && (
        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold">
          ★ Nổi bật
        </div>
      )}

      <div className="relative p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          {/* Number Badge */}
          <div className="inline-block px-3 py-1 rounded-lg bg-slate-200 text-slate-700 text-sm font-bold mb-3 dark:bg-slate-800 dark:text-cyan-200">
            #{product.id}
          </div>

          {/* Icon */}
          <div className={`inline-block p-3 rounded-lg mb-3 ${
            product.featured
              ? 'bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300'
              : 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300'
          }`}>
            <Icon className="w-6 h-6" />
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-white">
            <Link href={product.detailHref} className="hover:text-blue-600 dark:hover:text-cyan-300">
              {product.name}
            </Link>
          </h3>

          {/* Category Badge */}
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
            product.featured
              ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-200'
              : 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200'
          }`}>
            {product.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed dark:text-slate-300">
          {product.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          <Link
            href={product.detailHref}
            className="inline-flex w-full items-center justify-center rounded-lg border border-blue-200 px-4 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-500 hover:bg-blue-50 dark:border-cyan-500/30 dark:text-cyan-200 dark:hover:bg-cyan-500/10"
          >
            Xem chi tiết
          </Link>
          <ZaloLink variant="primary" className="w-full justify-center text-sm py-2 px-4">
            Tư vấn qua Zalo
          </ZaloLink>
        </div>
      </div>
    </motion.div>
  )
}
