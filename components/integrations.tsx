"use client";

import { Cloud, Code2, Terminal, Bot, Sparkles, Workflow, Database, ShieldCheck } from "lucide-react"

const LOGOS = [
  { icon: <Terminal   className="h-5 w-5" />, label: "VS Code" },
  { icon: <Bot        className="h-5 w-5" />, label: "Claude Code" },
  { icon: <Code2      className="h-5 w-5" />, label: "Cursor" },
  { icon: <Sparkles   className="h-5 w-5" />, label: "Gemini CLI" },
  { icon: <Database   className="h-5 w-5" />, label: "Codex" },
  { icon: <Cloud      className="h-5 w-5" />, label: "AWS" },
  { icon: <ShieldCheck className="h-5 w-5" />, label: "SOC2" },
  { icon: <Workflow   className="h-5 w-5" />, label: "Linear" },
]

export function Integrations() {
  return (
    <section
      className="container mx-auto max-w-screen-xl px-5 py-14 text-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#334155" }}>
        Trusted by engineering teams using
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {LOGOS.map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-md border px-3.5 py-2 text-xs transition-colors"
            style={{
              borderColor: "rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
              color: "#334155",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
              e.currentTarget.style.color = "#64748b"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"
              e.currentTarget.style.color = "#334155"
            }}
          >
            {icon}{label}
          </div>
        ))}
      </div>
    </section>
  )
}