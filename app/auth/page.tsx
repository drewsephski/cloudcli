"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Terminal, ShieldCheck, Zap, ArrowRight, Loader2, Chrome } from "lucide-react"
import { auth, googleProvider } from "@/lib/firebase"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard")
      }
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
    <div className="flex min-h-screen w-full bg-background relative overflow-hidden">
      {/* Left Side - Animated Visuals */}
      <div className="hidden lg:flex w-1/2 relative bg-[#0a0c10] border-r border-border/50 flex-col justify-between p-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center space-x-2 w-fit">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Terminal className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              CloudCLI
            </span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-foreground">
              Accelerate your engineering velocity.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of enterprise teams building the future with secure, scalable, and instant cloud development environments.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 border border-border/50 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">SOC2 compliant, zero-trust architecture.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 border border-border/50 text-indigo-400">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Instant Provisioning</h3>
                <p className="text-sm text-muted-foreground">Spin up environments in milliseconds.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="relative z-10 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0a0c10] bg-muted flex items-center justify-center text-[10px] font-medium text-foreground">
                U{i}
              </div>
            ))}
          </div>
          <p>Trusted by 10,000+ developers</p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 sm:p-12 relative z-10">
        <Link href="/" className="absolute top-8 left-8 lg:hidden flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            CloudCLI
          </span>
        </Link>

        <motion.div 
          className="w-full max-w-[400px] space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to your CloudCLI workspace
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full relative overflow-hidden group bg-white text-black hover:bg-gray-100 border border-gray-200 shadow-sm"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              )}
              <span className="font-medium">Continue with Google</span>
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-border/50 hover:bg-secondary/50"
              disabled={isLoading}
            >
              <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Enterprise SSO
            </Button>
          </div>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  )
}
