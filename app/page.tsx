import { PageShell } from '@/components/PageShell'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'

export default function Page() {
  return (
    <PageShell>
      <HeroSection />
      <TrustStrip />
      <BenefitsSection />
      <FinalCtaSection />
    </PageShell>
  )
}
