import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'
import { SITE_URL } from '@/lib/products'

export const metadata: Metadata = {
  title: {
    absolute: 'MobiFone Solutions HCM – Giải Pháp Chuyển Đổi Số Cho Doanh Nghiệp',
  },
  description: 'Tư vấn giải pháp số MobiFone cho doanh nghiệp tại TP.HCM: eOffice, MobiFone CA, eContract, Invoice, IMS, 1POS, HRM, tổng đài 3C và Truyền thanh thông minh.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'MobiFone Solutions HCM – Giải Pháp Chuyển Đổi Số Cho Doanh Nghiệp',
    description: 'Tư vấn giải pháp số MobiFone cho doanh nghiệp tại TP.HCM: eOffice, MobiFone CA, eContract, Invoice, IMS, 1POS, HRM, tổng đài 3C và Truyền thanh thông minh.',
    url: SITE_URL,
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
    description: 'Tư vấn giải pháp số MobiFone cho doanh nghiệp tại TP.HCM: eOffice, MobiFone CA, eContract, Invoice, IMS, 1POS, HRM, tổng đài 3C và Truyền thanh thông minh.',
    images: ['/opengraph-image'],
  },
}

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'MobiFone Solutions HCM',
      url: SITE_URL,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84902931119',
        contactType: 'sales',
        areaServed: 'VN',
        availableLanguage: ['vi'],
      },
    },
    {
      '@type': 'WebSite',
      name: 'MobiFone Solutions HCM',
      url: SITE_URL,
      inLanguage: 'vi-VN',
    },
  ],
}

const priorityLinks = [
  { href: '/giai-phap/mobifone-eoffice', label: 'MobiFone eOffice' },
  { href: '/giai-phap/mobifone-econtract', label: 'MobiFone eContract' },
  { href: '/giai-phap/mobifone-ca', label: 'MobiFone CA' },
  { href: '/giai-phap/mobifone-invoice', label: 'MobiFone Invoice' },
  { href: '/giai-phap/cloud-contact-center-3c', label: 'Cloud Contact Center 3C' },
  { href: '/giai-phap/truyen-thanh-thong-minh', label: 'Truyền thanh thông minh' },
]

export default function Page() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageJsonLd),
        }}
      />
      <HeroSection />
      <TrustStrip />
      <BenefitsSection />
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Giải pháp nổi bật</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Liên kết nhanh tới các giải pháp được doanh nghiệp tìm kiếm nhiều</h2>
            <p className="mt-3 text-slate-600">
              Chọn nhanh nhóm giải pháp chuyển đổi số MobiFone phù hợp với nhu cầu vận hành, pháp lý điện tử, hóa đơn, tổng đài và truyền thông cơ sở.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/giai-phap"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Xem tất cả giải pháp
            </Link>
            {priorityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-500 hover:bg-blue-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCtaSection />
    </PageShell>
  )
}
