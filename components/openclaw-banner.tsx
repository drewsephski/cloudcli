"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Terminal, Star, CheckCircle2, Lock, Globe } from "lucide-react"
import Link from "next/link"

function ProgressBar() {
  return (
    <div className="h-[3px] w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg,#3b82f6,#6366f1)" }}
        initial={{ width: 0 }}
        whileInView={{ width: "71.3%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </div>
  )
}

export function OpenClawBanner() {
  return (
    <motion.section
      className="py-8"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.48 }}
    >
      <div className="container mx-auto max-w-screen-xl px-5">
        <div className="relative overflow-hidden rounded-xl border" style={{ background: "#090e1a", borderColor: "rgba(255,255,255,0.07)" }}>

          {/* top shimmer */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" />
          {/* inner glow */}
          <div className="pointer-events-none absolute left-0 top-0 h-52 w-72 rounded-full"
            style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)" }} />

          <div className="relative z-10 grid grid-cols-1 items-center gap-7 px-7 py-7 lg:grid-cols-[1fr_auto] lg:gap-10">

            {/* Left */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 rounded-md border border-blue-500/20 bg-blue-500/8 px-2.5 py-1 text-[11px] text-blue-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
                  </span>
                  Limited founding batch
                </div>
                <span className="hidden text-xs sm:block" style={{ color: "#334155" }}>Price locks the moment you subscribe</span>
              </div>

              <div>
                <h2 className="font-syne mb-1.5 text-xl font-bold tracking-[-0.025em] sm:text-2xl" style={{ color: "#f8fafc" }}>
                  Run OpenClaw on your own instance.{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">$3.99/mo.</span>
                </h2>
                <p className="max-w-lg text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  Full terminal access, every AI provider pre-connected, live in under 60 seconds — no setup, no DevOps, no surprises.
                </p>
              </div>

              <div className="max-w-[260px] space-y-1.5">
                <ProgressBar />
                <div className="flex items-center justify-between text-[11px]" style={{ color: "#475569" }}>
                  <span><span style={{ color: "#94a3b8" }} className="font-medium">287 spots</span> left at $3.99/mo</span>
                  <span>Then $9.99/mo</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {["Cancel anytime", "Money-back guarantee", "Instant setup"].map((label) => (
                  <div key={label} className="flex items-center gap-1.5 text-[11px]" style={{ color: "#475569" }}>
                    <CheckCircle2 className="h-3 w-3 text-blue-400 shrink-0" />{label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex shrink-0 flex-col gap-3 lg:items-end">
              <div className="flex gap-2.5 lg:flex-col">
                {[
                  { icon: <Terminal className="h-3.5 w-3.5 text-blue-400" />, value: "~58 sec", sub: "Avg. setup time" },
                  { icon: <Star     className="h-3.5 w-3.5 text-indigo-400" />, value: "4.9 / 5", sub: "Member rating" },
                ].map((s) => (
                  <div key={s.sub}
                    className="flex flex-1 items-center gap-3 rounded-lg border px-4 py-3 lg:flex-none lg:min-w-[152px]"
                    style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)" }}>
                    <div className="rounded-md border p-1.5" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-[11px]" style={{ color: "#475569" }}>{s.sub}</p>
                      <p className="font-syne text-sm font-bold tracking-tight" style={{ color: "#f8fafc" }}>{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/openclaw" className="w-full lg:w-auto">
                <Button size="default"
                  className="w-full gap-2 rounded-md border-0 px-7 text-sm font-medium text-white transition-opacity hover:opacity-90 lg:w-auto"
                  style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
                  Claim $3.99/mo spot <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <p className="flex items-center gap-1.5 text-[11px] lg:justify-end" style={{ color: "#334155" }}>
                <Clock className="h-3 w-3" />After this batch: $9.99/mo
              </p>
            </div>
          </div>

          {/* bottom accent */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>
    </motion.section>
  )
}