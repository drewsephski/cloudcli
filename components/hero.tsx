"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowRight, Smartphone, Terminal, Lock, Globe, ShieldCheck, Monitor, Layout, Play, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [activeTab, setActiveTab] = useState<"mobile" | "web" | "ide">("mobile")

  return (
    <section className="container mx-auto max-w-screen-xl px-4 pt-24 pb-16 text-center md:pt-32 md:pb-24">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="px-3 py-1 text-sm font-normal border-primary/20 bg-primary/5 text-primary">
            <ShieldCheck className="mr-2 h-3 w-3" />
            Enterprise Ready | OpenClaw Native
          </Badge>
        </motion.div>
        
        <motion.h1 
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Code from anywhere. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Even your phone.</span>
        </motion.h1>
        
        <motion.p 
          className="max-w-[600px] text-lg text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Secure, scalable cloud environments for your engineering team. Run Claude Code, Cursor & Codex seamlessly across any device.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/30 px-3 py-1.5 shadow-sm">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Zero Trust Security
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/30 px-3 py-1.5 shadow-sm">
            <Lock className="h-3.5 w-3.5 text-primary" /> Persistent Sessions
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/30 px-3 py-1.5 shadow-sm">
            <Globe className="h-3.5 w-3.5 text-primary" /> Global Edge Network
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-4 sm:flex-row sm:items-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/auth">
            <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-0.5">
              Start building <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 border-border/60 hover:bg-secondary/50">
            <Play className="h-4 w-4" /> Book a Demo
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="mx-auto mt-20 max-w-[900px] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/50 text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3 text-sm text-muted-foreground backdrop-blur-sm">
          <button 
            onClick={() => setActiveTab("mobile")}
            className={`flex items-center gap-2 rounded-md px-4 py-1.5 transition-all ${activeTab === "mobile" ? "bg-background text-foreground shadow-sm border border-border/50" : "hover:text-foreground hover:bg-muted/50"}`}
          >
            <Smartphone className="h-4 w-4" /> Mobile
          </button>
          <button 
            onClick={() => setActiveTab("web")}
            className={`flex items-center gap-2 rounded-md px-4 py-1.5 transition-all ${activeTab === "web" ? "bg-background text-foreground shadow-sm border border-border/50" : "hover:text-foreground hover:bg-muted/50"}`}
          >
            <Globe className="h-4 w-4" /> Web
          </button>
          <button 
            onClick={() => setActiveTab("ide")}
            className={`flex items-center gap-2 rounded-md px-4 py-1.5 transition-all ${activeTab === "ide" ? "bg-background text-foreground shadow-sm border border-border/50" : "hover:text-foreground hover:bg-muted/50"}`}
          >
            <Layout className="h-4 w-4" /> IDE
          </button>
        </div>
        
        <div className="relative aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "mobile" && (
              <motion.div 
                key="mobile"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="h-full w-[320px] rounded-[2rem] border-[6px] border-gray-800 bg-black p-4 shadow-2xl relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-1/2 h-4 w-32 -translate-x-1/2 rounded-b-xl bg-gray-800" />
                  <div className="mt-6 font-mono text-xs text-gray-300 flex-1 overflow-y-auto pb-12">
                    <div className="flex items-center gap-2 text-blue-400">
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-gray-300">cloudcli add-auth-middleware</span>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="text-gray-400">Creating auth middleware...</div>
                      <div className="text-blue-300">src/</div>
                      <div className="pl-4 text-blue-300">middleware/</div>
                      <div className="pl-8 text-green-400">auth.ts <span className="text-gray-500">(new)</span></div>
                      <div className="pl-8 text-gray-400">rateLimit.ts</div>
                      <div className="pl-4 text-blue-300">routes/</div>
                      <div className="pl-8 text-yellow-400">api.ts <span className="text-gray-500">(modified)</span></div>
                      <div className="pl-8 text-gray-400">users.ts</div>
                      <div className="mt-4 text-green-400">✓ Successfully added auth middleware</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-md border border-gray-800 bg-gray-900/80 px-3 py-2 text-xs text-gray-500 backdrop-blur-sm">
                    Message agent...
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "web" && (
              <motion.div 
                key="web"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 p-4 sm:p-8"
              >
                <div className="h-full w-full rounded-lg border border-gray-800 bg-[#0f111a] shadow-2xl flex flex-col overflow-hidden">
                  <div className="flex h-10 items-center gap-2 border-b border-gray-800 bg-[#0a0c10] px-4">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto flex h-6 w-1/2 items-center justify-center rounded bg-gray-800/50 text-[10px] text-gray-400">
                      <Lock className="mr-1 h-3 w-3" /> workspace.cloudcli.dev
                    </div>
                  </div>
                  <div className="flex flex-1">
                    <div className="w-48 border-r border-gray-800 bg-[#0a0c10] p-4 font-mono text-[10px] text-gray-400">
                      <div className="mb-2 font-semibold text-gray-300 uppercase tracking-wider">Explorer</div>
                      <div className="space-y-1.5">
                        <div className="text-blue-300">src/</div>
                        <div className="pl-2 text-blue-300">components/</div>
                        <div className="pl-4">button.tsx</div>
                        <div className="pl-4 text-green-400">hero.tsx *</div>
                        <div className="pl-2 text-blue-300">lib/</div>
                        <div className="pl-4">utils.ts</div>
                        <div>package.json</div>
                      </div>
                    </div>
                    <div className="flex-1 p-4 font-mono text-xs text-gray-300 overflow-y-auto">
                      <div className="text-gray-500 mb-2">{`// src/components/hero.tsx`}</div>
                      <div><span className="text-pink-500">import</span> {'{'} <span className="text-blue-300">motion</span> {'}'} <span className="text-pink-500">from</span> <span className="text-green-300">&quot;motion/react&quot;</span></div>
                      <div className="mt-2"><span className="text-pink-500">export function</span> <span className="text-blue-400">Hero</span>() {'{'}</div>
                      <div className="pl-4"><span className="text-pink-500">return</span> (</div>
                      <div className="pl-8 text-gray-400">&lt;<span className="text-blue-300">section</span> <span className="text-blue-200">className</span>=<span className="text-green-300">&quot;container mx-auto&quot;</span>&gt;</div>
                      <div className="pl-12 text-gray-400">&lt;<span className="text-blue-300">motion.h1</span></div>
                      <div className="pl-16 text-gray-400"><span className="text-blue-200">initial</span>={'{'}{'{'} <span className="text-blue-200">opacity</span>: <span className="text-orange-300">0</span>, <span className="text-blue-200">y</span>: <span className="text-orange-300">20</span> {'}'}{'}'}</div>
                      <div className="pl-16 text-gray-400"><span className="text-blue-200">animate</span>={'{'}{'{'} <span className="text-blue-200">opacity</span>: <span className="text-orange-300">1</span>, <span className="text-blue-200">y</span>: <span className="text-orange-300">0</span> {'}'}{'}'}</div>
                      <div className="pl-12 text-gray-400">&gt;</div>
                      <div className="pl-16 text-foreground">Enterprise Ready</div>
                      <div className="pl-12 text-gray-400">&lt;/<span className="text-blue-300">motion.h1</span>&gt;</div>
                      <div className="pl-8 text-gray-400">&lt;/<span className="text-blue-300">section</span>&gt;</div>
                      <div className="pl-4">)</div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "ide" && (
              <motion.div 
                key="ide"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 p-4 sm:p-8"
              >
                <div className="h-full w-full rounded-lg border border-gray-800 bg-[#1e1e1e] shadow-2xl flex flex-col overflow-hidden">
                  <div className="flex h-8 items-center justify-between bg-[#323233] px-4 text-[11px] text-gray-300">
                    <div className="flex gap-4">
                      <span>File</span><span>Edit</span><span>Selection</span><span>View</span><span>Go</span><span>Run</span><span>Terminal</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-600 px-2 py-0.5 rounded text-white font-medium">
                      <Globe className="h-3 w-3" /> CloudCLI: Connected
                    </div>
                  </div>
                  <div className="flex flex-1">
                    <div className="w-12 border-r border-[#333] bg-[#333] flex flex-col items-center py-4 gap-6 text-gray-400">
                      <Layout className="h-5 w-5 text-white" />
                      <Terminal className="h-5 w-5" />
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex h-9 bg-[#252526] border-b border-[#333]">
                        <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 text-[11px] text-white border-t-2 border-blue-500">
                          <span className="text-green-400">M</span> server.ts
                        </div>
                      </div>
                      <div className="flex-1 p-4 font-mono text-[13px] text-[#d4d4d4] leading-relaxed overflow-y-auto">
                        <div><span className="text-[#c586c0]">import</span> {'{'} <span className="text-[#9cdcfe]">CloudCLI</span> {'}'} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;@cloudcli/sdk&apos;</span>;</div>
                        <br/>
                        <div><span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">client</span> = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">CloudCLI</span>({'{'}</div>
                        <div className="pl-4"><span className="text-[#9cdcfe]">environment</span>: <span className="text-[#ce9178]">&apos;production&apos;</span>,</div>
                        <div className="pl-4"><span className="text-[#9cdcfe]">securityLevel</span>: <span className="text-[#ce9178]">&apos;enterprise&apos;</span>,</div>
                        <div className="pl-4"><span className="text-[#9cdcfe]">compliance</span>: [<span className="text-[#ce9178]">&apos;soc2&apos;</span>, <span className="text-[#ce9178]">&apos;hipaa&apos;</span>]</div>
                        <div>{'}'});</div>
                        <br/>
                        <div className="text-[#6a9955]">{`// Agent is actively monitoring the environment`}</div>
                        <div><span className="text-[#4fc1ff]">client</span>.<span className="text-[#dcdcaa]">startAgent</span>();</div>
                      </div>
                      <div className="h-48 border-t border-[#333] bg-[#1e1e1e] p-2 font-mono text-[11px] flex flex-col">
                        <div className="flex gap-4 text-gray-400 mb-2 px-2 shrink-0">
                          <span className="text-white border-b border-white pb-1">TERMINAL</span>
                          <span>OUTPUT</span>
                          <span>DEBUG CONSOLE</span>
                        </div>
                        <div className="px-2 text-gray-300 flex-1 overflow-y-auto">
                          <span className="text-green-400">cloudcli@enterprise-node</span>:<span className="text-blue-400">~/workspace</span>$ npm run build<br/>
                          <span className="text-gray-500">&gt; building for production...</span><br/>
                          <span className="text-green-400">✓ Compiled successfully in 2.4s</span>
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
