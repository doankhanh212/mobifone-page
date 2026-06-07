import Link from 'next/link'
import { PageShell } from '@/components/PageShell'

export default function SolutionNotFound() {
  return (
    <PageShell>
      <section className="bg-slate-950 px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Không tìm thấy</p>
          <h1 className="mt-4 text-4xl font-black">Giải pháp này chưa có trên hệ thống</h1>
          <p className="mt-4 text-slate-300">
            Bạn có thể quay lại danh sách giải pháp để xem đầy đủ 12 sản phẩm chuyển đổi số MobiFone.
          </p>
          <Link
            href="/giai-phap"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Quay lại trang giải pháp
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
