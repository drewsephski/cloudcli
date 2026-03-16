"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Switch } from "./ui/switch"
import { Check, Building2 } from "lucide-react"

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-24 text-center" id="pricing">
      <div className="mb-16 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase">
          <div className="h-2 w-2 rounded-full bg-primary" />
          Pricing
        </div>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Simple, usage-based pricing
        </h2>
        <p className="text-muted-foreground">
          Scale your development environments as your team grows.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <span className={`text-sm ${!isYearly ? "font-bold text-foreground" : "text-muted-foreground"}`}>Monthly</span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span className={`text-sm ${isYearly ? "font-bold text-foreground" : "text-muted-foreground"}`}>Yearly</span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Save up to 20%</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {/* Pro Plan */}
        <Card className="flex flex-col border-border/50 bg-card/50 text-left">
          <CardHeader>
            <CardTitle className="text-2xl">Professional</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              ${isYearly ? "24" : "29"}
              <span className="ml-1 text-xl font-medium text-muted-foreground">/user/mo</span>
            </div>
            <CardDescription className="mt-4 text-base">
              Perfect for growing engineering teams
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> Up to 10 active environments
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> 4 CPU cores, 8GB RAM per env
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> Direct SSH & VPN access
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> Bring your own AI models
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> Cross-device persistent sessions
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" size="lg">
              Start 14-Day Trial
            </Button>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card className="relative flex flex-col border-primary/50 bg-card/50 text-left shadow-lg shadow-primary/10">
          <div className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Recommended
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Enterprise</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
              ${isYearly ? "79" : "99"}
              <span className="ml-1 text-xl font-medium text-muted-foreground">/user/mo</span>
            </div>
            <CardDescription className="mt-4 text-base">
              For organizations requiring strict security
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 text-foreground font-medium">
                <Check className="h-4 w-4 text-primary" /> Everything in Professional, plus:
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> Unlimited active environments
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> Custom compute (up to 32 cores)
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> SOC2 & HIPAA Compliance
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> Single Sign-On (SAML/SSO)
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" /> Dedicated success manager
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Building2 className="h-4 w-4" />
        <p>
          Need custom limits or on-premise deployment? <a href="#" className="text-primary font-medium hover:underline">Contact our enterprise team.</a>
        </p>
      </div>
    </section>
  )
}
