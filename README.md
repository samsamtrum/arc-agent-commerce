# Arc Agent Commerce

AI commerce agent demo for **The Stablecoins Commerce Stack Challenge** on Ignyte.

## Track

**Best Agentic Economy Experience on Arc**

## One-line pitch

Arc Agent Commerce lets a user delegate a bounded purchase to an AI agent: the agent researches suppliers, requests approval for a fixed USDC budget, executes/simulates settlement on Arc, and returns an auditable receipt.

## Problem

AI agents are becoming capable of doing real work: buying API calls, compute, datasets, content access, or SaaS subscriptions. But most payment flows are still built for humans clicking checkout buttons. Agents need:

- stable pricing,
- small-value/high-frequency settlement,
- spending limits,
- audit trails,
- user approval controls,
- and receipts that prove what happened.

## Solution

This MVP demonstrates an agentic commerce stack:

1. User describes a task and budget.
2. Agent selects a supplier based on task category, price, rating, and USDC support.
3. User approves a bounded payment intent.
4. Backend executes or simulates an Arc USDC payment.
5. App returns a receipt with supplier, amount, chain, transaction hash, and decision reasoning.

## Circle / Arc products used

- **USDC**: stable settlement rail for supplier/API payments.
- **Arc**: predictable fees and deterministic settlement for commerce UX.
- **Circle Wallets**: target integration for secure agent/user wallet orchestration.
- **Circle Gateway**: target integration for treasury and routing across payment flows.
- **Nanopayments**: target integration for high-frequency, low-value agent actions.
- **CCTP / Bridge Kit**: optional future extension for cross-chain supplier settlement.

## Current MVP status

- Functional Next.js frontend.
- API route for agent quote generation.
- API route for bounded authorization.
- API route for payment execution/simulated receipt.
- Solidity contract sketch for bounded agent spending.
- Demo script for end-to-end flow.

The app runs in **simulation mode** without real credentials. Add Arc/Circle credentials in `.env` for testnet integration.


## Live demo

Production demo: https://arc-agent-commerce-psi.vercel.app

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Demo script

```bash
npm run test:demo
```

## Environment

Copy `.env.example` to `.env.local` and fill values when available:

```bash
cp .env.example .env.local
```

## Architecture

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Submission draft

See [`docs/SUBMISSION.md`](docs/SUBMISSION.md).

## Circle Product Feedback

See [`docs/CIRCLE_PRODUCT_FEEDBACK.md`](docs/CIRCLE_PRODUCT_FEEDBACK.md).
