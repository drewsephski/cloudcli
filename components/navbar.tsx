import Link from "next/link"
import { Button } from "./ui/button"
import { Moon, Sun, Terminal, ShieldCheck } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="hidden font-bold tracking-tight sm:inline-block">
              CloudCLI
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Platform
            </Link>
            <Link
              href="#pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Enterprise
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden h-8 gap-2 sm:flex text-muted-foreground hover:text-foreground">
              <ShieldCheck className="h-4 w-4" />
              <span>SOC2 Compliant</span>
            </Button>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <Link href="/auth">
              <Button variant="ghost" size="sm" className="h-8">
                Sign In
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="sm" className="h-8 shadow-md shadow-primary/20">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
