import { z } from "zod";
import { suppliers } from "./mock-data";
import type { AgentQuote } from "./types";

export const quoteRequestSchema = z.object({
  intent: z.string().min(8).max(500),
  budgetLimitUsd: z.number().positive().max(1000).default(5)
});

function chooseSupplier(intent: string, budgetLimitUsd: number) {
  const lower = intent.toLowerCase();
  const preferred = suppliers.filter((supplier) => {
    if (lower.includes("data") || lower.includes("price") || lower.includes("market")) return supplier.category === "market-data";
    if (lower.includes("legal") || lower.includes("contract") || lower.includes("document")) return supplier.category === "document-review";
    return supplier.category === "inference";
  });

  return [...preferred, ...suppliers]
    .filter((supplier, index, array) => array.findIndex((item) => item.id === supplier.id) === index)
    .filter((supplier) => supplier.priceUsd <= budgetLimitUsd)
    .sort((a, b) => b.rating - a.rating || a.priceUsd - b.priceUsd)[0] ?? suppliers.sort((a, b) => a.priceUsd - b.priceUsd)[0];
}

export function createAgentQuote(input: unknown): AgentQuote {
  const { intent, budgetLimitUsd } = quoteRequestSchema.parse(input);
  const recommendation = chooseSupplier(intent, budgetLimitUsd);
  const alternatives = suppliers.filter((supplier) => supplier.id !== recommendation.id);

  return {
    requestId: `req_${Date.now().toString(36)}`,
    userIntent: intent,
    recommendation,
    alternatives,
    budgetLimitUsd,
    reasoning: [
      `Matched the request to the ${recommendation.category} supplier category.`,
      `Supplier accepts USDC settlement on Arc testnet with predictable dollar-denominated fees.`,
      `Price ${recommendation.priceUsd.toFixed(2)} USDC is within the ${budgetLimitUsd.toFixed(2)} USDC user spending limit.`,
      "Agent cannot execute until the user authorizes the payment intent."
    ],
    authorizationText: `Authorize agent to spend ${recommendation.priceUsd.toFixed(2)} USDC for ${recommendation.name} on Arc testnet.`
  };
}
