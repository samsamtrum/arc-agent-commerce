# Circle Product Feedback

## Why we chose these products

We chose USDC and Arc because agentic commerce needs stable, predictable settlement. AI agents may make many small purchases: API calls, datasets, compute, content, or SaaS actions. Dollar-denominated settlement makes budgets understandable to users and merchants.

Circle Wallets and Gateway are natural fits because agents should not directly custody broad user funds. A production system should use controlled wallets, spending policies, treasury routing, and auditable authorization.

Nanopayments are important because many agent actions are sub-dollar or high-frequency. A pay-per-call or pay-per-event model is difficult with traditional card checkout but fits programmable stablecoin rails.

## What worked well during development

- USDC is easy to explain to both users and suppliers.
- Arc's positioning around predictable fees and deterministic settlement maps directly to agent UX needs.
- Circle's product set covers many layers of the stack: wallets, settlement, routing, and cross-chain movement.

## What could be improved

- More end-to-end sample apps for agent payments would help: user approval, spending limits, wallet policies, and receipt generation in one repo.
- Clear testnet quickstarts for Arc + Circle Wallets + Gateway would reduce integration time.
- A canonical “agent spending policy” pattern would help developers avoid unsafe custody designs.

## Recommendations

- Publish an official Agentic Payments starter kit with Next.js, Circle Wallets, USDC testnet settlement, and policy-based spend limits.
- Provide prebuilt UI components for user approvals, spending caps, and revocation.
- Add examples for nanopayment receipts and metering, especially pay-per-inference and pay-per-API-call flows.
