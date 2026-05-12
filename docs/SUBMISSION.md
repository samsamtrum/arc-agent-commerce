# Ignyte Submission Draft

## Title

Arc Agent Commerce: Bounded USDC Payments for Autonomous Agents

## Short description

Arc Agent Commerce is a functional MVP for agentic commerce on Arc. A user gives an agent a task and budget, the app selects a supplier, the user approves a fixed USDC payment, and the backend returns an auditable receipt. The demo focuses on safe agent spending patterns using USDC, Arc, Circle Wallets, Gateway, and nanopayments.

## Track

Best Agentic Economy Experience on Arc

## Circle Developer Account Email

ptruongvan31@gmail.com

## Circle products used on Arc

- USDC
- Circle Wallets
- Circle Gateway
- Nanopayments
- CCTP / Bridge Kit as future extension

## Functional MVP

The MVP includes:

- frontend dashboard,
- backend API routes,
- supplier recommendation logic,
- bounded user authorization,
- simulated/testnet-ready settlement,
- receipt output,
- Solidity spend guard contract sketch,
- architecture documentation,
- Circle Product Feedback section.

## Demo video outline

1. Open the live demo.
2. Enter a task and USDC budget.
3. Click **Ask agent for quote**.
4. Show the supplier recommendation and reasoning.
5. Click **Approve & settle**.
6. Show the receipt with chain, amount, txHash, and status.
7. Briefly show the GitHub repo or README.

## GitHub repo

https://github.com/samsamtrum/arc-agent-commerce

## Demo app URL

https://arc-agent-commerce-psi.vercel.app

## Architecture diagram

See `docs/ARCHITECTURE.md`.

## Circle Product Feedback

See `docs/CIRCLE_PRODUCT_FEEDBACK.md`.

## Limitations and next steps

See `docs/LIMITATIONS.md` and `docs/ROADMAP.md`.
