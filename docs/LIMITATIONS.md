# Limitations

This project is an MVP built for a hackathon submission. It is designed to demonstrate the product flow rather than operate as a production payment system.

## Current limitations

### Simulated settlement

The receipt flow currently simulates settlement and returns a deterministic transaction-like hash. No real USDC is moved in the deployed demo.

### Mock supplier registry

Suppliers are stored in `lib/mock-data.ts`. A production version would connect to a real marketplace, API registry, or merchant onboarding flow.

### No persistent database

The demo does not persist receipts or payment intents. A production version should store quote decisions, approvals, receipts, and revocations.

### Contract is a sketch

`contracts/AgentSpendGuard.sol` models the basic idea of bounded agent authorization. It is not audited and should not be used with real funds without review.

### Circle integration is planned

The app is structured for Circle/Arc integration, but the live demo does not yet execute real Circle Wallets, Gateway, or Arc testnet payments.

## Why this scope was chosen

The challenge asks for a functional MVP and clear use of Circle/Arc concepts. This version focuses on the core product experience:

- agent recommendation,
- transparent reasoning,
- bounded approval,
- settlement receipt,
- and a path to production Circle infrastructure.

## Next integration step

The most important next step is replacing the simulated payment executor with real testnet settlement using Circle Wallets or a controlled server-side testnet wallet on Arc.
