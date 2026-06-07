import { CheckCircle2 } from 'lucide-react'
import { Solution } from '@/lib/products'

export function SolutionBenefits({ solution }: { solution: Solution }) {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Lợi ích</span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Giá trị doanh nghiệp nhận được</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solution.benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
              <CheckCircle2 className="h-7 w-7 text-cyan-600" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
