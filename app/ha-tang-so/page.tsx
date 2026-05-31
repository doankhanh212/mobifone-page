import { PageShell } from '@/components/PageShell'
import { InfrastructureSection } from '@/components/sections/InfrastructureSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'

export default function InfrastructurePage() {
  return (
    <PageShell>
      <InfrastructureSection />
      <BenefitsSection />
      <FinalCtaSection />
    </PageShell>
  )
}
