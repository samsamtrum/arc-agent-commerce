import type { Supplier } from "./types";

export const suppliers: Supplier[] = [
  {
    id: "gpu-mini",
    name: "Gulf GPU Mini",
    category: "inference",
    priceUsd: 0.42,
    settlement: "USDC",
    chain: "Arc testnet",
    rating: 4.7,
    etaMinutes: 1,
    wallet: "0x1111111111111111111111111111111111111111"
  },
  {
    id: "data-oasis",
    name: "Data Oasis API",
    category: "market-data",
    priceUsd: 1.2,
    settlement: "USDC",
    chain: "Arc testnet",
    rating: 4.8,
    etaMinutes: 2,
    wallet: "0x2222222222222222222222222222222222222222"
  },
  {
    id: "agent-legal-lite",
    name: "Agent Legal Lite",
    category: "document-review",
    priceUsd: 2.5,
    settlement: "USDC",
    chain: "Arc testnet",
    rating: 4.5,
    etaMinutes: 4,
    wallet: "0x3333333333333333333333333333333333333333"
  }
];
