export type Supplier = {
  id: string;
  name: string;
  category: string;
  priceUsd: number;
  settlement: "USDC";
  chain: "Arc testnet";
  rating: number;
  etaMinutes: number;
  wallet: string;
};

export type AgentQuote = {
  requestId: string;
  userIntent: string;
  recommendation: Supplier;
  alternatives: Supplier[];
  reasoning: string[];
  budgetLimitUsd: number;
  authorizationText: string;
};

export type PaymentIntent = {
  requestId: string;
  supplierId: string;
  amountUsd: number;
  spender: string;
  status: "pending_user_approval" | "approved" | "executed";
};

export type Receipt = {
  receiptId: string;
  requestId: string;
  supplier: string;
  amountUsdc: number;
  chain: string;
  txHash: string;
  status: "settled" | "simulated";
  createdAt: string;
};
