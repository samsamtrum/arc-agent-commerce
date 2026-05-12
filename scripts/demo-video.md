# Demo Video Script (1-2 minutes)

## Scene 1 — Problem (0:00-0:15)

"AI agents can already research, compare, and choose services. But they still need a safe way to pay suppliers without unlimited wallet access."

Show: landing hero.

## Scene 2 — User request (0:15-0:35)

"In Arc Agent Commerce, the user gives the agent a task and a strict USDC budget."

Type or show:

> Find the cheapest inference API to summarize a supplier contract, pay only if under 3 USDC.

Click **Ask agent for quote**.

## Scene 3 — Agent decision (0:35-0:55)

"The agent selects a supplier, explains the decision, confirms the supplier accepts USDC on Arc, and prepares an authorization text."

Show JSON quote: supplier, price, reasoning, authorizationText.

## Scene 4 — Bounded approval (0:55-1:15)

"The agent cannot execute until the user approves a bounded payment intent. This is the key safety layer."

Click **Approve & settle**.

## Scene 5 — Settlement receipt (1:15-1:35)

"The backend executes or simulates USDC settlement on Arc and returns an auditable receipt. In production this connects to Circle Wallets, Gateway, and Arc USDC settlement."

Show receipt: amountUsdc, chain, txHash, status.

## Scene 6 — Close (1:35-1:50)

"This demonstrates an agentic commerce stack: research, authorization, stablecoin settlement, and receipts — ready for AI-driven API, compute, and content payments."
