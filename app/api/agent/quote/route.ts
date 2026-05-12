import { NextResponse } from "next/server";
import { createAgentQuote } from "@/lib/agent";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json(createAgentQuote(body));
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}
