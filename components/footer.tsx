"use client";

import Link from "next/link"
import { Twitter, Linkedin, Mail } from "lucide-react"

const NAV = {
  Platform: ["Features", "Security", "Pricing", "Customers"],
  Company:  ["About Us", "Careers", "Contact Sales", "Legal & Privacy"],
}

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "#02040a",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="container mx-auto max-w-screen-xl px-5 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1.6" />
                <rect x="8" y="8" width="8" height="8" rx="1.5" transform="rotate(45 12 12)" stroke="#f8fafc" strokeWidth="1" opacity="0.3" />
              </svg>
              <span className="font-syne text-sm font-bold tracking-tight" style={{ color: "#f8fafc" }}>CloudCLI</span>
            </Link>
            <p className="max-w-[320px] text-xs leading-[1.75]" style={{ color: "#475569" }}>
              Enterprise-grade containerised development environments with secure access,
              custom subdomains, and seamless IDE integration. Available as a scalable hosted
              service for engineering teams.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Mail].map((Icon, i) => (
                <Link key={i} href="#"
                  className="rounded-md border p-2 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.07)", color: "#334155" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)" }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#334155"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)" }}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(NAV).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-3">
              <p className="font-syne text-xs font-semibold tracking-tight" style={{ color: "#e2e8f0" }}>{heading}</p>
              {links.map((label) => (
                <Link key={label} href="#"
                  className="text-xs transition-colors"
                  style={{ color: "#475569" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs md:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.05)", color: "#334155" }}>
          <p>Built for modern engineering teams.</p>
          <p>© {new Date().getFullYear()} CloudCLI Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}