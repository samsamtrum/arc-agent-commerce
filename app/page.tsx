import { DemoPanel } from "@/components/DemoPanel";

const steps = [
  ["Research", "Agent classifies the user's goal and compares suppliers by price, rating, category, and USDC settlement support."],
  ["Authorize", "User approves a bounded payment intent, e.g. spend up to 2.50 USDC for one task."],
  ["Settle", "Backend executes or simulates an Arc USDC transfer and returns a receipt with transaction metadata."],
  ["Report", "Dashboard shows supplier, amount, wallet, status, and Circle Product Feedback notes."]
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="card">
          <span className="badge">Arc × Circle × USDC · Agentic Economy</span>
          <h1>AI agents that can buy, settle, and prove work.</h1>
          <p>
            Arc Agent Commerce is a functional MVP for the Stablecoins Commerce Stack Challenge. It shows an AI commerce agent that researches a task, selects a supplier, requests user authorization, then settles the purchase in USDC on Arc testnet or simulation mode.
          </p>
          <div className="grid">
            <div className="metric"><strong>USDC</strong><span>Stable settlement rail</span></div>
            <div className="metric"><strong>Arc</strong><span>Predictable fees + finality</span></div>
            <div className="metric"><strong>Agent</strong><span>Bounded autonomous payments</span></div>
          </div>
        </div>
        <div className="card">
          <h2>Commerce flow</h2>
          <div className="flow">
            {steps.map(([title, body], index) => (
              <div className="step" key={title}>
                <span className="num">{index + 1}</span>
                <div><strong>{title}</strong><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="demo">
        <DemoPanel />
        <div className="card">
          <h2>Why this matters</h2>
          <ul>
            <li>AI agents need a safe way to perform small economic actions without full wallet custody.</li>
            <li>USDC gives stable pricing for suppliers, APIs, and compute tasks.</li>
            <li>Arc provides predictable fees and deterministic finality for commerce UX.</li>
            <li>The MVP demonstrates spending limits, receipts, and auditable agent decisions.</li>
          </ul>
          <p className="footer">Demo mode runs without private keys. Add Circle/Arc credentials to execute testnet settlement.</p>
        </div>
      </section>
    </main>
  );
}
