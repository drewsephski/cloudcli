import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const { customerId } = await req.json();

    if (!customerId) {
      return NextResponse.json({ error: "Customer ID is required" }, { status: 400 });
    }

    // In a real app, you would create a Stripe Billing Portal Session here:
    /*
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
    });
    return NextResponse.json({ url: session.url });
    */

    // MOCK RESPONSE FOR DEMO PURPOSES
    // We'll simulate canceling the subscription
    const usersSnapshot = await adminDb.collection("users").where("stripeCustomerId", "==", customerId).get();
    
    if (!usersSnapshot.empty) {
      const userRef = usersSnapshot.docs[0].ref;
      await userRef.update({
        subscriptionStatus: "canceled",
        updatedAt: new Date().toISOString()
      });
    }

    return NextResponse.json({ url: "/dashboard/billing?canceled=true" });

  } catch (error: any) {
    console.error("Stripe Portal Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
