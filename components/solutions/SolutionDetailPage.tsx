import { AlertCircle, Building2 } from 'lucide-react'
import { Solution } from '@/lib/products'
import { RelatedSolutions } from './RelatedSolutions'
import { SolutionBenefits } from './SolutionBenefits'
import { SolutionCTA } from './SolutionCTA'
import { SolutionFAQ } from './SolutionFAQ'
import { SolutionFeatures } from './SolutionFeatures'
import { SolutionHero } from './SolutionHero'
import { SolutionWorkflow } from './SolutionWorkflow'

export function SolutionDetailPage({ solution }: { solution: Solution }) {
  return (
    <>
      <SolutionHero solution={solution} />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Tổng quan</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">{solution.shortName} là gì?</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            {solution.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Thách thức</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Doanh nghiệp thường gặp vấn đề gì?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {solution.painPoints.map((painPoint) => (
              <div key={painPoint} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <p className="text-sm leading-relaxed text-slate-700">{painPoint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionBenefits solution={solution} />
      <SolutionFeatures solution={solution} />
      <SolutionWorkflow solution={solution} />

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Phù hợp</span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Nhóm khách hàng nên sử dụng</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solution.suitableFor.map((item) => (
              <div key={item} className="rounded-xl border border-cyan-300/20 bg-white/5 p-5">
                <Building2 className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionFAQ solution={solution} />
      <RelatedSolutions solution={solution} />
      <SolutionCTA />
    </>
  )
}
