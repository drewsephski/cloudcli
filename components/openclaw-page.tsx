'use client'

import React from 'react'

export function OpenClawPage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f0f0f0] overflow-x-hidden">
      {/* Background blobs */}
      <div className="fixed w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 bg-gradient-to-r from-[rgba(232,255,71,0.06)] to-transparent top-[-100px] left-1/2 -translate-x-1/2"></div>
      <div className="fixed w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 bg-gradient-to-r from-[rgba(0,212,255,0.05)] to-transparent bottom-[100px] right-[-100px]"></div>
      
      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-50" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`
        }}>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-[100] h-[60px] bg-[rgba(8,8,8,0.85)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.07)] flex items-center justify-between px-5">
        <div className="flex items-center gap-[10px]">
          <div className="relative w-[28px] h-[28px]">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[28px] h-[28px]">
              <rect x="7" y="7" width="14" height="14" rx="2" transform="rotate(45 14 14)" stroke="white" strokeWidth="1.8"/>
              <rect x="10" y="10" width="8" height="8" rx="1" transform="rotate(45 14 14)" stroke="white" strokeWidth="1.2" opacity="0.5"/>
            </svg>
          </div>
          <span className="font-syne font-bold text-[15px] tracking-[-0.02em] text-[#f0f0f0]">OpenClaw</span>
        </div>
        <button className="bg-[#e8ff47] text-black border-none px-5 py-[9px] rounded-full font-dm-sans font-medium text-[13px] cursor-pointer transition-all duration-200 tracking-[-0.01em] hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(232,255,71,0.18)]">
          Lock in $3.99/mo →
        </button>
      </nav>

      {/* Main content */}
      <main className="relative z-[1] max-w-[460px] mx-auto px-6 py-16 pb-20">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(232,255,71,0.08)] border border-[rgba(232,255,71,0.2)] rounded-full px-[14px] py-[5px] pl-2 text-[11px] font-medium text-[#e8ff47] tracking-[0.04em] uppercase mb-7 animate-fadeSlideUp">
          <div className="w-[6px] h-[6px] bg-[#e8ff47] rounded-full animate-pulse"></div>
          Founding batch · 287 spots remaining
        </div>

        {/* Hero */}
        <div className="text-left animate-fadeSlideUp animation-delay-100">
          <h1 className="font-syne font-black text-[clamp(34px,9vw,44px)] leading-[1.05] tracking-[-0.03em] text-white mb-5">
            Your own AI<br/>
            workspace —<br/>
            live in <span className="inline-block bg-[#e8ff47] text-black rounded-lg px-[10px] py-[2px] text-[0.88em] align-middle relative top-[-3px] font-black">60 sec</span>
          </h1>
          <p className="text-[15px] text-[#888] leading-[1.6] font-light mb-8 max-w-[360px]">
            A private OpenClaw instance with full terminal access, zero configuration, and every major AI provider connected out of the box.
          </p>
        </div>

        {/* Scarcity block */}
        <div className="bg-[#181818] border border-[rgba(255,255,255,0.14)] rounded-2xl p-5 mb-7 animate-fadeSlideUp animation-delay-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[12px] text-[#888] font-normal">Founding member pricing</span>
            <span className="font-syne text-[12px] font-bold text-[#f0f0f0]">713 / 1,000 claimed</span>
          </div>
          <div className="h-[5px] bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden mb-[10px]">
            <div className="h-full w-[71.3%] bg-gradient-to-r from-[#e8ff47] to-[#b8ff00] rounded-full animate-fillBar origin-left"></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[12px] text-[#888]"><strong className="text-[#f0f0f0] font-medium">287 spots</strong> left at $3.99/mo</span>
            <span className="text-[11px] text-[#5a5a5a] text-right">Then $9.99/mo for new signups</span>
          </div>
        </div>

        {/* Feature strip */}
        <div className="flex gap-[6px] mb-12 flex-wrap animate-fadeSlideUp animation-delay-350">
          <div className="text-[11px] text-[#5a5a5a] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-md px-[10px] py-[5px] flex items-center gap-[5px]">
            <div className="w-[4px] h-[4px] bg-[#e8ff47] rounded-full"></div>
            Full terminal access
          </div>
          <div className="text-[11px] text-[#5a5a5a] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-md px-[10px] py-[5px] flex items-center gap-[5px]">
            <div className="w-[4px] h-[4px] bg-[#e8ff47] rounded-full"></div>
            Shared infrastructure
          </div>
          <div className="text-[11px] text-[#5a5a5a] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-md px-[10px] py-[5px] flex items-center gap-[5px]">
            <div className="w-[4px] h-[4px] bg-[#e8ff47] rounded-full"></div>
            Cancel anytime
          </div>
          <div className="text-[11px] text-[#5a5a5a] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-md px-[10px] py-[5px] flex items-center gap-[5px]">
            <div className="w-[4px] h-[4px] bg-[#e8ff47] rounded-full"></div>
            Money-back guarantee
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-start gap-3 mb-[60px] animate-fadeSlideUp animation-delay-300">
          <button className="flex items-center gap-[10px] bg-[#e8ff47] text-black border-none px-7 py-[14px] rounded-full font-syne font-bold text-[15px] cursor-pointer transition-all duration-200 tracking-[-0.01em] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(232,255,71,0.18)]">
            Claim your $3.99/mo spot
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="text-[12px] text-[#5a5a5a] flex items-center gap-[6px]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
              <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" stroke="#5a5a5a" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            No credit card required · Instant setup · Cancel at any time
          </div>
        </div>

        {/* Providers section */}
        <div className="mb-11 animate-fadeSlideUp animation-delay-400">
          <div className="flex items-center gap-[14px] mb-5">
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]"></div>
            <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#5a5a5a] whitespace-nowrap">Bring your key</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]"></div>
          </div>

          <div className="flex gap-[10px] flex-wrap">
            {/* Claude */}
            <div className="flex items-center gap-2 bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] pl-2 transition-all duration-200 cursor-pointer hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5">
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#D97757"/>
                  <path d="M7.2 13.5L10 7L12.8 13.5H11.6L10 9.8L8.4 13.5H7.2Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[12px] font-normal text-[#888]">Claude</span>
            </div>

            {/* OpenAI */}
            <div className="flex items-center gap-2 bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] pl-2 transition-all duration-200 cursor-pointer hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5">
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                  <path d="M10 4.5C7 4.5 4.5 7 4.5 10C4.5 10.9 4.73 11.75 5.13 12.5L4.5 15.5L7.5 14.87C8.25 15.27 9.1 15.5 10 15.5C13 15.5 15.5 13 15.5 10C15.5 7 13 4.5 10 4.5Z" stroke="white" strokeWidth="1.2" fill="none"/>
                  <circle cx="10" cy="10" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-[12px] font-normal text-[#888]">OpenAI</span>
            </div>

            {/* Gemini */}
            <div className="flex items-center gap-2 bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] pl-2 transition-all duration-200 cursor-pointer hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5">
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#1a73e8"/>
                  <path d="M10 4C10 4 11.5 8.5 16 10C11.5 11.5 10 16 10 16C10 16 8.5 11.5 4 10C8.5 8.5 10 4 10 4Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[12px] font-normal text-[#888]">Gemini</span>
            </div>

            {/* Grok */}
            <div className="flex items-center gap-2 bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] pl-2 transition-all duration-200 cursor-pointer hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5">
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#111"/>
                  <path d="M6 5.5L10.5 10L6 14.5H8L12.5 10L8 5.5H6Z" fill="white"/>
                  <path d="M10 5.5L14.5 10L10 14.5H12L16 10L12 5.5H10Z" fill="white" opacity="0.5"/>
                </svg>
              </div>
              <span className="text-[12px] font-normal text-[#888]">Grok</span>
            </div>

            {/* More */}
            <div className="flex items-center gap-[6px] bg-transparent border border-dashed border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] text-[12px] text-[#5a5a5a]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="3" cy="6" r="1" fill="#5a5a5a"/>
                <circle cx="6" cy="6" r="1" fill="#5a5a5a"/>
                <circle cx="9" cy="6" r="1" fill="#5a5a5a"/>
              </svg>
              any provider
            </div>
          </div>
        </div>

        {/* Platforms section */}
        <div className="animate-fadeSlideUp animation-delay-500">
          <div className="flex items-center gap-[14px] mb-5">
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]"></div>
            <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#5a5a5a] whitespace-nowrap">Works inside</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]"></div>
          </div>

          <div className="flex gap-[10px] flex-wrap">
            {/* Telegram */}
            <div className="flex items-center gap-2 bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] pl-2 transition-all duration-200 cursor-pointer hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5">
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#229ED9"/>
                  <path d="M4.5 9.8L15.5 5.5L13 14.5L9.5 11.5L7.5 13.5V10.5L13.5 6.5L7 10.5L4.5 9.8Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[12px] font-normal text-[#888]">Telegram</span>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-2 bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] pl-2 transition-all duration-200 cursor-pointer hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5">
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#25D366"/>
                  <path d="M10 4C6.69 4 4 6.69 4 10C4 11.07 4.29 12.07 4.79 12.93L4 16L7.18 15.22C8.02 15.69 8.98 15.97 10 15.97C13.31 15.97 16 13.28 16 9.97C16 6.69 13.31 4 10 4ZM13 12.5C12.8 13 11.9 13.45 11.5 13.5C10.9 13.55 10.37 13.33 9.85 13.1C8.1 12.3 7 10.55 6.9 10.4C6.8 10.25 6.2 9.45 6.2 8.62C6.2 7.78 6.65 7.38 6.82 7.18C6.99 6.98 7.2 6.93 7.33 6.93C7.46 6.93 7.59 6.93 7.7 6.94C7.82 6.95 7.98 6.89 8.14 7.27C8.3 7.66 8.67 8.5 8.72 8.6C8.77 8.7 8.8 8.82 8.73 8.95C8.66 9.08 8.62 9.16 8.52 9.28C8.42 9.4 8.31 9.54 8.22 9.63C8.12 9.73 8.01 9.84 8.13 10.04C8.25 10.24 8.67 10.92 9.29 11.47C10.09 12.18 10.77 12.4 10.97 12.5C11.17 12.6 11.28 12.58 11.4 12.44C11.52 12.3 11.92 11.83 12.06 11.63C12.2 11.43 12.34 11.46 12.53 11.53C12.72 11.6 13.56 12.02 13.76 12.12C13.96 12.22 14.1 12.27 14.15 12.35C14.2 12.45 14.2 12.95 14 13.45L13 12.5Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[12px] font-normal text-[#888]">WhatsApp</span>
            </div>

            {/* Discord */}
            <div className="flex items-center gap-2 bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] pl-2 transition-all duration-200 cursor-pointer hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5">
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#5865F2"/>
                  <path d="M13.5 6.5C12.75 6.13 11.93 5.88 11.08 5.75C10.97 5.95 10.84 6.2 10.75 6.4C9.84 6.27 8.95 6.27 8.06 6.4C7.97 6.2 7.83 5.95 7.72 5.75C6.87 5.88 6.05 6.14 5.3 6.5C3.74 8.83 3.33 11.1 3.53 13.35C4.56 14.1 5.55 14.55 6.53 14.85C6.76 14.54 6.97 14.2 7.15 13.85C6.8 13.72 6.46 13.56 6.15 13.37C6.24 13.3 6.32 13.24 6.4 13.17C8.4 14.11 10.62 14.11 12.6 13.17C12.68 13.24 12.77 13.3 12.85 13.37C12.54 13.56 12.2 13.72 11.85 13.85C12.03 14.2 12.24 14.54 12.47 14.85C13.45 14.55 14.45 14.1 15.47 13.35C15.7 10.77 15.06 8.52 13.5 6.5ZM7.9 11.93C7.28 11.93 6.78 11.37 6.78 10.69C6.78 10.01 7.27 9.45 7.9 9.45C8.53 9.45 9.03 10.01 9.02 10.69C9.02 11.37 8.52 11.93 7.9 11.93ZM12.1 11.93C11.48 11.93 10.98 11.37 10.98 10.69C10.98 10.01 11.47 9.45 12.1 9.45C12.73 9.45 13.23 10.01 13.22 10.69C13.22 11.37 12.73 11.93 12.1 11.93Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[12px] font-normal text-[#888]">Discord</span>
            </div>

            {/* Slack */}
            <div className="flex items-center gap-2 bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] pl-2 transition-all duration-200 cursor-pointer hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-0.5">
              <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4A154B"/>
                  <rect x="7.5" y="4" width="2" height="5" rx="1" fill="#E01E5A"/>
                  <rect x="7.5" y="4" width="2" height="2" rx="1" fill="#E01E5A" transform="rotate(90 7.5 6)"/>
                  <rect x="10.5" y="11" width="2" height="5" rx="1" fill="#2EB67D"/>
                  <rect x="10.5" y="11" width="2" height="2" rx="1" fill="#2EB67D" transform="rotate(90 10.5 13)"/>
                  <rect x="4" y="10.5" width="5" height="2" rx="1" fill="#36C5F0"/>
                  <rect x="4" y="10.5" width="2" height="2" rx="1" fill="#36C5F0" transform="rotate(90 6 10.5)"/>
                  <rect x="11" y="7.5" width="5" height="2" rx="1" fill="#ECB22E"/>
                  <rect x="11" y="7.5" width="2" height="2" rx="1" fill="#ECB22E" transform="rotate(90 13 7.5)"/>
                </svg>
              </div>
              <span className="text-[12px] font-normal text-[#888]">Slack</span>
            </div>

            {/* More */}
            <div className="flex items-center gap-[6px] bg-transparent border border-dashed border-[rgba(255,255,255,0.07)] rounded-full px-[14px] py-[7px] text-[12px] text-[#5a5a5a]">
              + 850 more apps
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fillBar {
          from { width: 0%; }
          to { width: 71.3%; }
        }

        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.6s ease both;
        }

        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-350 { animation-delay: 0.35s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }

        .animate-fillBar {
          animation: fillBar 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .font-syne {
          font-family: 'Syne', sans-serif;
        }

        .font-dm-sans {
          font-family: 'DM Sans', sans-serif;
        }

        .tracking-\\[-0\\.02em\\] {
          letter-spacing: -0.02em;
        }

        .tracking-\\[-0\\.01em\\] {
          letter-spacing: -0.01em;
        }

        .tracking-\\[0\\.04em\\] {
          letter-spacing: 0.04em;
        }

        .tracking-\\[0\\.1em\\] {
          letter-spacing: 0.1em;
        }

        .backdrop-blur-\\[20px\\] {
          backdrop-filter: blur(20px);
        }

        .blur-\\[120px\\] {
          filter: blur(120px);
        }

        .rounded-2xl {
          border-radius: 16px;
        }

        .rounded-md {
          border-radius: 6px;
        }

        .rounded-lg {
          border-radius: 8px;
        }

        .rounded-full {
          border-radius: 9999px;
        }

        .z-\\[1\\] {
          z-index: 1;
        }

        .z-\\[100\\] {
          z-index: 100;
        }

        .z-0 {
          z-index: 0;
        }

        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .px-5 {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

        .px-7 {
          padding-left: 1.75rem;
          padding-right: 1.75rem;
        }

        .px-2 {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .px-\\[14px\\] {
          padding-left: 14px;
          padding-right: 14px;
        }

        .px-\\[10px\\] {
          padding-left: 10px;
          padding-right: 10px;
        }

        .py-16 {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        .py-\\[5px\\] {
          padding-top: 5px;
          padding-bottom: 5px;
        }

        .py-\\[7px\\] {
          padding-top: 7px;
          padding-bottom: 7px;
        }

        .py-\\[14px\\] {
          padding-top: 14px;
          padding-bottom: 14px;
        }

        .py-\\[2px\\] {
          padding-top: 2px;
          padding-bottom: 2px;
        }

        .py-\\[9px\\] {
          padding-top: 9px;
          padding-bottom: 9px;
        }

        .py-\\[5px\\] {
          padding-top: 5px;
          padding-bottom: 5px;
        }

        .pl-2 {
          padding-left: 0.5rem;
        }

        .pb-20 {
          padding-bottom: 5rem;
        }

        .mb-5 {
          margin-bottom: 1.25rem;
        }

        .mb-7 {
          margin-bottom: 1.75rem;
        }

        .mb-8 {
          margin-bottom: 2rem;
        }

        .mb-3 {
          margin-bottom: 0.75rem;
        }

        .mb-\\[10px\\] {
          margin-bottom: 10px;
        }

        .mb-11 {
          margin-bottom: 2.75rem;
        }

        .mb-12 {
          margin-bottom: 3rem;
        }

        .mb-\\[60px\\] {
          margin-bottom: 60px;
        }

        .gap-2 {
          gap: 0.5rem;
        }

        .gap-\\[10px\\] {
          gap: 10px;
        }

        .gap-\\[6px\\] {
          gap: 6px;
        }

        .gap-\\[5px\\] {
          gap: 5px;
        }

        .gap-\\[14px\\] {
          gap: 14px;
        }

        .gap-\\[10px\\] {
          gap: 10px;
        }

        .gap-\\[6px\\] {
          gap: 6px;
        }

        .h-px {
          height: 1px;
        }

        .h-\\[5px\\] {
          height: 5px;
        }

        .h-\\[60px\\] {
          height: 60px;
        }

        .h-\\[28px\\] {
          height: 28px;
        }

        .w-\\[500px\\] {
          width: 500px;
        }

        .w-\\[400px\\] {
          width: 400px;
        }

        .w-\\[28px\\] {
          width: 28px;
        }

        .w-\\[20px\\] {
          width: 20px;
        }

        .w-\\[6px\\] {
          width: 6px;
        }

        .w-\\[4px\\] {
          width: 4px;
        }

        .w-\\[460px\\] {
          width: 460px;
        }

        .w-\\[360px\\] {
          width: 360px;
        }

        .w-\\[71\\.3%\\] {
          width: 71.3%;
        }

        .w-\\[12px\\] {
          width: 12px;
        }

        .w-\\[16px\\] {
          width: 16px;
        }

        .flex-1 {
          flex: 1;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
        }

        .flex-grow {
          flex-grow: 1;
        }

        .flex-wrap {
          flex-wrap: wrap;
        }

        .flex-col {
          flex-direction: column;
        }

        .flex-row {
          flex-direction: row;
        }

        .items-start {
          align-items: flex-start;
        }

        .items-center {
          align-items: center;
        }

        .justify-center {
          justify-content: center;
        }

        .justify-between {
          justify-content: space-between;
        }

        .justify-end {
          justify-content: flex-end;
        }

        .justify-start {
          justify-content: flex-start;
        }

        .text-left {
          text-align: left;
        }

        .text-right {
          text-align: right;
        }

        .text-center {
          text-align: center;
        }

        .text-\\[clamp\\(34px\\,9vw\\,44px\\)\\] {
          font-size: clamp(34px, 9vw, 44px);
        }

        .text-\\[15px\\] {
          font-size: 15px;
        }

        .text-\\[12px\\] {
          font-size: 12px;
        }

        .text-\\[11px\\] {
          font-size: 11px;
        }

        .text-\\[10px\\] {
          font-size: 10px;
        }

        .text-\\[0\\.88em\\] {
          font-size: 0.88em;
        }

        .text-\\[13px\\] {
          font-size: 13px;
        }

        .font-black {
          font-weight: 800;
        }

        .font-bold {
          font-weight: 700;
        }

        .font-medium {
          font-weight: 500;
        }

        .font-normal {
          font-weight: 400;
        }

        .font-light {
          font-weight: 300;
        }

        .leading-\\[1\\.05\\] {
          line-height: 1.05;
        }

        .leading-\\[1\\.6\\] {
          line-height: 1.6;
        }

        .bg-\\[\\#080808\\] {
          background-color: #080808;
        }

        .bg-\\[\\#181818\\] {
          background-color: #181818;
        }

        .bg-\\[rgba\\(232\\,255\\,71\\,0\\.08\\)\\] {
          background-color: rgba(232,255,71,0.08);
        }

        .bg-\\[rgba\\(255\\,255\\,255\\,0\\.03\\)\\] {
          background-color: rgba(255,255,255,0.03);
        }

        .bg-\\[rgba\\(255\\,255\\,255\\,0\\.04\\)\\] {
          background-color: rgba(255,255,255,0.04);
        }

        .bg-\\[rgba\\(8\\,8\\,8\\,0\\.85\\)\\] {
          background-color: rgba(8,8,8,0.85);
        }

        .bg-\\[\\#e8ff47\\] {
          background-color: #e8ff47;
        }

        .bg-transparent {
          background-color: transparent;
        }

        .text-\\[\\#f0f0f0\\] {
          color: #f0f0f0;
        }

        .text-\\[\\#e8ff47\\] {
          color: #e8ff47;
        }

        .text-\\[\\#888\\] {
          color: #888;
        }

        .text-\\[\\#5a5a5a\\] {
          color: #5a5a5a;
        }

        .text-\\[\\#b8ff00\\] {
          color: #b8ff00;
        }

        .text-black {
          color: black;
        }

        .text-white {
          color: white;
        }

        .border {
          border-width: 1px;
        }

        .border-b {
          border-bottom-width: 1px;
        }

        .border-\\[rgba\\(255\\,255\\,255\\,0\\.07\\)\\] {
          border-color: rgba(255,255,255,0.07);
        }

        .border-\\[rgba\\(255\\,255\\,255\\,0\\.14\\)\\] {
          border-color: rgba(255,255,255,0.14);
        }

        .border-\\[rgba\\(232\\,255\\,71\\,0\\.2\\)\\] {
          border-color: rgba(232,255,71,0.2);
        }

        .border-\\[\\#333\\] {
          border-color: #333;
        }

        .border-dashed {
          border-style: dashed;
        }

        .border-none {
          border-style: none;
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .cursor-default {
          cursor: default;
        }

        .overflow-x-hidden {
          overflow-x: hidden;
        }

        .overflow-hidden {
          overflow: hidden;
        }

        .relative {
          position: relative;
        }

        .absolute {
          position: absolute;
        }

        .fixed {
          position: fixed;
        }

        .sticky {
          position: sticky;
        }

        .static {
          position: static;
        }

        .top-0 {
          top: 0;
        }

        .top-\\[-100px\\] {
          top: -100px;
        }

        .top-\\[-3px\\] {
          top: -3px;
        }

        .bottom-\\[100px\\] {
          bottom: 100px;
        }

        .right-\\[-100px\\] {
          right: -100px;
        }

        .left-1\\/2 {
          left: 50%;
        }

        .inset-0 {
          inset: 0;
        }

        .transform {
          transform: translateX(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .-translate-x-1\\/2 {
          --tw-translate-x: -50%;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .-translate-y-0\\.5 {
          --tw-translate-y: -0.125rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .translate-x-0\\.5 {
          --tw-translate-x: 0.125rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .scale-\\[1\\.03\\] {
          --tw-scale-x: 1.03;
          --tw-scale-y: 1.03;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .origin-left {
          transform-origin: left;
        }

        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        .duration-200 {
          transition-duration: 200ms;
        }

        .duration-\\[200ms\\] {
          transition-duration: 200ms;
        }

        .ease {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ease-in-out {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover\\:scale-\\[1\\.03\\]:hover {
          --tw-scale-x: 1.03;
          --tw-scale-y: 1.03;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .hover\\:-translate-y-0\\.5:hover {
          --tw-translate-y: -0.125rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .hover\\:translate-x-0\\.5:hover {
          --tw-translate-x: 0.125rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .hover\\:border-\\[rgba\\(255\\,255\\,255\\,0\\.14\\)\\]:hover {
          border-color: rgba(255,255,255,0.14);
        }

        .hover\\:bg-\\[rgba\\(255\\,255\\,255\\,0\\.04\\)\\]:hover {
          background-color: rgba(255,255,255,0.04);
        }

        .hover\\:shadow-\\[0_0_24px_rgba\\(232\\,255\\,71\\,0\\.18\\)\\]:hover {
          box-shadow: 0 0 24px rgba(232,255,71,0.18);
        }

        .hover\\:shadow-\\[0_8px_40px_rgba\\(232\\,255\\,71\\,0\\.18\\)\\]:hover {
          box-shadow: 0 8px 40px rgba(232,255,71,0.18);
        }

        .group:hover .group-hover\\:translate-x-0\\.5 {
          --tw-translate-x: 0.125rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        @media (min-width: 640px) {
          .sm\\:text-\\[16px\\] {
            font-size: 16px;
          }
        }

        @media (min-width: 768px) {
          .md\\:text-\\[18px\\] {
            font-size: 18px;
          }
        }

        @media (min-width: 1024px) {
          .lg\\:text-\\[20px\\] {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  )
}
