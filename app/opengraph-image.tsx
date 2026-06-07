import { ImageResponse } from 'next/og'

export const alt = 'MobiFone Solutions HCM - 12 giải pháp chuyển đổi số doanh nghiệp'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #03142b 0%, #005baa 52%, #00a3ff 100%)',
          color: 'white',
          padding: 72,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 38, fontWeight: 800 }}>MobiFone Solutions HCM</div>
          <div
            style={{
              border: '2px solid rgba(255,255,255,0.36)',
              borderRadius: 999,
              padding: '14px 24px',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            12 giải pháp số
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ maxWidth: 900, fontSize: 72, lineHeight: 1.05, fontWeight: 900 }}>
            Giải pháp chuyển đổi số cho doanh nghiệp
          </div>
          <div style={{ marginTop: 28, maxWidth: 920, fontSize: 30, lineHeight: 1.35, color: '#dff7ff' }}>
            eOffice • MobiFone CA • eContract • Invoice • IMS • 1POS • HRM • 3C • Truyền thanh thông minh
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, color: '#c9f5ff', fontSize: 24, fontWeight: 700 }}>
          <span>mobifonehcm.com.vn</span>
          <span>•</span>
          <span>Tư vấn Zalo: 0902 931 119</span>
        </div>
      </div>
    ),
    size,
  )
}
