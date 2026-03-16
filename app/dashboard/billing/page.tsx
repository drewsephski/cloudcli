"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Loader2, Check } from "lucide-react"

export default function BillingPage() {
  const { user, profile } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (priceId: string) => {
    if (!user) return
    setLoading(true)
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, userId: user.uid }),
      })
      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error("No checkout URL returned")
      }
    } catch (error) {
      console.error("Error initiating checkout:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleManageBilling = async () => {
    if (!user || !profile?.stripeCustomerId) return
    setLoading(true)
    try {
      const response = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: profile.stripeCustomerId }),
      })
      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error("No portal URL returned")
      }
    } catch (error) {
      console.error("Error initiating portal:", error)
    } finally {
      setLoading(false)
    }
  }

  const isSubscribed = profile?.subscriptionStatus === "active"

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing & Subscription</h1>
        <p className="text-muted-foreground">Manage your billing information and subscription plan.</p>
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" /> Current Plan
          </CardTitle>
          <CardDescription>View and manage your current subscription.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-6">
            <div>
              <h3 className="text-xl font-bold capitalize">{isSubscribed ? "Professional Plan" : "Free Plan"}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {isSubscribed 
                  ? "You have full access to all enterprise features." 
                  : "Upgrade to unlock unlimited environments and premium features."}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{isSubscribed ? "$29" : "$0"}</div>
              <div className="text-xs text-muted-foreground">per month</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border/50 bg-muted/20 px-6 py-4">
          {isSubscribed ? (
            <Button onClick={handleManageBilling} disabled={loading} variant="outline">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Manage Subscription
            </Button>
          ) : (
            <Button onClick={() => handleSubscribe("price_mock_pro_monthly")} disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Upgrade to Professional
            </Button>
          )}
        </CardFooter>
      </Card>

      {!isSubscribed && (
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Professional</CardTitle>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                $29<span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Up to 10 active environments</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 4 CPU cores, 8GB RAM per env</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Direct SSH & VPN access</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleSubscribe("price_mock_pro_monthly")} disabled={loading}>
                Subscribe Monthly
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary/50 bg-card/50 shadow-lg shadow-primary/10">
            <CardHeader>
              <CardTitle>Professional (Yearly)</CardTitle>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                $24<span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
              </div>
              <CardDescription>Billed $288 annually</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Everything in Monthly</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Save 17% annually</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Priority support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleSubscribe("price_mock_pro_yearly")} disabled={loading}>
                Subscribe Yearly
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
