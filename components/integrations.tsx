import { Cloud, Code2, Terminal, Bot, Sparkles, Workflow, Database, ShieldCheck } from "lucide-react"

export function Integrations() {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-16 text-center">
      <p className="mb-8 text-sm font-medium text-muted-foreground uppercase tracking-widest">
        Trusted by engineering teams using
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground opacity-70 grayscale transition-all hover:grayscale-0 sm:gap-12">
        <Cloud className="h-8 w-8" />
        <Database className="h-8 w-8" />
        <Terminal className="h-8 w-8" />
        <Bot className="h-8 w-8" />
        <Sparkles className="h-8 w-8" />
        <ShieldCheck className="h-8 w-8" />
        <Workflow className="h-8 w-8" />
      </div>
    </section>
  )
}
