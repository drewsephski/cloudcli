"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Terminal, ShieldCheck, Zap, Globe, Lock, ArrowRight, Loader2 } from "lucide-react"
import { auth, googleProvider } from "@/lib/firebase"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"

// ─── SVG logos ────────────────────────────────────────────────────────────────

const GoogleLogo = () => (
  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

const GithubLogo = () => (
  <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

// ─── Left panel feature list ───────────────────────────────────────────────────

const FEATURES = [
  {
    icon: <ShieldCheck className="h-4 w-4 text-blue-400" />,
    title: "Zero Trust Security",
    desc: "SOC2 compliant, isolated containers per user.",
  },
  {
    icon: <Zap className="h-4 w-4 text-indigo-400" />,
    title: "Instant Provisioning",
    desc: "Live environments in under 60 seconds.",
  },
  {
    icon: <Globe className="h-4 w-4 text-blue-400" />,
    title: "Any Device, Anywhere",
    desc: "Full terminal access from phone, web, or IDE.",
  },
  {
    icon: <Lock className="h-4 w-4 text-indigo-400" />,
    title: "Bring Your Own Key",
    desc: "Claude, OpenAI, Gemini — your keys stay yours.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/dashboard")
    })
    return () => unsubscribe()
  }, [router])

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      await signInWithPopup(auth, googleProvider)
      router.push("/dashboard")
    } catch (error) {
      console.error("Auth error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="flex min-h-screen w-full overflow-hidden bg-[#02040a]"
      style={{ fontFamily: "'DM Sans', sans-serif", color: "#f8fafc" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');.font-syne{font-family:'Syne',sans-serif;}`}</style>

      {/* ── Left panel ──────────────────────────────────────────────────────── */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden border-r border-white/[0.06] bg-[#020509] p-12 lg:flex">

        {/* Ambient glows */}
        <div className="pointer-events-none absolute left-[-15%] top-[-15%] h-[60%] w-[60%] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.09) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[50%] w-[50%] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(79,70,229,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="flex w-fit items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1.6" />
                <rect x="8" y="8" width="8" height="8" rx="1.5" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
            <span className="font-syne text-sm font-bold tracking-tight text-[#f8fafc]">CloudCLI</span>
          </Link>
        </div>

        {/* Copy + features */}
        <div className="relative z-10 max-w-[400px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <h2 className="font-syne mb-3 text-[1.875rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#f8fafc]">
              Accelerate your engineering velocity.
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-slate-400">
              Secure, instant cloud environments for your entire team.
              Run Claude Code, Cursor, and Codex seamlessly across any device.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="flex items-start gap-3.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.32 + i * 0.07 }}
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03]">
                  {f.icon}
                </div>
                <div>
                  <p className="font-syne text-[0.8125rem] font-semibold tracking-tight text-slate-100">{f.title}</p>
                  <p className="text-xs text-slate-500">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social proof */}
        <motion.div
          className="relative z-10 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.65 }}
        >
          <div className="flex -space-x-2">
            {["2563eb", "4f46e5", "0891b2", "0d9488"].map((hex, i) => (
              <div
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#020509] text-[10px] font-semibold text-white"
                style={{ background: `#${hex}` }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Trusted by <span className="text-slate-300">10,000+</span> developers
          </p>
        </motion.div>
      </div>

      {/* ── Right panel ─────────────────────────────────────────────────────── */}
      <div className="relative flex w-full items-center justify-center p-8 lg:w-1/2 sm:p-12">

        {/* Subtle right-side glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full"
          style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />

        {/* Mobile logo */}
        <Link href="/" className="absolute left-6 top-6 flex items-center gap-2 lg:hidden">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1.6" />
            <rect x="8" y="8" width="8" height="8" rx="1.5" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1" opacity="0.3" />
          </svg>
          <span className="font-syne text-sm font-bold tracking-tight text-[#f8fafc]">CloudCLI</span>
        </Link>

        <motion.div
          className="relative z-10 w-full max-w-[380px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {/* Heading */}
          <div className="mb-8">
            <h1 className="font-syne mb-1.5 text-2xl font-extrabold tracking-[-0.025em] text-[#f8fafc]">
              Welcome back
            </h1>
            <p className="text-sm text-slate-400">
              Sign in to your CloudCLI workspace
            </p>
          </div>

          {/* Auth card */}
          <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#090e1a]">

            {/* Top shimmer */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="space-y-3 p-6">

              {/* Google */}
              <Button
                size="lg"
                className="w-full gap-2.5 rounded-md border border-white/[0.1] bg-white/[0.05] text-sm font-medium text-[#f8fafc] transition-colors hover:bg-white/[0.09] hover:border-white/[0.16]"
                style={{ height: "42px", background: "rgba(255,255,255,0.05)" }}
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                ) : (
                  <GoogleLogo />
                )}
                Continue with Google
              </Button>

              {/* Divider */}
              <div className="relative flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[11px] text-slate-600">or</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              {/* GitHub / Enterprise SSO */}
              <Button
                variant="ghost"
                size="lg"
                className="w-full gap-2.5 rounded-md border border-white/[0.07] bg-transparent text-sm font-medium text-slate-400 transition-colors hover:bg-white/[0.04] hover:border-white/[0.12] hover:text-slate-200"
                style={{ height: "42px" }}
                disabled={isLoading}
              >
                <GithubLogo />
                Enterprise SSO
              </Button>
            </div>

            {/* Bottom footer */}
            <div className="border-t border-white/[0.05] px-6 py-4">
              <p className="text-center text-[11px] leading-relaxed text-slate-600">
                By continuing, you agree to our{" "}
                <Link href="#" className="text-slate-400 underline-offset-2 hover:text-slate-200 hover:underline transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-slate-400 underline-offset-2 hover:text-slate-200 hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Below-card trust line */}
          <p className="mt-5 text-center text-[11px] text-slate-600">
            No credit card required · Cancel anytime
          </p>

          {/* Subtle back link */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs text-slate-600 transition-colors hover:text-slate-400"
            >
              <ArrowRight className="h-3 w-3 rotate-180" />
              Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}