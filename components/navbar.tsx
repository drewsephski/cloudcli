"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ShieldCheck } from "lucide-react"

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500&display=swap');`

export function Navbar() {
  return (
    <>
      <style>{FONT_IMPORT + `.font-syne{font-family:'Syne',sans-serif;}`}</style>
      <header
        className="sticky top-0 z-50 w-full border-b"
        style={{
          background: "rgba(2,4,10,0.88)",
          backdropFilter: "blur(18px)",
          borderColor: "rgba(255,255,255,0.06)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div className="container mx-auto flex h-12 max-w-screen-xl items-center px-5">
          {/* Logo */}
          <Link href="/" className="mr-8 flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
              <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1.6" />
              <rect x="8" y="8" width="8" height="8" rx="1.5" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1" opacity="0.3" />
            </svg>
            <span className="font-syne text-sm font-bold tracking-tight" style={{ color: "#f8fafc" }}>CloudCLI</span>
          </Link>

          {/* Nav links */}
          <nav className="hidden items-center gap-6 sm:flex">
            {["Platform", "Pricing", "Enterprise"].map((label, i) => (
              <Link
                key={label}
                href={i === 0 ? "#features" : i === 1 ? "#pricing" : "#"}
                className="text-sm transition-colors"
                style={{ color: "#64748b" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-3">
            <div
              className="hidden items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs sm:flex"
              style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", color: "#475569" }}
            >
              <ShieldCheck className="h-3 w-3 text-blue-500" />SOC2 Compliant
            </div>
            <div className="h-3.5 w-px hidden sm:block" style={{ background: "rgba(255,255,255,0.08)" }} />
            <Link href="/auth">
              <Button variant="ghost" size="sm"
                className="h-7 px-3 text-xs transition-colors"
                style={{ color: "#64748b" }}
              >
                Sign in
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="sm"
                className="h-7 gap-1.5 rounded-md border-0 px-4 text-xs font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}
              >
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}