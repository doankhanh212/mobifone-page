'use client'

import { motion } from 'framer-motion'

const nodes = [
  { label: '1ERP', x: 66, y: 17 },
  { label: 'CA', x: 71, y: 23 },
  { label: 'eOffice', x: 55, y: 32 },
  { label: 'Invoice', x: 84, y: 32 },
  { label: 'IMS', x: 46, y: 41 },
  { label: '1POS', x: 46, y: 60 },
  { label: 'eContract', x: 92, y: 55 },
  { label: 'SIP', x: 92, y: 68 },
  { label: 'eWork', x: 58, y: 76 },
  { label: 'HRM', x: 72, y: 83 },
  { label: 'Loa TT', x: 78, y: 91 },
  { label: '3C', x: 88, y: 76 },
]

const bars = [34, 54, 42, 66, 76, 50, 37, 58, 45]

export function ThreeHeroScene() {
  return (
    <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl border border-cyan-400/25 bg-[#031121] shadow-2xl shadow-cyan-950/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.34)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,0.14),transparent_34%),linear-gradient(90deg,rgba(3,17,33,0.2),rgba(3,17,33,0.02)_48%,rgba(3,17,33,0.36))]" />

      <motion.div
        className="absolute right-[8%] top-[-12%] h-[68%] w-[46%] rounded-full border border-cyan-300/8 bg-cyan-300/5"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute left-[6%] top-[14%] z-20 w-[35%] rounded-3xl border border-cyan-300/50 bg-slate-950/86 p-[2.6%] shadow-2xl shadow-cyan-950/40 backdrop-blur"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="inline-flex rounded-xl bg-cyan-400 px-5 py-2 text-[clamp(10px,1.05vw,13px)] font-semibold uppercase tracking-wide text-cyan-950">
          Hệ sinh thái chuyển đổi số
        </span>
        <h2 className="mt-[9%] text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.06] text-white">
          MobiFone
          <span className="block text-cyan-300">Digital Solutions</span>
        </h2>
        <p className="mt-[7%] text-[clamp(13px,1.4vw,19px)] leading-relaxed text-slate-300">
          Văn phòng số • Ký số • Hóa đơn
          <br />
          Tổng đài 3C • Bán hàng • Hạ tầng
        </p>
        <div className="mt-[10%] flex flex-wrap gap-3">
          <a
            href="/giai-phap"
            className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-[clamp(13px,1.25vw,17px)] font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
          >
            Khám phá 12 giải pháp
          </a>
          <a
            href="https://zalo.me/84902931119"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 text-[clamp(13px,1.25vw,17px)] font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            Tư vấn Zalo
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[47%] top-[23%] z-10 h-[54%] w-[44%] rounded-3xl border border-cyan-300/75 bg-slate-950/52 p-[1.8%] backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
      >
        <div className="absolute -left-[4%] top-[22%] h-[70%] w-[9%] rounded-2xl border border-cyan-300/75 bg-slate-950/65" />
        <div className="relative h-full rounded-2xl border border-cyan-300/75 bg-slate-900/60">
          <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroLine" x1="0" x2="1">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.82" />
              </linearGradient>
            </defs>
            {nodes.map((node) => (
              <motion.line
                key={node.label}
                x1="48"
                y1="50"
                x2={node.x - 45}
                y2={node.y}
                stroke="url(#heroLine)"
                strokeWidth="0.22"
                initial={{ pathLength: 0.2, opacity: 0.2 }}
                animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.24, 0.9, 0.24] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: node.x / 55 }}
              />
            ))}
          </svg>

          <div className="absolute left-[13%] top-[23%] h-[42%] w-[72%] rounded-2xl border border-cyan-300/60 bg-slate-950/70 px-[5%] py-[4%] text-center shadow-xl shadow-cyan-950/30">
            <p className="text-[clamp(10px,1vw,15px)] text-slate-300">Tổng quan vận hành số</p>
            <p className="mt-1 text-[clamp(9px,0.9vw,12px)] text-slate-500">Luồng dữ liệu ghi nhận theo thời gian thực</p>
            <div className="mt-[7%] flex items-end justify-center gap-[2.2%]">
              {bars.map((height, index) => (
                <motion.span
                  key={index}
                  className="w-[4.4%] rounded-full bg-cyan-300"
                  style={{ height }}
                  animate={{ scaleY: [0.72, 1.08, 0.72], opacity: [0.56, 1, 0.56] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.1, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-[8%] left-[18%] grid w-[64%] grid-cols-3 gap-[4%]">
            {[
              ['12', 'giải pháp số'],
              ['99.9%', 'uptime'],
              ['Zalo', 'tư vấn nhanh'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-xl border border-cyan-300/30 bg-slate-950/62 p-[10%] text-left">
                <div className="text-[clamp(16px,2vw,28px)] font-bold text-white">{value}</div>
                <div className="text-[clamp(9px,0.9vw,12px)] text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border border-cyan-300/70 bg-slate-950 px-3 py-1.5 text-[clamp(10px,1vw,14px)] font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.24)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ y: [0, -5, 0], boxShadow: ['0 0 12px rgba(34,211,238,0.18)', '0 0 24px rgba(34,211,238,0.42)', '0 0 12px rgba(34,211,238,0.18)'] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.13, ease: 'easeInOut' }}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          {node.label}
        </motion.div>
      ))}

      <p className="absolute bottom-[5%] right-[7%] z-20 text-[clamp(10px,0.95vw,13px)] text-cyan-100/70">
        12 giải pháp số kết nối trong một hệ sinh thái vận hành
      </p>
    </div>
  )
}
