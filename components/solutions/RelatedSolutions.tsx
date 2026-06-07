import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getRelatedSolutions, getSolutionIcon, Solution } from '@/lib/products'

export function RelatedSolutions({ solution }: { solution: Solution }) {
  const related = getRelatedSolutions(solution, 3)

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Liên quan</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Giải pháp có thể kết hợp</h2>
          </div>
          <Link href="/giai-phap" className="font-bold text-blue-700 hover:text-blue-600">
            Xem tất cả giải pháp
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => {
            const Icon = getSolutionIcon(item.iconName)
            return (
              <Link
                key={item.slug}
                href={`/giai-phap/${item.slug}`}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-blue-600" />
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">{item.category}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{item.shortDescription}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                  Xem chi tiết
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
