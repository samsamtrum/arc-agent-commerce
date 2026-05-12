# Demo Guide

## Live app

https://arc-agent-commerce-psi.vercel.app

## Suggested recording length

60-90 seconds is enough.

## Recording flow

1. Open the live demo URL.
2. Show the landing section for a few seconds.
3. Use this request:

   ```text
   Find the cheapest inference API to summarize a supplier contract, pay only if under 3 USDC.
   ```

4. Click **Ask agent for quote**.
5. Pause on the quote output and show:
   - selected supplier,
   - price,
   - reasoning,
   - authorization text.
6. Click **Approve & settle**.
7. Pause on the receipt output and show:
   - `amountUsdc`,
   - `chain`,
   - `txHash`,
   - `status`.
8. Optional: open the GitHub repo at the end.

## Silent video captions

If recording without voice, these captions can be added as on-screen text:

```text
Arc Agent Commerce
Bounded USDC payments for autonomous agents on Arc

1. User gives the agent a task and budget
2. Agent selects a supplier and explains the decision
3. User approves a fixed payment
4. Backend returns an auditable receipt

Track: Best Agentic Economy Experience on Arc
Circle products: USDC, Wallets, Gateway, Nanopayments
```

## What to emphasize

- The agent does not spend automatically.
- The user approves a fixed amount first.
- The receipt makes the action auditable.
- The current demo is simulated, with a clear path to Circle Wallets/Gateway and Arc testnet settlement.
