'use client'

import { ReactNode } from 'react'

interface ZaloLinkProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function ZaloLink({
  children,
  className = '',
  variant = 'primary',
}: ZaloLinkProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300'

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-md hover:shadow-lg',
    secondary:
      'bg-slate-200 text-slate-900 hover:bg-slate-300 hover:scale-105 transition-all',
    ghost: 'text-blue-600 hover:text-blue-700 hover:underline',
  }

  return (
    <a
      href="https://zalo.me/84902931119"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
