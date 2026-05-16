import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000";

    const session = await createCheckoutSession({
      successUrl: `${origin}/?success=true`,
      cancelUrl: `${origin}/?canceled=true`,
    });

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        {
          error:
            "Płatności nie są jeszcze skonfigurowane. Dodaj klucze Stripe w .env.local.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout]", error);
    return NextResponse.json(
      { error: "Nie udało się utworzyć sesji płatności." },
      { status: 500 },
    );
  }
}
