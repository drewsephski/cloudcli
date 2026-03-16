import { Card } from "./ui/card"
import { ArrowRight, Terminal, Bot, Sparkles, Code2, Users, Share2, Key, Database } from "lucide-react"

export function Features() {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-24" id="features">
      {/* Feature 1 */}
      <div className="mb-32 grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase">
            <div className="h-2 w-2 rounded-full bg-primary" />
            Session Continuity
          </div>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Start on your phone, continue in VS Code
          </h2>
          <p className="text-lg text-muted-foreground">
            One session, any device. Kick off a coding task from your phone while commuting, then pick up the exact same session in your IDE when you reach your desk. The environment keeps running. Your context stays intact.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="flex w-full max-w-md items-center justify-between gap-4 rounded-xl border border-border/50 bg-card/50 p-6 shadow-2xl">
            <div className="flex h-48 w-24 flex-col rounded-lg border border-border/50 bg-background shadow-inner">
              <div className="h-4 w-full border-b border-border/50 bg-muted/50" />
              <div className="flex-1 p-2 text-[8px] font-mono text-blue-400">
                $ cloudcli<br />
                <span className="text-gray-500">running...</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <ArrowRight className="h-6 w-6" />
              <span className="text-xs">Same session</span>
            </div>
            <div className="flex h-48 w-48 flex-col rounded-lg border border-border/50 bg-background shadow-inner">
              <div className="flex h-4 w-full items-center gap-1 border-b border-border/50 bg-muted/50 px-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50" />
                <div className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 p-2 text-[8px] font-mono text-blue-400">
                $ cloudcli attach<br />
                <span className="text-gray-500">connected.</span><br />
                <span className="text-green-400">auth.ts *</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="mb-32 grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Card className="border-border/50 bg-card/50 p-8">
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
                <Database className="h-8 w-8" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background p-4">
                <Bot className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium">Claude Code</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background p-4">
                <Terminal className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Cursor CLI</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background p-4">
                <Code2 className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Codex</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background p-4">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium">Gemini CLI</span>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Your API key. Your choice.
            </p>
          </Card>
        </div>
        <div className="order-1 md:order-2">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase">
            <div className="h-2 w-2 rounded-full bg-primary" />
            Agent Agnostic
          </div>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Bring your own agent, bring your own key
          </h2>
          <p className="text-lg text-muted-foreground">
            Claude Code, Cursor CLI, Codex, Gemini. Use whichever AI coding agent you prefer. CloudCLI provides the persistent environments, cross-device access, and a real UI. No lock-in.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase">
            <div className="h-2 w-2 rounded-full bg-primary" />
            Built for teams
          </div>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Share environments, context, and configurations
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop copying .env files and context docs. Share environments, MCP servers, and configurations across your team. Everyone starts with the same setup. Onboard new developers in minutes.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <Card className="w-full max-w-md border-border/50 bg-card/50 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-4">
                <div className="flex items-center gap-3">
                  <Terminal className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Environment</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">node-24-dev</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-4">
                <div className="flex items-center gap-3">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">MCP Servers</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">github, linear, slack</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-4">
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Context Files</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">CLAUDE.md, .cursorrules</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-4">
                <div className="flex items-center gap-3">
                  <Key className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">API Keys</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">Encrypted & shared</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-card bg-muted text-[10px]">A</div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-card bg-muted text-[10px]">B</div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-card bg-muted text-[10px]">C</div>
              </div>
              <span>Team synced</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
