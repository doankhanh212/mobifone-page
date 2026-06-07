import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { SolutionDetailPage } from '@/components/solutions/SolutionDetailPage'
import { getSolutionBySlug, getSolutionImage, SITE_URL, SOLUTIONS } from '@/lib/products'

type SolutionPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({
    slug: solution.slug,
  }))
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    return {}
  }

  const url = `${SITE_URL}/giai-phap/${solution.slug}`
  const image = `${SITE_URL}${getSolutionImage(solution)}`

  return {
    title: {
      absolute: solution.seoTitle,
    },
    description: solution.seoDescription,
    keywords: solution.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: solution.seoTitle,
      description: solution.seoDescription,
      url,
      type: 'website',
      locale: 'vi_VN',
      images: [
        {
          url: image,
          alt: solution.slug === 'truyen-thanh-thong-minh' ? 'Minh họa giải pháp Truyền thanh thông minh MobiFone' : solution.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: solution.seoTitle,
      description: solution.seoDescription,
      images: [image],
    },
  }
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    notFound()
  }

  const url = `${SITE_URL}/giai-phap/${solution.slug}`
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: solution.name,
    serviceType: solution.category,
    description: solution.seoDescription,
    url,
    provider: {
      '@type': 'Organization',
      name: 'MobiFone Solutions HCM',
      url: SITE_URL,
    },
    areaServed: 'VN',
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Giải pháp',
        item: `${SITE_URL}/giai-phap`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: solution.name,
        item: url,
      },
    ],
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: solution.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [serviceJsonLd, breadcrumbJsonLd, faqJsonLd],
  }

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <SolutionDetailPage solution={solution} />
    </PageShell>
  )
}
