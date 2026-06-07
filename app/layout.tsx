import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const siteUrl = new URL('https://mobifonehcm.com.vn')

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'MobiFone Solutions HCM – Giải Pháp Chuyển Đổi Số Cho Doanh Nghiệp',
    template: '%s | MobiFone Solutions HCM',
  },
  description: 'Tư vấn giải pháp số MobiFone cho doanh nghiệp: eOffice, MobiFone CA, eContract, Invoice, IMS, 1POS, eWork, HRM, Cloud Contact Center 3C, Loa Thần Tài và Truyền thanh thông minh.',
  keywords: [
    'giải pháp số MobiFone',
    'chuyển đổi số doanh nghiệp',
    'MobiFone eOffice',
    'MobiFone CA',
    'chữ ký số MobiFone',
    'MobiFone eContract',
    'hợp đồng điện tử',
    'MobiFone Invoice',
    'hóa đơn điện tử',
    'MobiFone IMS',
    'MobiFone 1POS',
    'MobiFone eWork',
    'MobiFone HRM',
    'Cloud Contact Center 3C',
    'Loa Thần Tài MobiFone',
    'Truyền thanh thông minh',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
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
    title: 'MobiFone Solutions HCM – Giải Pháp Chuyển Đổi Số Cho Doanh Nghiệp',
    description: 'Tư vấn giải pháp số MobiFone cho doanh nghiệp: eOffice, MobiFone CA, eContract, Invoice, IMS, 1POS, eWork, HRM, Cloud Contact Center 3C, Loa Thần Tài và Truyền thanh thông minh.',
    url: '/',
    siteName: 'MobiFone Solutions HCM',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'MobiFone Solutions HCM - 12 giải pháp chuyển đổi số doanh nghiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MobiFone Solutions HCM – Giải Pháp Chuyển Đổi Số Cho Doanh Nghiệp',
    description: 'Tư vấn giải pháp số MobiFone cho doanh nghiệp: eOffice, MobiFone CA, eContract, Invoice, IMS, 1POS, eWork, HRM, Cloud Contact Center 3C, Loa Thần Tài và Truyền thanh thông minh.',
    images: ['/opengraph-image'],
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
