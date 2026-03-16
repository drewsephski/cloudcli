import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { OpenClawBanner } from "@/components/openclaw-banner"
import { OpenClawPage } from "@/components/openclaw-page"
import { Integrations } from "@/components/integrations"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OpenClawBanner />
        <OpenClawPage />
        <Integrations />
        <HowItWorks />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
