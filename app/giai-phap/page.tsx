import { PageShell } from '@/components/PageShell'
import { SolutionsGrid } from '@/components/sections/SolutionsGrid'
import { SMERetailSection } from '@/components/sections/SMERetailSection'
import { DigitalLegalSection } from '@/components/sections/DigitalLegalSection'
import { CommunicationSection } from '@/components/sections/CommunicationSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'

export default function SolutionsPage() {
  return (
    <PageShell>
      <SolutionsGrid />
      <SMERetailSection />
      <DigitalLegalSection />
      <CommunicationSection />
      <FinalCtaSection />
    </PageShell>
  )
}
