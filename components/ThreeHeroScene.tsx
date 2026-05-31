'use client'

import { motion } from 'framer-motion'

const nodes = [
  { label: '1ERP', x: 68, y: 17 },
  { label: 'CA', x: 72, y: 23 },
  { label: 'eOffice', x: 57, y: 27 },
  { label: 'Invoice', x: 84, y: 30 },
  { label: 'IMS', x: 48, y: 36 },
  { label: '1POS', x: 48, y: 54 },
  { label: 'eContract', x: 92, y: 49 },
  { label: 'SIP', x: 91, y: 63 },
  { label: 'eWork', x: 58, y: 71 },
  { label: 'HRM', x: 73, y: 77 },
  { label: 'Loa TT', x: 78, y: 84 },
  { label: '3C', x: 87, y: 70 },
]

const sparks = [
  { x: 50.5, y: 41 },
  { x: 49.7, y: 45 },
  { x: 50.9, y: 62 },
  { x: 52, y: 71 },
  { x: 78, y: 50 },
  { x: 83, y: 32 },
]

const bars = [28, 44, 34, 54, 66, 43, 32, 48, 38]

export function ThreeHeroScene() {
  return (
    <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden bg-[#031120]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.42)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_7%,rgba(34,211,238,0.13),transparent_35%),linear-gradient(90deg,rgba(3,17,32,0.04),rgba(3,17,32,0.12)_52%,rgba(3,17,32,0.28))]" />
      <motion.div
        className="absolute right-[9%] top-[-9%] h-[78%] w-[44%] rounded-full bg-cyan-300/6"
        animate={{ scale: [1, 1.04, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute left-[5.6%] top-[13.5%] z-20 h-[58.5%] w-[34.8%] rounded-[24px] border border-cyan-300/80 bg-slate-950/88 p-[2.55%] shadow-2xl shadow-cyan-950/35 backdrop-blur"
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <span className="inline-flex rounded-xl bg-cyan-400 px-[6%] py-[3%] text-[clamp(10px,1.15vw,14px)] font-medium uppercase tracking-wide text-cyan-950">
          Hệ sinh thái chuyển đổi số
        </span>
        <h2 className="mt-[11%] text-[clamp(29px,4.1vw,56px)] font-extrabold leading-[1.03] text-white">
          MobiFone
          <span className="block text-cyan-300">Digital Solutions</span>
        </h2>
        <p className="mt-[8%] text-[clamp(12px,1.45vw,18px)] leading-relaxed text-slate-300">
          Văn phòng số • Ký số • Hóa đơn
          <br />
          Tổng đài 3C • Bán hàng • Hạ tầng
        </p>
        <div className="mt-[10%] flex flex-wrap gap-3">
          <a
            href="/giai-phap"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-[7%] py-[4%] text-[clamp(12px,1.25vw,16px)] font-bold text-slate-950 shadow-lg shadow-cyan-400/25 transition hover:bg-cyan-300"
          >
            Khám phá 12 giải pháp
          </a>
          <a
            href="https://zalo.me/84902931119"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-[7%] py-[4%] text-[clamp(12px,1.25vw,16px)] font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
          >
            Tư vấn Zalo
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[47.5%] top-[23.2%] z-10 h-[53.5%] w-[45.8%] rounded-[20px] border border-cyan-300/80 bg-slate-950/42 backdrop-blur-[1px]"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
      >
        <div className="absolute -left-[5.8%] top-[10.8%] h-[82%] w-[9.8%] rounded-[14px] border border-cyan-300/80 bg-slate-950/55" />
        <div className="absolute left-[18%] top-[5.5%] h-[9%] w-[55%] rounded-t-[18px] border-x border-t border-cyan-300/80" />

        <div className="absolute left-[18%] top-[23%] h-[42.5%] w-[77%] rounded-[12px] border border-cyan-300/80 bg-slate-900/45" />

        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroLine" x1="0" x2="1">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.82" />
            </linearGradient>
          </defs>
          {nodes.map((node) => (
            <motion.line
              key={node.label}
              x1="50"
              y1="50"
              x2={node.x - 47.5}
              y2={node.y}
              stroke="url(#heroLine)"
              strokeWidth="0.18"
              initial={{ pathLength: 0.2, opacity: 0.2 }}
              animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.18, 0.88, 0.18] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: node.x / 62 }}
            />
          ))}
          <motion.circle
            cx="50"
            cy="50"
            r="2"
            fill="#22d3ee"
            animate={{ r: [1.7, 2.8, 1.7], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>

        <div className="absolute left-[18%] top-[23%] h-[42.5%] w-[77%] rounded-[12px] px-[5.4%] py-[5%] text-center">
          <p className="text-[clamp(10px,1vw,15px)] text-slate-300">Tổng quan vận hành số</p>
          <p className="mt-1 text-[clamp(9px,0.85vw,12px)] text-slate-500">Luồng dữ liệu ghi nhận theo thời gian thực</p>
          <div className="mt-[8%] flex items-end justify-center gap-[2.2%]">
            {bars.map((height, index) => (
              <motion.span
                key={index}
                className="w-[4%] rounded-full bg-cyan-300"
                style={{ height }}
                animate={{ scaleY: [0.75, 1.12, 0.75], opacity: [0.56, 1, 0.56] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.1, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-[8%] left-[17.5%] grid w-[64%] grid-cols-3 gap-[4%]">
          {[
            ['12', 'giải pháp số'],
            ['99.9%', 'uptime'],
            ['Zalo', 'tư vấn nhanh'],
          ].map(([value, label]) => (
            <div key={value} className="rounded-xl border border-cyan-300/35 bg-slate-950/62 p-[10%] text-left">
              <div className="text-[clamp(16px,2vw,28px)] font-bold text-white">{value}</div>
              <div className="text-[clamp(9px,0.9vw,12px)] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border border-cyan-300/80 bg-slate-950 px-3 py-1.5 text-[clamp(10px,1vw,14px)] font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.28)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ y: [0, -4, 0], boxShadow: ['0 0 12px rgba(34,211,238,0.18)', '0 0 24px rgba(34,211,238,0.4)', '0 0 12px rgba(34,211,238,0.18)'] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.13, ease: 'easeInOut' }}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          {node.label}
        </motion.div>
      ))}

      {sparks.map((spark, index) => (
        <motion.span
          key={index}
          className="absolute z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70"
          style={{ left: `${spark.x}%`, top: `${spark.y}%` }}
          animate={{ scale: [0.75, 1.3, 0.75], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.22, ease: 'easeInOut' }}
        />
      ))}

      <p className="absolute bottom-[5%] right-[6.5%] z-20 text-[clamp(10px,0.95vw,13px)] text-cyan-100/70">
        12 giải pháp số kết nối trong một hệ sinh thái vận hành
      </p>
    </div>
  )
}
