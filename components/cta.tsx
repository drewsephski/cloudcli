import { Button } from "./ui/button"
import { ArrowRight, Terminal, ShieldCheck, Zap, Clock } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-24 text-center">
      <div className="mx-auto flex max-w-[700px] flex-col items-center gap-6 rounded-3xl border border-border/50 bg-card/30 p-8 sm:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner relative z-10">
          <Terminal className="h-8 w-8" />
        </div>
        
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl relative z-10">
          Ready to accelerate your engineering velocity?
        </h2>
        
        <p className="text-lg text-muted-foreground relative z-10">
          Deploy secure, standardized cloud environments for your entire team in minutes, not days.
        </p>
        
        <div className="mt-4 flex flex-col sm:flex-row gap-4 relative z-10">
          <Link href="/auth">
            <Button size="lg" className="gap-2 rounded-full px-8 w-full sm:w-auto">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 w-full sm:w-auto bg-background/50 backdrop-blur-sm">
            Talk to Sales
          </Button>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:gap-8 relative z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> Enterprise Security
          </div>
          <span className="hidden sm:inline-block text-border">•</span>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" /> Instant Provisioning
          </div>
          <span className="hidden sm:inline-block text-border">•</span>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" /> 99.99% Uptime SLA
          </div>
        </div>
      </div>
    </section>
  )
}
