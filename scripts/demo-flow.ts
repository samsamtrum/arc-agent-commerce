import { createAgentQuote } from "../lib/agent";
import { authorizePayment, executePayment } from "../lib/payments";

const quote = createAgentQuote({
  intent: "Find a market data API and pay in USDC if under 2 USDC.",
  budgetLimitUsd: 2
});
const paymentIntent = authorizePayment(quote);
const receipt = executePayment(paymentIntent);

console.log(JSON.stringify({ quote, paymentIntent, receipt }, null, 2));
