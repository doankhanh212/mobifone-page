'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      title="Chuyển nền trắng/xanh đen"
      aria-label="Chuyển nền trắng/xanh đen"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-600 dark:border-cyan-500/30 dark:bg-slate-900/80 dark:text-cyan-300 dark:hover:border-cyan-400 dark:hover:text-cyan-200"
    >
      <Moon className="h-5 w-5 dark:hidden" />
      <Sun className="hidden h-5 w-5 dark:block" />
    </button>
  )
}
