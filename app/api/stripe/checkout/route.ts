import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const { priceId, userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Get user from Firestore
    const userRef = adminDb.collection("users").doc(userId);
    const userDoc = await userRef.get();
    
    if (!userDoc.exists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userData = userDoc.data();
    let customerId = userData?.stripeCustomerId;

    // If no Stripe customer exists, create one
    if (!customerId) {
      try {
        const customer = await stripe.customers.create({
          email: userData?.email,
          metadata: {
            firebaseUID: userId,
          },
        });
        customerId = customer.id;
        await userRef.update({ stripeCustomerId: customerId });
      } catch (stripeError: any) {
        console.warn("Stripe API key missing or invalid, skipping customer creation:", stripeError.message);
        customerId = `mock_cus_${userId}`;
        await userRef.update({ stripeCustomerId: customerId });
      }
    }

    // Since we don't have real Stripe products configured in this demo environment,
    // we'll simulate a successful checkout redirect by returning a mock URL.
    // In a real app, you would create a Stripe Checkout Session here:
    /*
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?canceled=true`,
      metadata: { firebaseUID: userId },
    });
    return NextResponse.json({ url: session.url });
    */

    // MOCK RESPONSE FOR DEMO PURPOSES
    // We'll just update the user's subscription status directly to simulate a successful payment
    await userRef.update({
      subscriptionStatus: "active",
      subscriptionPriceId: priceId,
      updatedAt: new Date().toISOString()
    });

    // Redirect back to billing
    return NextResponse.json({ url: "/dashboard/billing?success=true" });

  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
