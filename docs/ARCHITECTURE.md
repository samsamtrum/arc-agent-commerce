# Architecture

```mermaid
flowchart LR
  U[User] --> UI[Next.js Frontend]
  UI --> Q[/api/agent/quote]
  Q --> A[Agent Decision Engine]
  A --> S[(Supplier Registry)]
  UI --> AUTH[/api/payments/authorize]
  AUTH --> G[AgentSpendGuard]
  UI --> PAY[/api/payments/execute]
  PAY --> C[Circle Wallets / Gateway]
  C --> ARC[Arc USDC Settlement]
  ARC --> R[Receipt]
  R --> UI
```

## Components

### Frontend

- Captures the user request and budget.
- Displays agent recommendation and decision reasoning.
- Requires explicit approval before settlement.
- Shows receipt output.

### Agent decision engine

- Classifies task intent.
- Selects supplier by category, price, rating, and settlement support.
- Generates explainable reasoning.
- Produces authorization text for the user.

### Payment layer

- Creates a bounded payment intent.
- Executes a simulated or real USDC settlement.
- Returns receipt metadata.

### Smart contract sketch

`contracts/AgentSpendGuard.sol` models bounded agent authorization:

- user authorizes an agent,
- agent records spend up to max limit,
- user can revoke authorization.

For production, use audited transfer logic, EIP-712 signatures, Circle wallet policies, and revocation monitoring.

## Why Arc

Arc is useful for this use case because agent payments need predictable costs and fast settlement. If an AI agent is making many small commerce decisions, volatile fees and uncertain finality degrade UX. Arc + USDC creates a dollar-denominated execution layer that is easier for users and suppliers to understand.
