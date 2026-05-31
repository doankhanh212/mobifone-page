import { PageShell } from '@/components/PageShell'
import { EcosystemSection } from '@/components/sections/EcosystemSection'
import { UseCasesSection } from '@/components/sections/UseCasesSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'

export default function EcosystemPage() {
  return (
    <PageShell>
      <EcosystemSection />
      <UseCasesSection />
      <BenefitsSection />
      <FinalCtaSection />
    </PageShell>
  )
}
