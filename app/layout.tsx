import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Giải pháp chuyển đổi số MobiFone | eOffice, CA, eContract, Invoice, 3C',
  description: 'Khám phá 12 giải pháp số MobiFone cho doanh nghiệp: Loa Thần Tài, MobiFone CA, IMS, eOffice, 1ERP, eContract, 1POS, Invoice, eWork, HRM, Cloud Contact Center 3C và Truyền thanh thông minh.',
  keywords: 'giải pháp số MobiFone, chuyển đổi số doanh nghiệp, MobiFone eOffice, MobiFone CA, chữ ký số MobiFone, MobiFone eContract, hợp đồng điện tử, MobiFone Invoice, hóa đơn điện tử, MobiFone IMS, MobiFone 1POS, Loa Thần Tài MobiFone, MobiFone eWork, MobiFone HRM, tổng đài 3C, Cloud Contact Center, Truyền thanh thông minh, Smart Sale for SME, 1ERP',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'Giải pháp chuyển đổi số MobiFone | eOffice, CA, eContract, Invoice, 3C',
    description: 'Khám phá 12 giải pháp số MobiFone cho doanh nghiệp: Loa Thần Tài, MobiFone CA, IMS, eOffice, 1ERP, eContract, 1POS, Invoice, eWork, HRM, Cloud Contact Center 3C và Truyền thanh thông minh.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-white scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
