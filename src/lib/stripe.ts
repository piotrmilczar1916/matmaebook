/**
 * Stripe Checkout integration placeholder.
 *
 * Setup:
 * 1. npm install stripe
 * 2. Add STRIPE_SECRET_KEY and STRIPE_PRICE_ID to .env.local
 * 3. Uncomment implementation in createCheckoutSession
 */

export type CheckoutPayload = {
  priceId?: string;
  successUrl: string;
  cancelUrl: string;
};

export async function createCheckoutSession(
  payload: CheckoutPayload,
): Promise<{ url: string }> {
  const priceId = payload.priceId ?? process.env.STRIPE_PRICE_ID;

  if (!process.env.STRIPE_SECRET_KEY || !priceId) {
    // Development fallback — replace with real Stripe session in production
    console.warn(
      "[stripe] Missing STRIPE_SECRET_KEY or STRIPE_PRICE_ID. Checkout not configured.",
    );
    return { url: payload.cancelUrl };
  }

  // Uncomment when stripe package is installed:
  //
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  //   apiVersion: "2025-02-24.acacia",
  // });
  //
  // const session = await stripe.checkout.sessions.create({
  //   mode: "payment",
  //   line_items: [{ price: priceId, quantity: 1 }],
  //   success_url: payload.successUrl,
  //   cancel_url: payload.cancelUrl,
  // });
  //
  // if (!session.url) throw new Error("Failed to create checkout session");
  // return { url: session.url };

  void priceId;
  return { url: payload.cancelUrl };
}
