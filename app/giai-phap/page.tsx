import type { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { SolutionsGrid } from '@/components/sections/SolutionsGrid'
import { SMERetailSection } from '@/components/sections/SMERetailSection'
import { DigitalLegalSection } from '@/components/sections/DigitalLegalSection'
import { CommunicationSection } from '@/components/sections/CommunicationSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'
import { SITE_URL, SOLUTIONS } from '@/lib/products'

export const metadata: Metadata = {
  title: {
    absolute: '12 Giải Pháp Số MobiFone Cho Doanh Nghiệp | MobiFone Solutions HCM',
  },
  description: 'Danh sách 12 giải pháp số MobiFone cho doanh nghiệp: eOffice, CA, eContract, Invoice, IMS, 1POS, eWork, HRM, 3C, Loa Thần Tài và Truyền thanh thông minh.',
  keywords: [
    'giải pháp số MobiFone',
    'chuyển đổi số doanh nghiệp',
    'MobiFone eOffice',
    'MobiFone CA',
    'MobiFone eContract',
    'MobiFone Invoice',
    'MobiFone IMS',
    'MobiFone 1POS',
    'MobiFone HRM',
    'Cloud Contact Center 3C',
    'Truyền thanh thông minh',
  ],
  alternates: {
    canonical: `${SITE_URL}/giai-phap`,
  },
  openGraph: {
    title: '12 Giải Pháp Số MobiFone Cho Doanh Nghiệp',
    description: 'Khám phá danh sách 12 giải pháp số MobiFone cho vận hành, pháp lý điện tử, hóa đơn, bán hàng, nhân sự, tổng đài và truyền thanh thông minh.',
    url: `${SITE_URL}/giai-phap`,
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'MobiFone Solutions HCM - danh sách 12 giải pháp số',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '12 Giải Pháp Số MobiFone Cho Doanh Nghiệp',
    description: 'Khám phá danh sách 12 giải pháp số MobiFone cho vận hành, pháp lý điện tử, hóa đơn, bán hàng, nhân sự, tổng đài và truyền thanh thông minh.',
    images: ['/opengraph-image'],
  },
}

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '12 giải pháp số MobiFone cho doanh nghiệp',
  description: 'Danh sách giải pháp số MobiFone tư vấn cho doanh nghiệp tại TP.HCM.',
  url: `${SITE_URL}/giai-phap`,
  inLanguage: 'vi-VN',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: SOLUTIONS.length,
    itemListElement: SOLUTIONS.map((solution, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: solution.name,
        description: solution.seoDescription,
        serviceType: solution.category,
        url: `${SITE_URL}/giai-phap/${solution.slug}`,
        provider: {
          '@type': 'Organization',
          name: 'MobiFone Solutions HCM',
          url: SITE_URL,
        },
      },
    })),
  },
}

export default function SolutionsPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />
      <SolutionsGrid />
      <SMERetailSection />
      <DigitalLegalSection />
      <CommunicationSection />
      <FinalCtaSection />
    </PageShell>
  )
}
