import { Sparkles } from 'lucide-react'
import { Solution } from '@/lib/products'

export function SolutionFeatures({ solution }: { solution: Solution }) {
  return (
    <section id="features" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Tính năng</span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Các năng lực nổi bật</h2>
          <p className="mt-4 text-slate-600">
            Bộ tính năng được trình bày theo hướng thực dụng để đội ngũ dễ hình dung cách áp dụng vào vận hành.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {solution.features.map((feature) => (
            <div key={feature.title} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
