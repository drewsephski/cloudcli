import { Navbar }         from "@/components/navbar"
import { Hero }           from "@/components/hero"
import { OpenClawBanner } from "@/components/openclaw-banner"
import { Integrations }   from "@/components/integrations"
import { HowItWorks }     from "@/components/how-it-works"
import { Features }       from "@/components/features"
import { Pricing }        from "@/components/pricing"
import { CTA }            from "@/components/cta"
import { Footer }         from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#02040a", color: "#f8fafc" }}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OpenClawBanner />
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