import { ArrowRight, Terminal, Bot, Sparkles, Code2, Users, Share2, Key, Database } from "lucide-react"

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#3b82f6" }}>
      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />{children}
    </div>
  )
}

const AGENTS = [
  { icon: <Bot       className="h-4 w-4 text-orange-400" />, label: "Claude Code" },
  { icon: <Terminal  className="h-4 w-4 text-blue-400" />,   label: "Cursor CLI" },
  { icon: <Code2     className="h-4 w-4 text-emerald-400" />, label: "Codex" },
  { icon: <Sparkles  className="h-4 w-4 text-purple-400" />,  label: "Gemini CLI" },
]

const TEAM_ROWS = [
  { icon: <Terminal className="h-4 w-4" />,  label: "Environment",   value: "node-24-dev" },
  { icon: <Share2   className="h-4 w-4" />,  label: "MCP Servers",   value: "github, linear, slack" },
  { icon: <Database className="h-4 w-4" />,  label: "Context Files", value: "CLAUDE.md, .cursorrules" },
  { icon: <Key      className="h-4 w-4" />,  label: "API Keys",      value: "Encrypted & shared" },
]

export function Features() {
  return (
    <section
      className="container mx-auto max-w-screen-xl px-5 py-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      id="features"
    >

      {/* ── Feature 1: Session continuity ── */}
      <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionLabel>Session Continuity</SectionLabel>
          <h2 className="font-syne mb-4 text-[1.625rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl" style={{ color: "#f8fafc" }}>
            Start on your phone, continue in VS Code
          </h2>
          <p className="text-sm leading-[1.75]" style={{ color: "#64748b" }}>
            One session, any device. Kick off a coding task from your phone while commuting,
            then pick up the exact same session in your IDE when you reach your desk.
            The environment keeps running. Your context stays intact.
          </p>
        </div>

        {/* Visual */}
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-sm items-center justify-between gap-4 rounded-xl border p-5"
            style={{ borderColor: "rgba(255,255,255,0.07)", background: "#090e1a" }}>
            {/* Phone */}
            <div className="flex h-44 w-20 flex-col overflow-hidden rounded-lg border border-white/[0.07]" style={{ background: "#060810" }}>
              <div className="h-3 w-full border-b border-white/[0.06]" style={{ background: "rgba(255,255,255,0.03)" }} />
              <div className="flex-1 p-2 font-mono text-[8px]">
                <span style={{ color: "#60a5fa" }}>$ cloudcli</span><br />
                <span style={{ color: "#475569" }}>running...</span>
              </div>
            </div>
            {/* Arrow */}
            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="h-5 w-5" style={{ color: "#334155" }} />
              <span className="text-[10px]" style={{ color: "#334155" }}>Same session</span>
            </div>
            {/* Desktop */}
            <div className="flex h-44 flex-1 flex-col overflow-hidden rounded-lg border border-white/[0.07]" style={{ background: "#060810" }}>
              <div className="flex h-3 items-center gap-1 border-b border-white/[0.06] px-1.5" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50" />
                <div className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 p-2 font-mono text-[8px]">
                <span style={{ color: "#60a5fa" }}>$ cloudcli attach</span><br />
                <span style={{ color: "#475569" }}>connected.</span><br />
                <span style={{ color: "#4ade80" }}>auth.ts *</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Feature 2: Agent agnostic ── */}
      <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
        {/* Visual */}
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-xl border p-6" style={{ borderColor: "rgba(255,255,255,0.07)", background: "#090e1a" }}>
            <div className="mb-6 flex justify-center">
              <div className="rounded-xl border border-blue-500/15 bg-blue-500/8 p-4">
                <Database className="h-7 w-7 text-blue-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {AGENTS.map(({ icon, label }) => (
                <div key={label}
                  className="flex items-center gap-2.5 rounded-lg border px-3.5 py-3 text-sm"
                  style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)", color: "#94a3b8" }}>
                  {icon}<span className="font-medium" style={{ color: "#e2e8f0" }}>{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs" style={{ color: "#334155" }}>Your API key. Your choice.</p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <SectionLabel>Agent Agnostic</SectionLabel>
          <h2 className="font-syne mb-4 text-[1.625rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl" style={{ color: "#f8fafc" }}>
            Bring your own agent, bring your own key
          </h2>
          <p className="text-sm leading-[1.75]" style={{ color: "#64748b" }}>
            Claude Code, Cursor CLI, Codex, Gemini — use whichever AI coding agent you prefer.
            CloudCLI provides the persistent environments, cross-device access, and a real UI. No lock-in.
          </p>
        </div>
      </div>

      {/* ── Feature 3: Teams ── */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionLabel>Built for Teams</SectionLabel>
          <h2 className="font-syne mb-4 text-[1.625rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl" style={{ color: "#f8fafc" }}>
            Share environments, context, and configurations
          </h2>
          <p className="text-sm leading-[1.75]" style={{ color: "#64748b" }}>
            Stop copying .env files and context docs. Share environments, MCP servers, and configurations
            across your team. Everyone starts with the same setup. Onboard in minutes.
          </p>
        </div>

        {/* Visual */}
        <div className="overflow-hidden rounded-xl border p-5" style={{ borderColor: "rgba(255,255,255,0.07)", background: "#090e1a" }}>
          <div className="space-y-2">
            {TEAM_ROWS.map(({ icon, label, value }) => (
              <div key={label}
                className="flex items-center justify-between rounded-lg border px-3.5 py-3"
                style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-center gap-2.5 text-sm" style={{ color: "#64748b" }}>
                  {icon}
                  <span className="font-medium" style={{ color: "#94a3b8" }}>{label}</span>
                </div>
                <span className="font-mono text-[11px]" style={{ color: "#475569" }}>{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs" style={{ color: "#475569" }}>
            <div className="flex -space-x-2">
              {["#2563eb", "#4f46e5", "#0891b2"].map((bg, i) => (
                <div key={i} className="flex h-6 w-6 items-center justify-center rounded-full border-2 text-[10px] font-semibold text-white"
                  style={{ background: bg, borderColor: "#090e1a" }}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            Team synced
          </div>
        </div>
      </div>

    </section>
  )
}