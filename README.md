# Arc Agent Commerce

A hackathon MVP for **The Stablecoins Commerce Stack Challenge** on Ignyte.

**Track:** Best Agentic Economy Experience on Arc  
**Live demo:** https://arc-agent-commerce-psi.vercel.app

## What it does

Arc Agent Commerce is a small demo of an AI-powered purchasing flow. A user gives the agent a task and a budget, the app selects a supplier, the user approves a bounded USDC payment, and the backend returns a receipt.

The current build runs in simulation mode, so it is safe to try without private keys or real funds. The payment layer is structured so it can be connected to Arc testnet, Circle Wallets, and Gateway later.

## Why this is useful

AI agents are starting to perform real work: buying API calls, compute, data, document review, content access, or SaaS actions. A normal checkout flow is not designed for autonomous agents, and giving an agent full wallet access is unsafe.

This project focuses on a safer pattern:

- the user sets a clear budget,
- the agent explains its supplier choice,
- the user approves before payment,
- the backend returns an auditable receipt,
- the settlement rail is denominated in USDC.

## Demo flow

1. Enter a task, for example:

   ```text
   Find the cheapest inference API to summarize a supplier contract, pay only if under 3 USDC.
   ```

2. Click **Ask agent for quote**.
3. Review the selected supplier, price, and reasoning.
4. Click **Approve & settle**.
5. Review the receipt with amount, chain, transaction hash, and settlement status.

## Circle / Arc products

- **USDC** — stable settlement rail for supplier/API payments.
- **Arc** — target chain for predictable fees and fast settlement UX.
- **Circle Wallets** — planned wallet and policy layer for user/agent authorization.
- **Circle Gateway** — planned treasury and routing layer.
- **Nanopayments** — planned support for high-frequency, low-value agent actions.
- **CCTP / Bridge Kit** — future extension for cross-chain supplier settlement.

## MVP scope

Included in this repo:

- Next.js frontend dashboard
- API route for quote generation
- API route for bounded authorization
- API route for simulated payment execution
- receipt output
- supplier registry mock data
- Solidity spend guard contract sketch
- architecture and submission notes
- screenshot capture and demo script

Not included yet:

- live Circle Wallets execution
- real Arc testnet transaction submission
- persistent database storage
- production-grade contract audit

See [`docs/LIMITATIONS.md`](docs/LIMITATIONS.md) for more detail.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Useful commands

```bash
npm run typecheck
npm run build
npm run test:demo
npm run demo:capture
```

`npm run demo:capture` creates screenshots in `screenshots/`.

## Environment

The app works without environment variables in simulation mode. For future testnet integration, copy the example file:

```bash
cp .env.example .env.local
```

Then fill in Arc/Circle credentials locally or in Vercel environment variables. Do not commit secrets.

## Project docs

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/SUBMISSION.md`](docs/SUBMISSION.md)
- [`docs/CIRCLE_PRODUCT_FEEDBACK.md`](docs/CIRCLE_PRODUCT_FEEDBACK.md)
- [`docs/DEMO.md`](docs/DEMO.md)
- [`docs/LIMITATIONS.md`](docs/LIMITATIONS.md)
- [`docs/ROADMAP.md`](docs/ROADMAP.md)
