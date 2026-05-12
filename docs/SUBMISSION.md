# Ignyte Submission Draft

## Title

Arc Agent Commerce: Bounded USDC Payments for Autonomous AI Agents

## Short description

A functional MVP where an AI commerce agent researches suppliers, asks the user to approve a fixed USDC spending limit, settles or simulates payment on Arc, and returns an auditable receipt. The project demonstrates how Circle USDC, Arc, Wallets, Gateway, and nanopayments can power safe agentic commerce.

## Track

Best Agentic Economy Experience on Arc

## Circle Developer Account Email

TODO: add Khánh's Circle Developer Account email.

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
- agent quote generation,
- bounded user authorization,
- simulated/testnet-ready settlement,
- receipt output,
- Solidity spend guard contract sketch,
- architecture documentation.

## Demo video outline

1. Show the problem: agents can research and choose tools, but need safe payments.
2. Open Arc Agent Commerce dashboard.
3. Enter request: “Find the cheapest inference API to summarize a supplier contract, pay only if under 3 USDC.”
4. Agent returns supplier recommendation and reasoning.
5. User approves bounded payment.
6. App returns Arc testnet/simulated USDC receipt.
7. Explain how Circle Wallets/Gateway/Nanopayments complete the production version.

## GitHub repo

TODO: add repo URL after publishing.

## Demo app URL

TODO: add deployed URL after deployment.

## Architecture diagram

See `docs/ARCHITECTURE.md`.

## Circle Product Feedback

See `docs/CIRCLE_PRODUCT_FEEDBACK.md`.
