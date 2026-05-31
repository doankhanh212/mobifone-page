import { FloatingZaloButton } from '@/components/FloatingZaloButton'
import { NavBar } from '@/components/sections/NavBar'
import { Footer } from '@/components/sections/Footer'

interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-white transition-colors dark:bg-slate-950">
      <NavBar />
      {children}
      <Footer />
      <FloatingZaloButton />
    </main>
  )
}
