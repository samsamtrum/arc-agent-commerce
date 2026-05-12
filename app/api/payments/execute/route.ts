import { NextResponse } from "next/server";
import { executePayment } from "@/lib/payments";

export async function POST(request: Request) {
  const { paymentIntent } = await request.json();
  if (!paymentIntent?.requestId) return NextResponse.json({ error: "Missing paymentIntent" }, { status: 400 });
  return NextResponse.json(executePayment(paymentIntent));
}
