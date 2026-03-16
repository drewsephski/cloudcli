import { Button } from "./ui/button"
import { ArrowRight, Terminal, ShieldCheck, Zap, Clock } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section
      className="container mx-auto max-w-screen-xl px-5 py-20 text-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="relative mx-auto flex max-w-[640px] flex-col items-center gap-6 overflow-hidden rounded-xl border px-8 py-14 sm:px-16"
        style={{ background: "#090e1a", borderColor: "rgba(255,255,255,0.07)" }}>

        {/* top shimmer */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        {/* inner glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.09) 0%, transparent 70%)" }} />

        <div className="relative rounded-xl border border-blue-500/15 bg-blue-500/8 p-3.5">
          <Terminal className="h-6 w-6 text-blue-400" />
        </div>

        <div className="relative">
          <h2 className="font-syne mb-3 text-[1.625rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2rem]"
            style={{ color: "#f8fafc" }}>
            Ready to accelerate your engineering velocity?
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
            Deploy secure, standardised cloud environments for your entire team in minutes, not days.
          </p>
        </div>

        <div className="relative flex flex-col gap-3 sm:flex-row">
          <Link href="/auth">
            <Button size="lg"
              className="gap-2 rounded-md border-0 px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="ghost"
            className="gap-2 rounded-md border border-white/[0.08] px-7 text-sm transition-colors hover:border-white/[0.14] hover:bg-white/[0.03]"
            style={{ color: "#94a3b8" }}>
            Talk to Sales
          </Button>
        </div>

        <div className="relative flex flex-wrap items-center justify-center gap-5 text-xs" style={{ color: "#475569" }}>
          {[
            { icon: <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />, label: "Enterprise Security" },
            { icon: <Zap         className="h-3.5 w-3.5 text-blue-400" />, label: "Instant Provisioning" },
            { icon: <Clock       className="h-3.5 w-3.5 text-blue-400" />, label: "99.99% Uptime SLA" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">{icon}{label}</div>
          ))}
        </div>
      </div>
    </section>
  )
}