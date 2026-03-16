"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Check, Building2 } from "lucide-react"

const PRO = [
  "Up to 10 active environments",
  "4 CPU cores, 8 GB RAM per env",
  "Direct SSH & VPN access",
  "Bring your own AI models",
  "Cross-device persistent sessions",
]

const ENT = [
  "Everything in Professional, plus:",
  "Unlimited active environments",
  "Custom compute (up to 32 cores)",
  "SOC2 & HIPAA Compliance",
  "Single Sign-On (SAML / SSO)",
  "Dedicated success manager",
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section
      className="container mx-auto max-w-screen-xl px-5 py-20 text-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      id="pricing"
    >
      {/* Heading */}
      <div className="mx-auto mb-12 flex max-w-[520px] flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#3b82f6" }}>
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />Pricing
        </div>
        <h2 className="font-syne text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl" style={{ color: "#f8fafc" }}>
          Simple, usage-based pricing
        </h2>
        <p className="text-sm" style={{ color: "#64748b" }}>
          Scale your development environments as your team grows.
        </p>

        {/* Toggle */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-xs" style={{ color: yearly ? "#475569" : "#94a3b8" }}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className="relative h-5 w-9 rounded-full border transition-colors"
            style={{
              background: yearly ? "#2563eb" : "rgba(255,255,255,0.06)",
              borderColor: yearly ? "#2563eb" : "rgba(255,255,255,0.1)",
            }}
          >
            <div className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform"
              style={{ transform: yearly ? "translateX(16px)" : "translateX(1px)" }} />
          </button>
          <span className="text-xs" style={{ color: yearly ? "#94a3b8" : "#475569" }}>Yearly</span>
          {yearly && (
            <span className="rounded-md border border-blue-500/20 bg-blue-500/8 px-2 py-0.5 text-[11px] text-blue-400">
              Save 20%
            </span>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">

        {/* Pro */}
        <div className="flex flex-col overflow-hidden rounded-xl border text-left"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "#090e1a" }}>
          <div className="border-b px-6 py-5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p className="font-syne mb-1 text-sm font-semibold" style={{ color: "#e2e8f0" }}>Professional</p>
            <div className="flex items-baseline gap-1.5">
              <span className="font-syne text-3xl font-extrabold tracking-tight" style={{ color: "#f8fafc" }}>
                ${yearly ? "24" : "29"}
              </span>
              <span className="text-xs" style={{ color: "#475569" }}>/user/mo</span>
            </div>
            <p className="mt-2 text-xs" style={{ color: "#64748b" }}>Perfect for growing engineering teams</p>
          </div>
          <div className="flex flex-1 flex-col gap-6 p-6">
            <ul className="space-y-3">
              {PRO.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs" style={{ color: "#64748b" }}>
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />{item}
                </li>
              ))}
            </ul>
            <Button variant="ghost" size="sm"
              className="mt-auto w-full rounded-md border border-white/[0.09] text-sm transition-colors hover:border-white/[0.16] hover:bg-white/[0.04]"
              style={{ color: "#94a3b8" }}>
              Start 14-day trial
            </Button>
          </div>
        </div>

        {/* Enterprise */}
        <div className="relative flex flex-col overflow-hidden rounded-xl border text-left"
          style={{ borderColor: "rgba(59,130,246,0.3)", background: "#090e1a" }}>
          {/* top shimmer */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />

          <div className="absolute right-5 top-[-1px]">
            <div className="rounded-b-md border border-t-0 border-blue-500/30 bg-blue-600/90 px-3 py-1 text-[11px] font-semibold text-white">
              Recommended
            </div>
          </div>

          <div className="relative border-b px-6 py-5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p className="font-syne mb-1 text-sm font-semibold" style={{ color: "#e2e8f0" }}>Enterprise</p>
            <div className="flex items-baseline gap-1.5">
              <span className="font-syne text-3xl font-extrabold tracking-tight" style={{ color: "#f8fafc" }}>
                ${yearly ? "79" : "99"}
              </span>
              <span className="text-xs" style={{ color: "#475569" }}>/user/mo</span>
            </div>
            <p className="mt-2 text-xs" style={{ color: "#64748b" }}>For organizations requiring strict security &amp; compliance</p>
          </div>
          <div className="relative flex flex-1 flex-col gap-6 p-6">
            <ul className="space-y-3">
              {ENT.map((item, i) => (
                <li key={item}
                  className={`flex items-start gap-2.5 text-xs ${i === 0 ? "font-medium" : ""}`}
                  style={{ color: i === 0 ? "#94a3b8" : "#64748b" }}>
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />{item}
                </li>
              ))}
            </ul>
            <Button size="sm"
              className="mt-auto w-full rounded-md border-0 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-10 flex items-center justify-center gap-2 text-xs" style={{ color: "#475569" }}>
        <Building2 className="h-3.5 w-3.5" />
        Need custom limits or on-premise deployment?{" "}
        <a href="#" className="text-blue-400 transition-colors hover:text-blue-300">Contact our enterprise team.</a>
      </div>
    </section>
  )
}