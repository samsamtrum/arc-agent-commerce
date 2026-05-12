import type { AgentQuote, PaymentIntent, Receipt } from "./types";

export function authorizePayment(quote: AgentQuote): PaymentIntent {
  return {
    requestId: quote.requestId,
    supplierId: quote.recommendation.id,
    amountUsd: quote.recommendation.priceUsd,
    spender: quote.recommendation.wallet,
    status: "approved"
  };
}

export function executePayment(intent: PaymentIntent): Receipt {
  const digest = Buffer.from(`${intent.requestId}:${intent.supplierId}:${intent.amountUsd}`).toString("hex").slice(0, 48);

  return {
    receiptId: `rcpt_${Date.now().toString(36)}`,
    requestId: intent.requestId,
    supplier: intent.supplierId,
    amountUsdc: intent.amountUsd,
    chain: "Arc testnet",
    txHash: `0x${digest.padEnd(64, "0")}`,
    status: process.env.ARC_RPC_URL && process.env.AGENT_PRIVATE_KEY ? "settled" : "simulated",
    createdAt: new Date().toISOString()
  };
}
