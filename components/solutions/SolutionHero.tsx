import Link from 'next/link'
import { createElement } from 'react'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { getSolutionIcon, Solution, ZALO_URL } from '@/lib/products'

function HeroMockup({ solution }: { solution: Solution }) {
  const metrics = [
    { label: 'Tính năng', value: solution.features.length },
    { label: 'Lợi ích', value: solution.benefits.length },
    { label: 'Quy trình', value: solution.workflow.length },
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-slate-900/75 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="relative flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
          {createElement(getSolutionIcon(solution.iconName), { className: 'h-8 w-8' })}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{solution.shortName}</p>
          <p className="mt-1 text-sm text-slate-400">Dashboard mô phỏng</p>
        </div>
      </div>

      <div className="relative mt-8 grid grid-cols-3 gap-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-black text-white">{metric.value}</p>
            <p className="mt-1 text-xs text-slate-400">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-6 space-y-3">
        {solution.highlights.map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 p-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-sm font-bold text-cyan-200">
              {index + 1}
            </span>
            <span className="text-sm text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SolutionHero({ solution }: { solution: Solution }) {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cyan-200">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/giai-phap" className="hover:text-cyan-200">
              Giải pháp
            </Link>
            <span>/</span>
            <span className="text-cyan-200">{solution.name}</span>
          </nav>

          <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-200">
            {solution.category}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
            {solution.heroTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            {solution.heroSubtitle}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {solution.highlights.slice(0, 3).map((highlight) => (
              <div key={highlight} className="rounded-xl border border-cyan-300/20 bg-white/5 p-4 text-sm font-semibold text-slate-100">
                {highlight}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <MessageCircle className="h-5 w-5" />
              Tư vấn qua Zalo
            </a>
            <a
              href="#features"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-300/30 px-6 font-bold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              <ArrowDown className="h-5 w-5" />
              Xem tính năng
            </a>
          </div>
        </div>

        <HeroMockup solution={solution} />
      </div>
    </section>
  )
}
