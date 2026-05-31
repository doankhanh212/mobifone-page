'use client'

import { motion } from 'framer-motion'

const solutionNodes = [
  { label: '1ERP', x: 58, y: 13 },
  { label: 'CA', x: 67, y: 20 },
  { label: 'eOffice', x: 48, y: 27 },
  { label: 'Invoice', x: 81, y: 30 },
  { label: 'IMS', x: 38, y: 39 },
  { label: 'eContract', x: 90, y: 54 },
  { label: '1POS', x: 39, y: 61 },
  { label: 'SIP', x: 88, y: 70 },
  { label: 'eWork', x: 51, y: 82 },
  { label: 'HRM', x: 69, y: 89 },
  { label: 'Loa TT', x: 77, y: 80 },
  { label: '3C', x: 83, y: 77 },
]

const particles = [
  { left: '9%', top: '14%', delay: 0 },
  { left: '18%', top: '78%', delay: 0.7 },
  { left: '38%', top: '18%', delay: 1.1 },
  { left: '55%', top: '72%', delay: 0.4 },
  { left: '76%', top: '16%', delay: 1.5 },
  { left: '88%', top: '64%', delay: 0.9 },
]

export function ThreeHeroScene() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-950 shadow-2xl shadow-cyan-950/30 sm:min-h-[500px] lg:min-h-[560px]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.22)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <motion.div
        className="absolute -right-20 -top-24 h-96 w-96 rounded-full border border-cyan-300/10 bg-cyan-400/5"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-28 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.96, 1.08, 0.96] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -18, 0], opacity: [0.25, 1, 0.25], scale: [1, 1.5, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute left-6 top-8 z-20 w-[58%] max-w-[320px] rounded-2xl border border-cyan-300/40 bg-slate-950/88 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur sm:left-8 sm:top-14 sm:p-7"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="inline-flex rounded-lg bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase text-cyan-200">
          Hệ sinh thái chuyển đổi số
        </span>
        <h3 className="mt-6 text-3xl font-extrabold leading-tight text-white">
          MobiFone
          <span className="block text-cyan-300">Digital Solutions</span>
        </h3>
        <p className="mt-5 text-sm leading-relaxed text-slate-300">
          Văn phòng số • Ký số • Hóa đơn • Tổng đài 3C • Bán hàng • Hạ tầng
        </p>
        <a
          href="https://zalo.me/84902931119"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
        >
          Tư vấn qua Zalo
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-5 top-24 z-10 w-[64%] rounded-2xl border border-cyan-300/60 bg-slate-950/70 p-4 backdrop-blur sm:right-8 sm:top-20 sm:p-5"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
      >
        <div className="relative h-full min-h-[300px] overflow-visible rounded-xl border border-cyan-300/50 bg-slate-900/70">
          <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroLine" x1="0" x2="1">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            {solutionNodes.map((node) => (
              <motion.line
                key={node.label}
                x1="55"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke="url(#heroLine)"
                strokeWidth="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.25, 0.9, 0.25] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: node.x / 45 }}
              />
            ))}
            <motion.circle
              cx="55"
              cy="50"
              r="2.4"
              fill="#22d3ee"
              animate={{ r: [2.2, 3.4, 2.2], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>

          <div className="absolute left-[18%] top-[35%] h-[44%] w-[64%] rounded-2xl border border-cyan-300/45 bg-slate-950/70 p-5 text-center shadow-xl shadow-cyan-950/30">
            <p className="text-sm text-slate-300">Tổng quan vận hành số</p>
            <div className="mt-6 flex items-end justify-center gap-2">
              {[36, 58, 44, 72, 86, 50, 34, 62, 48].map((height, index) => (
                <motion.span
                  key={index}
                  className="w-3 rounded-full bg-cyan-300"
                  style={{ height }}
                  animate={{ scaleY: [0.72, 1.08, 0.72], opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.11, ease: 'easeInOut' }}
                />
              ))}
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3 text-left">
              {[
                ['12', 'giải pháp số'],
                ['99.9%', 'uptime'],
                ['Zalo', 'tư vấn nhanh'],
              ].map(([value, label]) => (
                <div key={value} className="rounded-xl border border-cyan-300/25 bg-cyan-300/5 p-3">
                  <div className="text-lg font-bold text-white">{value}</div>
                  <div className="text-[11px] text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {solutionNodes.map((node, index) => (
            <motion.div
              key={node.label}
              className="absolute z-20 flex items-center gap-2 rounded-lg border border-cyan-300/60 bg-slate-950 px-3 py-1.5 text-xs font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.25)]"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
              animate={{ y: [0, -5, 0], boxShadow: ['0 0 12px rgba(34,211,238,0.18)', '0 0 24px rgba(34,211,238,0.38)', '0 0 12px rgba(34,211,238,0.18)'] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.16, ease: 'easeInOut' }}
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              {node.label}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <p className="absolute bottom-5 right-8 z-20 text-xs text-cyan-100/70">
        12 giải pháp số kết nối trong một hệ sinh thái vận hành
      </p>
    </div>
  )
}
