import { Mail, MessageCircle, Phone } from 'lucide-react'
import { EMAIL_HREF, PHONE_HREF, ZALO_URL } from '@/lib/products'

export function SolutionCTA() {
  return (
    <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-cyan-400/25 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.24),transparent_34%),linear-gradient(135deg,#06152b,#020617)] p-8 text-center shadow-2xl shadow-cyan-950/30 md:p-12">
        <span className="mb-4 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm font-semibold text-cyan-200">
          Tư vấn giải pháp
        </span>
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Bạn cần tư vấn giải pháp phù hợp?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
          Trao đổi trực tiếp qua Zalo để được gợi ý giải pháp phù hợp với mô hình vận hành, ngân sách và mục tiêu tăng trưởng.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 font-bold text-slate-950 shadow-lg shadow-cyan-400/25 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            <MessageCircle className="h-5 w-5" />
            Nhắn Zalo tư vấn ngay
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            <Phone className="h-5 w-5" />
            0902 931 119
          </a>
          <a
            href={EMAIL_HREF}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            <Mail className="h-5 w-5" />
            Email tư vấn
          </a>
        </div>
      </div>
    </section>
  )
}
