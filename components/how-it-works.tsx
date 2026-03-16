import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Smartphone, Monitor, Server } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-24 text-center">
      <div className="mb-16 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase">
          <div className="h-2 w-2 rounded-full bg-primary" />
          How it works
        </div>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Three steps to cloud-first AI development
        </h2>
        <p className="max-w-[600px] text-muted-foreground">
          No SSH tunnels. No tmux hacks. No VPN configs. Just launch and code from anywhere.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/50 bg-card/50 text-left">
          <CardHeader>
            <div className="mb-4 text-sm font-medium text-muted-foreground">01</div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Smartphone className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">Start from anywhere</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Kick off a session from your phone, browser, Linear/Jira, or API
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 text-left">
          <CardHeader>
            <div className="mb-4 text-sm font-medium text-muted-foreground">02</div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Monitor className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">Continue in your IDE</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Pick up the same session in VS Code or Cursor over SSH. All your files and changes will be there
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 text-left">
          <CardHeader>
            <div className="mb-4 text-sm font-medium text-muted-foreground">03</div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Server className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl">Agents keep running</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Sessions persist in cloud environments you can test against
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
