import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ receipts: [], note: "Receipt persistence is intentionally mocked for the MVP demo." });
}
