import { Smartphone, Monitor, Server } from "lucide-react"

const STEPS = [
  {
    n: "01",
    icon: <Smartphone className="h-4 w-4 text-blue-400" />,
    title: "Start from anywhere",
    desc: "Kick off a session from your phone, browser, Linear/Jira, or via API. No configuration needed.",
  },
  {
    n: "02",
    icon: <Monitor className="h-4 w-4 text-indigo-400" />,
    title: "Continue in your IDE",
    desc: "Pick up the same session in VS Code or Cursor over SSH. Every file, every change — exactly where you left it.",
  },
  {
    n: "03",
    icon: <Server className="h-4 w-4 text-blue-400" />,
    title: "Agents keep running",
    desc: "Sessions persist in cloud environments. Background tasks finish while you're away.",
  },
]

export function HowItWorks() {
  return (
    <section
      className="container mx-auto max-w-screen-xl px-5 py-20 text-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      id="how-it-works"
    >
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-[560px] flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#3b82f6" }}>
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          How it works
        </div>
        <h2 className="font-syne text-[1.75rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl" style={{ color: "#f8fafc" }}>
          Three steps to cloud-first AI development
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
          No SSH tunnels. No tmux hacks. No VPN configs. Just launch and code from anywhere.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-px overflow-hidden rounded-xl bg-white/[0.05] sm:grid-cols-3">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="group flex flex-col items-start gap-4 bg-[#090e1a] p-6 text-left transition-colors duration-200 hover:bg-blue-950/30"
          >
            <div className="flex w-full items-center justify-between">
              <div className="rounded-lg border border-blue-500/15 bg-blue-500/8 p-2">
                {s.icon}
              </div>
              <span className="font-syne text-2xl font-bold tracking-tight" style={{ color: "#1e293b" }}>{s.n}</span>
            </div>
            <div>
              <h3 className="font-syne mb-1.5 text-[0.875rem] font-semibold tracking-tight" style={{ color: "#e2e8f0" }}>
                {s.title}
              </h3>
              <p className="text-xs leading-[1.7]" style={{ color: "#64748b" }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}