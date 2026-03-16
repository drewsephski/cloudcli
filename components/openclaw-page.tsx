"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Terminal,
  Zap,
  Lock,
  Star,
  Users,
  Clock,
  MessageSquare,
  Smartphone,
  ShieldCheck,
  Plus,
} from "lucide-react"
import Link from "next/link"
import { AnthropicLogo } from "@/components/logos/anthropic"
import { GeminiLogo } from "@/components/logos/gemini"
import { GrokLogo } from "@/components/logos/grok"
// ─── SVG Brand Logos ──────────────────────────────────────────────────────────

const OpenAILogo = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#10a37f" />
    <circle cx="10" cy="10" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="10" cy="10" r="1" fill="white" />
  </svg>
)
const TelegramLogo = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#229ED9" />
    <path d="M4.5 9.8L15.5 5.5L13 14.5L9.5 11.5L7.5 13.5V10.5L13.5 6.5L7 10.5L4.5 9.8Z" fill="white" />
  </svg>
)
const WhatsAppLogo = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#25D366" />
    <path d="M10 4C6.69 4 4 6.69 4 10C4 11.07 4.29 12.07 4.79 12.93L4 16L7.18 15.22C8.02 15.69 8.98 15.97 10 15.97C13.31 15.97 16 13.28 16 9.97C16 6.69 13.31 4 10 4Z" fill="white" fillOpacity="0.15" />
    <path d="M12.8 11.6C12.6 12.05 11.85 12.45 11.4 12.5C10.75 12.56 10.25 12.35 9.6 12.05C7.95 11.3 7 9.65 6.9 9.5C6.8 9.35 6.2 8.6 6.2 7.8C6.2 7 6.65 6.6 6.85 6.38C7.05 6.18 7.28 6.13 7.42 6.13C7.56 6.13 7.7 6.14 7.82 6.15C7.96 6.16 8.13 6.1 8.3 6.48C8.48 6.88 8.85 7.7 8.9 7.8C8.95 7.9 8.98 8.02 8.91 8.15C8.84 8.28 8.8 8.36 8.7 8.48C8.6 8.6 8.49 8.73 8.4 8.82C8.3 8.92 8.19 9.03 8.31 9.22C8.43 9.41 8.85 10.08 9.45 10.6C10.22 11.29 10.88 11.5 11.07 11.6C11.26 11.7 11.37 11.68 11.49 11.54C11.61 11.4 11.99 10.95 12.13 10.76C12.27 10.57 12.41 10.6 12.6 10.66C12.79 10.72 13.6 11.12 13.8 11.21C14 11.3 14.14 11.35 14.18 11.43C14.22 11.52 14.22 12.08 12.8 11.6Z" fill="white" />
  </svg>
)
const DiscordLogo = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#5865F2" />
    <path d="M13.5 6.5C12.75 6.13 11.93 5.88 11.08 5.75L10.75 6.4C9.84 6.27 8.95 6.27 8.06 6.4L7.72 5.75C6.87 5.88 6.05 6.14 5.3 6.5C3.74 8.83 3.33 11.1 3.53 13.35C4.56 14.1 5.55 14.55 6.53 14.85C6.76 14.54 6.97 14.2 7.15 13.85C6.8 13.72 6.46 13.56 6.15 13.37L6.4 13.17C8.4 14.11 10.62 14.11 12.6 13.17L12.85 13.37C12.54 13.56 12.2 13.72 11.85 13.85C12.03 14.2 12.24 14.54 12.47 14.85C13.45 14.55 14.45 14.1 15.47 13.35C15.7 10.77 15.06 8.52 13.5 6.5ZM7.9 11.93C7.28 11.93 6.78 11.37 6.78 10.69C6.78 10.01 7.27 9.45 7.9 9.45C8.53 9.45 9.02 10.01 9.02 10.69C9.02 11.37 8.52 11.93 7.9 11.93ZM12.1 11.93C11.48 11.93 10.98 11.37 10.98 10.69C10.98 10.01 11.47 9.45 12.1 9.45C12.73 9.45 13.22 10.01 13.22 10.69C13.22 11.37 12.73 11.93 12.1 11.93Z" fill="white" />
  </svg>
)
const SlackLogo = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#4A154B" />
    <rect x="7" y="4.5" width="1.8" height="4.5" rx="0.9" fill="#E01E5A" />
    <rect x="4.5" y="7" width="4.5" height="1.8" rx="0.9" fill="#36C5F0" />
    <rect x="11.2" y="4.5" width="1.8" height="4.5" rx="0.9" fill="#2EB67D" />
    <rect x="11" y="11.2" width="4.5" height="1.8" rx="0.9" fill="#ECB22E" />
    <rect x="7" y="11" width="1.8" height="4.5" rx="0.9" fill="#E01E5A" />
    <rect x="4.5" y="11.2" width="4.5" height="1.8" rx="0.9" fill="#36C5F0" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROVIDERS = [
  { name: "Claude",  icon: <AnthropicLogo />,  cls: "border-orange-500/20 text-orange-300/70 hover:border-orange-400/40 hover:text-orange-300" },
  { name: "OpenAI",  icon: <OpenAILogo />,  cls: "border-emerald-500/20 text-emerald-300/70 hover:border-emerald-400/40 hover:text-emerald-300" },
  { name: "Gemini",  icon: <GeminiLogo />,  cls: "border-blue-500/20 text-blue-300/70 hover:border-blue-400/40 hover:text-blue-300" },
  { name: "Grok",    icon: <GrokLogo />,    cls: "border-zinc-600/30 text-zinc-400/70 hover:border-zinc-500/50 hover:text-zinc-300" },
]

const PLATFORMS = [
  { name: "Telegram",  icon: <TelegramLogo /> },
  { name: "WhatsApp",  icon: <WhatsAppLogo /> },
  { name: "Discord",   icon: <DiscordLogo /> },
  { name: "Slack",     icon: <SlackLogo /> },
]

const FEATURES = [
  {
    icon: <Terminal className="h-[18px] w-[18px] text-blue-400" />,
    title: "Full Terminal Access",
    desc: "Persistent shell sessions across every device. Pick up exactly where you left off.",
  },
  {
    icon: <Zap className="h-[18px] w-[18px] text-indigo-400" />,
    title: "Live in 60 Seconds",
    desc: "No infrastructure to configure. Your instance is provisioned and ready to code instantly.",
  },
  {
    icon: <Globe className="h-[18px] w-[18px] text-blue-400" />,
    title: "Any Provider, Your Key",
    desc: "Claude, OpenAI, Gemini, Grok — bring your own API keys and swap models on the fly.",
  },
  {
    icon: <MessageSquare className="h-[18px] w-[18px] text-indigo-400" />,
    title: "Chat App Native",
    desc: "Run OpenClaw inside Telegram, Discord, WhatsApp, Slack, and 850+ more integrations.",
  },
  {
    icon: <ShieldCheck className="h-[18px] w-[18px] text-blue-400" />,
    title: "Private by Default",
    desc: "Isolated containers per user. Your code and keys never touch shared compute.",
  },
  {
    icon: <Lock className="h-[18px] w-[18px] text-indigo-400" />,
    title: "Shared Infrastructure",
    desc: "Enterprise-grade uptime at consumer pricing. We handle ops so you don't have to.",
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
      />
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-white/5" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {children}
      </span>
      <div className="h-px flex-1 bg-white/5" />
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OpenClawPage() {
  return (
    <div className="min-h-screen bg-[#02040a] text-[#f8fafc]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[360px] w-[700px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 68%)", filter: "blur(32px)" }} />
      </div>

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 flex h-12 items-center justify-between border-b border-white/[0.06] bg-[#02040a]/85 px-5 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1.6" />
            <rect x="8" y="8" width="8" height="8" rx="1.5" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1" opacity="0.3" />
          </svg>
          <span className="font-syne text-sm font-700 tracking-tight text-[#f8fafc]">OpenClaw</span>
        </div>
        <Link href="/auth">
          <Button size="sm"
            className="h-7 gap-1.5 rounded-md border-0 px-4 text-xs font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
            Claim spot <ArrowRight className="h-3 w-3" />
          </Button>
        </Link>
      </header>

      <main className="relative z-10 mx-auto max-w-3xl px-5 py-16 md:py-24">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="mb-14 max-w-[640px]">

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38 }} className="mb-4">
            <Badge className="gap-2 rounded-md border border-blue-500/20 bg-blue-500/8 px-2.5 py-1 text-[11px] font-normal text-blue-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
              </span>
              287 founding spots remaining
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.07 }}
            className="font-syne mb-4 text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.03em] md:text-[2.75rem]"
          >
            Your own OpenClaw instance.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Any device.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.13 }}
            className="mb-6 text-[0.9375rem] leading-relaxed text-slate-400"
          >
            No setup. Full terminal access. Every major AI provider pre-connected.
            Live in under 60 seconds — for less than a coffee a month.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.18 }}
            className="mb-7 flex flex-wrap gap-2"
          >
            {[
              { icon: <CheckCircle2 className="h-3 w-3 text-blue-400" />, label: "Cancel anytime" },
              { icon: <Lock className="h-3 w-3 text-blue-400" />,         label: "Money-back guarantee" },
              { icon: <Globe className="h-3 w-3 text-blue-400" />,        label: "Shared infrastructure" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-xs text-slate-500">
                {icon}{label}
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.23 }}>
            <Link href="/auth">
              <Button size="lg"
                className="gap-2 rounded-md border-0 px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
                Claim $3.99/mo spot <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* ── Pricing card ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }}
          className="mb-14 overflow-hidden rounded-xl border border-white/[0.07] bg-[#090e1a]"
        >
          <div className="border-b border-white/[0.06] px-6 py-5"
            style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(79,70,229,0.05) 50%, transparent 100%)" }}>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500">
                  Founding Batch Pricing
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-syne text-2xl font-bold tracking-tight text-[#f8fafc]">$3.99</span>
                  <span className="text-sm text-slate-500">/month</span>
                  <span className="ml-1 text-xs text-slate-600 line-through">$9.99</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-blue-500/20 bg-blue-500/8 px-2.5 py-1 text-[11px] text-blue-300">
                <Star className="h-3 w-3" />Founding Member
              </div>
            </div>
            <ProgressBar value={71.3} />
            <div className="mt-2.5 flex justify-between">
              <p className="text-xs text-slate-500"><span className="font-medium text-slate-300">713</span> of 1,000 spots claimed</p>
              <p className="text-xs text-slate-500"><span className="font-medium text-slate-300">287</span> remaining</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 py-3.5">
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="h-3 w-3" />After this batch: $9.99/mo for new signups
            </p>
            <Link href="/auth">
              <Button variant="ghost" size="sm"
                className="h-7 gap-1 rounded-md px-3 text-xs text-blue-400 hover:bg-blue-500/10 hover:text-blue-300">
                Lock it in <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* ── Feature grid ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.4 }}
          className="mb-14"
        >
          <SectionLabel>What you get</SectionLabel>
          {/* Gap-px grid creates hairline separators using the bg color behind it */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.45 + i * 0.055 }}
                className="group bg-[#090e1a] p-5 transition-colors duration-200 hover:bg-blue-950/30"
              >
                <div className="mb-3.5 inline-flex rounded-lg border border-blue-500/15 bg-blue-500/8 p-2">
                  {f.icon}
                </div>
                <h3 className="font-syne mb-1.5 text-[0.8125rem] font-semibold tracking-tight text-slate-100">
                  {f.title}
                </h3>
                <p className="text-xs leading-[1.65] text-slate-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Providers + Platforms ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.55 }}
          className="mb-14 overflow-hidden rounded-xl border border-white/[0.07] bg-[#090e1a]"
        >
          {/* Providers */}
          <div className="border-b border-white/[0.06] px-5 py-5">
            <p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500">
              Bring your own API key
            </p>
            <div className="flex flex-wrap gap-2">
              {PROVIDERS.map((p) => (
                <div key={p.name}
                  className={`flex cursor-default items-center gap-1.5 rounded-md border bg-white/[0.02] px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 ${p.cls}`}>
                  {p.icon}{p.name}
                </div>
              ))}
              <div className="flex cursor-default items-center gap-1.5 rounded-md border border-dashed border-white/10 px-2.5 py-1.5 text-xs text-slate-600">
                <Plus className="h-3 w-3" />any provider
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="px-5 py-5">
            <p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500">
              Works inside your apps
            </p>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <div key={p.name}
                  className="flex cursor-default items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-500 transition-colors duration-200 hover:border-white/[0.13] hover:text-slate-300">
                  {p.icon}{p.name}
                </div>
              ))}
              <div className="flex cursor-default items-center rounded-md border border-dashed border-white/[0.06] px-2.5 py-1.5 text-xs text-slate-600">
                + 850 more
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Stats row ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.65 }}
          className="mb-14 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/[0.05]"
        >
          {[
            { icon: <Users className="h-3.5 w-3.5 text-blue-400" />,  stat: "713+",   label: "Instances deployed" },
            { icon: <Zap   className="h-3.5 w-3.5 text-indigo-400" />, stat: "~58s",   label: "Avg. setup time" },
            { icon: <Star  className="h-3.5 w-3.5 text-blue-400" />,   stat: "4.9/5",  label: "Member rating" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5 bg-[#090e1a] px-4 py-5">
              <div className="flex items-center gap-1.5">
                {s.icon}
                <span className="font-syne text-base font-bold tracking-tight text-[#f8fafc]">{s.stat}</span>
              </div>
              <span className="text-center text-[11px] text-slate-500">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Final CTA ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.75 }}
          className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#090e1a] px-8 py-10 text-center"
        >
          {/* top shimmer */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />

          <Smartphone className="mx-auto mb-4 h-7 w-7 text-blue-400/70" />
          <h2 className="font-syne mb-2.5 text-xl font-bold tracking-tight text-[#f8fafc]">
            Ready to code from anywhere?
          </h2>
          <p className="mx-auto mb-7 max-w-sm text-sm leading-relaxed text-slate-400">
            Join 713 developers who already claimed their founding spot.
            Price locks in the moment you subscribe.
          </p>
          <Link href="/auth">
            <Button size="lg"
              className="gap-2 rounded-md border-0 px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
              Claim $3.99/mo spot <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <p className="mt-4 text-[11px] text-slate-600">
            Cancel anytime · No credit card required · Instant setup
          </p>
        </motion.div>

      </main>
    </div>
  )
}