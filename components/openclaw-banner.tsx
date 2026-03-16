"use client"

import { motion } from "motion/react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowRight, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"

export function OpenClawBanner() {
  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 md:p-12 backdrop-blur-sm">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
          
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Featured badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm font-medium border-blue-500/30 bg-blue-500/10 text-blue-300">
                <Zap className="h-4 w-4" />
                NEW FEATURE
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h2 
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Now Integrated with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                OpenClaw Hosting
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Get your own OpenClaw instance for just $3.99/month. Full terminal access, no setup required, and live in 60 seconds.
            </motion.p>

            {/* Feature highlights */}
            <motion.div 
              className="mb-8 flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-foreground">287 spots left at $3.99/mo</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-foreground">Limited time pricing</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href="/openclaw">
                <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Claim Your $3.99/mo Spot <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 border-border/60 hover:bg-secondary/50">
                Learn More
              </Button>
            </motion.div>

            {/* Small trust indicator */}
            <motion.p 
              className="mt-6 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Cancel anytime • Shared infrastructure • Money-back guarantee
            </motion.p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 h-20 w-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
          <div className="absolute bottom-4 left-4 h-16 w-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
        </div>
      </div>
    </motion.section>
  )
}
