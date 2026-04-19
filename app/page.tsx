export const dynamic = 'force-dynamic'

import Hero from '@/components/Hero'
import QuickAccess from '@/components/QuickAccess'
import StatsStrip from '@/components/StatsStrip'
import DoctorsSection from '@/components/DoctorsSection'
import LocationCards from '@/components/LocationCards'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickAccess />
      <StatsStrip />
      <DoctorsSection />
      <LocationCards />
      <WhatsAppButton />
    </main>
  )
}
