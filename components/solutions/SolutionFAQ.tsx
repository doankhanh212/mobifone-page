import { Solution } from '@/lib/products'

export function SolutionFAQ({ solution }: { solution: Solution }) {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">FAQ</span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Câu hỏi thường gặp</h2>
        </div>
        <div className="space-y-4">
          {solution.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-bold text-slate-900">
                {faq.question}
                <span className="float-right text-blue-600 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
