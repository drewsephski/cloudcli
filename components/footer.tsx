import Link from "next/link"
import { Terminal, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 relative z-10">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-bold tracking-tight">CloudCLI</span>
            </Link>
            <p className="max-w-[350px] text-sm text-muted-foreground leading-relaxed">
              Enterprise-grade containerized development environments with secure access, custom subdomains, and seamless IDE integration. Available as a scalable hosted service for engineering teams.
            </p>
            <div className="flex gap-4 text-muted-foreground mt-2">
              <Link href="#" className="hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Platform</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Customers</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Sales</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Legal & Privacy</Link>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>
            Built for modern engineering teams.
          </p>
          <p>© {new Date().getFullYear()} CloudCLI Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
