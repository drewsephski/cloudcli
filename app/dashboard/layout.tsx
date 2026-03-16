"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { Terminal, User, CreditCard, ShieldAlert, LogOut, Loader2 } from "lucide-react"
import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: Terminal },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  ]

  if (profile?.role === "admin") {
    navItems.push({ name: "Admin Panel", href: "/dashboard/admin", icon: ShieldAlert })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="font-bold tracking-tight">CloudCLI</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{profile?.email}</span>
            <Button variant="ghost" size="sm" onClick={() => signOut(auth)}>
              <LogOut className="h-4 w-4 mr-2" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex max-w-screen-xl flex-1 flex-col md:flex-row">
        <aside className="w-full border-r border-border/40 md:w-64 md:flex-shrink-0">
          <nav className="flex flex-col gap-2 p-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-secondary text-foreground" 
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
