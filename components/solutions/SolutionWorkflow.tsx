import { Solution } from '@/lib/products'

export function SolutionWorkflow({ solution }: { solution: Solution }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Quy trình</span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Triển khai theo từng bước rõ ràng</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {solution.workflow.map((step) => (
            <div key={step.step} className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
              <span className="text-4xl font-black text-blue-600/25">{step.step}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
