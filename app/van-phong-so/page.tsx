import { PageShell } from '@/components/PageShell'
import { WorkflowSection } from '@/components/sections/WorkflowSection'
import { SmartOfficeSection } from '@/components/sections/SmartOfficeSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'

export default function SmartOfficePage() {
  return (
    <PageShell>
      <WorkflowSection />
      <SmartOfficeSection />
      <FinalCtaSection />
    </PageShell>
  )
}
