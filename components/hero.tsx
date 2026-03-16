"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  ArrowRight, Smartphone, Terminal, Lock, Globe,
  ShieldCheck, Layout, Play, CheckCircle2,
} from "lucide-react"
import Link from "next/link"

type Tab = "mobile" | "web" | "ide"

export function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>("mobile")

  return (
    <section
      className="container mx-auto max-w-screen-xl px-5 pb-20 pt-24 text-center md:pb-28 md:pt-32"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-5">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38 }}>
          <Badge className="gap-2 rounded-md border border-blue-500/20 bg-blue-500/8 px-2.5 py-1 text-[11px] font-normal text-blue-300">
            <ShieldCheck className="h-3 w-3" />
            Enterprise Ready · OpenClaw Native
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-syne text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-5xl md:text-[3.5rem]"
          style={{ color: "#f8fafc" }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.07 }}
        >
          Code from anywhere.{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Even your phone.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="max-w-[540px] text-[1rem] leading-relaxed"
          style={{ color: "#94a3b8" }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.13 }}
        >
          Secure, scalable cloud environments for your engineering team.
          Run Claude Code, Cursor &amp; Codex seamlessly across any device.
        </motion.p>

        {/* Trust pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.18 }}
        >
          {[
            { icon: <CheckCircle2 className="h-3 w-3 text-blue-400" />, label: "Zero Trust Security" },
            { icon: <Lock        className="h-3 w-3 text-blue-400" />, label: "Persistent Sessions" },
            { icon: <Globe       className="h-3 w-3 text-blue-400" />, label: "Global Edge Network" },
          ].map(({ icon, label }) => (
            <div key={label}
              className="flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-xs"
              style={{ color: "#64748b" }}>
              {icon}{label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-2 flex flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.23 }}
        >
          <Link href="/auth">
            <Button size="lg"
              className="gap-2 rounded-md border-0 px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
              Start building <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="ghost"
            className="gap-2 rounded-md border border-white/[0.08] px-7 text-sm transition-colors hover:border-white/[0.14] hover:bg-white/[0.03]"
            style={{ color: "#94a3b8" }}>
            <Play className="h-3.5 w-3.5" />Book a Demo
          </Button>
        </motion.div>
      </div>

      {/* ── Interactive preview ── */}
      <motion.div
        className="mx-auto mt-16 max-w-[860px] overflow-hidden rounded-xl border text-left shadow-2xl"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "#090e1a" }}
        initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.42 }}
      >
        {/* Tab bar */}
        <div
          className="flex items-center gap-1.5 border-b px-4 py-2.5"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
        >
          {(["mobile", "web", "ide"] as Tab[]).map((tab) => {
            const Icon = tab === "mobile" ? Smartphone : tab === "web" ? Globe : Layout
            const active = activeTab === tab
            return (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs capitalize transition-colors"
                style={{
                  background: active ? "rgba(255,255,255,0.06)" : "transparent",
                  border: active ? "1px solid rgba(255,255,255,0.09)" : "1px solid transparent",
                  color: active ? "#e2e8f0" : "#475569",
                }}>
                <Icon className="h-3.5 w-3.5" />{tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          })}
        </div>

        {/* Preview area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#060810]">
          <AnimatePresence mode="wait">

            {/* Mobile */}
            {activeTab === "mobile" && (
              <motion.div key="mobile"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="relative flex h-full w-[300px] flex-col overflow-hidden rounded-[1.75rem] border-[5px] border-[#1e2235] bg-[#080b14] shadow-2xl">
                  <div className="absolute left-1/2 top-0 h-4 w-28 -translate-x-1/2 rounded-b-xl bg-[#1e2235]" />
                  <div className="mt-5 flex-1 overflow-y-auto p-4 pb-14 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5" style={{ color: "#60a5fa" }}>
                      <span style={{ color: "#4ade80" }}>➜</span>
                      <span style={{ color: "#60a5fa" }}>~</span>
                      <span style={{ color: "#e2e8f0" }}>cloudcli add-auth-middleware</span>
                    </div>
                    <div className="mt-3 space-y-1" style={{ color: "#64748b" }}>
                      <div>Creating auth middleware...</div>
                      <div style={{ color: "#93c5fd" }}>src/</div>
                      <div className="pl-4" style={{ color: "#93c5fd" }}>middleware/</div>
                      <div className="pl-8" style={{ color: "#4ade80" }}>auth.ts <span style={{ color: "#475569" }}>(new)</span></div>
                      <div className="pl-8">rateLimit.ts</div>
                      <div className="pl-4" style={{ color: "#93c5fd" }}>routes/</div>
                      <div className="pl-8" style={{ color: "#fbbf24" }}>api.ts <span style={{ color: "#475569" }}>(modified)</span></div>
                      <div className="pl-8">users.ts</div>
                      <div className="mt-3" style={{ color: "#4ade80" }}>✓ Successfully added auth middleware</div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-[11px]" style={{ color: "#334155" }}>
                    Message agent...
                  </div>
                </div>
              </motion.div>
            )}

            {/* Web */}
            {activeTab === "web" && (
              <motion.div key="web"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 p-5 sm:p-8"
              >
                <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-white/[0.07] shadow-2xl" style={{ background: "#0d1017" }}>
                  {/* Browser chrome */}
                  <div className="flex h-9 items-center gap-2 border-b border-white/[0.06] bg-[#080b10] px-3">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="mx-auto flex h-5 w-2/5 items-center justify-center gap-1 rounded border border-white/[0.06] bg-white/[0.03] text-[10px]" style={{ color: "#475569" }}>
                      <Lock className="h-2.5 w-2.5" />workspace.cloudcli.dev
                    </div>
                  </div>
                  <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-40 shrink-0 border-r border-white/[0.06] bg-[#080b10] p-3 font-mono text-[9px]" style={{ color: "#475569" }}>
                      <div className="mb-2 text-[9px] font-semibold uppercase tracking-widest" style={{ color: "#334155" }}>Explorer</div>
                      <div className="space-y-1.5">
                        <div style={{ color: "#93c5fd" }}>src/</div>
                        <div className="pl-3" style={{ color: "#93c5fd" }}>components/</div>
                        <div className="pl-6">button.tsx</div>
                        <div className="pl-6" style={{ color: "#4ade80" }}>hero.tsx *</div>
                        <div className="pl-3" style={{ color: "#93c5fd" }}>lib/</div>
                        <div className="pl-6">utils.ts</div>
                        <div>package.json</div>
                      </div>
                    </div>
                    {/* Editor */}
                    <div className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                      <div className="mb-2" style={{ color: "#334155" }}>{`// src/components/hero.tsx`}</div>
                      <div><span style={{ color: "#c084fc" }}>import</span>{" {"} <span style={{ color: "#93c5fd" }}>motion</span> {"}"} <span style={{ color: "#c084fc" }}>from</span> <span style={{ color: "#86efac" }}>&quot;motion/react&quot;</span></div>
                      <div className="mt-2"><span style={{ color: "#c084fc" }}>export function</span> <span style={{ color: "#60a5fa" }}>Hero</span>() {"{"}</div>
                      <div className="pl-4"><span style={{ color: "#c084fc" }}>return</span> (</div>
                      <div className="pl-8">&lt;<span style={{ color: "#93c5fd" }}>motion.h1</span></div>
                      <div className="pl-12"><span style={{ color: "#93c5fd" }}>initial</span>={"{{"} <span style={{ color: "#93c5fd" }}>opacity</span>: <span style={{ color: "#fb923c" }}>0</span> {"}}"}</div>
                      <div className="pl-12"><span style={{ color: "#93c5fd" }}>animate</span>={"{{"} <span style={{ color: "#93c5fd" }}>opacity</span>: <span style={{ color: "#fb923c" }}>1</span> {"}}"}</div>
                      <div className="pl-8">&gt;</div>
                      <div className="pl-12" style={{ color: "#e2e8f0" }}>Enterprise Ready</div>
                      <div className="pl-8">&lt;/<span style={{ color: "#93c5fd" }}>motion.h1</span>&gt;</div>
                      <div className="pl-4">)</div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* IDE */}
            {activeTab === "ide" && (
              <motion.div key="ide"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 p-5 sm:p-8"
              >
                <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-white/[0.06] shadow-2xl" style={{ background: "#1e1e1e" }}>
                  {/* Menu bar */}
                  <div className="flex h-7 items-center justify-between bg-[#2d2d2d] px-4 text-[10px]" style={{ color: "#9ca3af" }}>
                    <div className="flex gap-3">
                      {["File","Edit","View","Go","Run","Terminal"].map(m => <span key={m}>{m}</span>)}
                    </div>
                    <div className="flex items-center gap-1.5 rounded bg-blue-600/90 px-2 py-0.5 text-white">
                      <Globe className="h-2.5 w-2.5" />CloudCLI: Connected
                    </div>
                  </div>
                  <div className="flex flex-1 overflow-hidden">
                    {/* Activity bar */}
                    <div className="flex w-10 flex-col items-center gap-5 border-r border-white/[0.06] bg-[#2d2d2d] py-4" style={{ color: "#64748b" }}>
                      <Layout className="h-4 w-4 text-white" />
                      <Terminal className="h-4 w-4" />
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div className="flex flex-1 flex-col overflow-hidden">
                      {/* Tab */}
                      <div className="flex h-8 border-b border-white/[0.06] bg-[#252526]">
                        <div className="flex items-center gap-2 border-t-2 border-blue-500 bg-[#1e1e1e] px-4 text-[11px]" style={{ color: "#e2e8f0" }}>
                          <span style={{ color: "#4ade80" }}>M</span> server.ts
                        </div>
                      </div>
                      {/* Code */}
                      <div className="flex-1 overflow-y-auto p-4 font-mono text-[12px] leading-relaxed" style={{ color: "#d4d4d4" }}>
                        <div><span style={{ color: "#c586c0" }}>import</span>{" {"} <span style={{ color: "#9cdcfe" }}>CloudCLI</span> {"}"} <span style={{ color: "#c586c0" }}>from</span> <span style={{ color: "#ce9178" }}>&apos;@cloudcli/sdk&apos;</span>;</div>
                        <br />
                        <div><span style={{ color: "#569cd6" }}>const</span> <span style={{ color: "#4fc1ff" }}>client</span> = <span style={{ color: "#569cd6" }}>new</span> <span style={{ color: "#4ec9b0" }}>CloudCLI</span>{"({"}</div>
                        <div className="pl-4"><span style={{ color: "#9cdcfe" }}>environment</span>: <span style={{ color: "#ce9178" }}>&apos;production&apos;</span>,</div>
                        <div className="pl-4"><span style={{ color: "#9cdcfe" }}>securityLevel</span>: <span style={{ color: "#ce9178" }}>&apos;enterprise&apos;</span>,</div>
                        <div className="pl-4"><span style={{ color: "#9cdcfe" }}>compliance</span>: [<span style={{ color: "#ce9178" }}>&apos;soc2&apos;</span>, <span style={{ color: "#ce9178" }}>&apos;hipaa&apos;</span>]</div>
                        <div>{"});"}</div>
                        <br />
                        <div style={{ color: "#6a9955" }}>{`// Agent is actively monitoring`}</div>
                        <div><span style={{ color: "#4fc1ff" }}>client</span>.<span style={{ color: "#dcdcaa" }}>startAgent</span>();</div>
                      </div>
                      {/* Terminal */}
                      <div className="flex h-36 flex-col border-t border-white/[0.06] bg-[#1e1e1e] p-3 font-mono text-[10px]">
                        <div className="mb-2 flex gap-4" style={{ color: "#64748b" }}>
                          <span className="border-b border-white pb-1" style={{ color: "#e2e8f0" }}>TERMINAL</span>
                          <span>OUTPUT</span>
                          <span>DEBUG</span>
                        </div>
                        <div style={{ color: "#9ca3af" }}>
                          <span style={{ color: "#4ade80" }}>cloudcli@enterprise</span>:<span style={{ color: "#60a5fa" }}>~/workspace</span>$ npm run build<br />
                          <span style={{ color: "#475569" }}>&gt; building for production...</span><br />
                          <span style={{ color: "#4ade80" }}>✓ Compiled successfully in 2.4s</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}