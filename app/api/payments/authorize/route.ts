import { NextResponse } from "next/server";
import { authorizePayment } from "@/lib/payments";

export async function POST(request: Request) {
  const { quote } = await request.json();
  if (!quote?.recommendation) return NextResponse.json({ error: "Missing quote" }, { status: 400 });
  return NextResponse.json(authorizePayment(quote));
}
