"use client";

import { useState } from "react";

type Stage = "idle" | "quoted" | "paid";

export function DemoPanel() {
  const [intent, setIntent] = useState("Find the cheapest inference API to summarize a supplier contract, pay only if under 3 USDC.");
  const [budgetLimitUsd, setBudget] = useState(3);
  const [stage, setStage] = useState<Stage>("idle");
  const [quote, setQuote] = useState<any>(null);
  const [receipt, setReceipt] = useState<any>(null);

  async function getQuote() {
    const response = await fetch("/api/agent/quote", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ intent, budgetLimitUsd })
    });
    const data = await response.json();
    setQuote(data);
    setReceipt(null);
    setStage("quoted");
  }

  async function approveAndPay() {
    const auth = await fetch("/api/payments/authorize", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ quote })
    }).then((res) => res.json());

    const paid = await fetch("/api/payments/execute", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ paymentIntent: auth })
    }).then((res) => res.json());

    setReceipt(paid);
    setStage("paid");
  }

  return (
    <div className="card">
      <h2>Live MVP demo</h2>
      <label>
        <p>User request</p>
        <textarea rows={4} value={intent} onChange={(event) => setIntent(event.target.value)} />
      </label>
      <label>
        <p>Budget limit (USDC)</p>
        <input type="number" min="0.1" step="0.1" value={budgetLimitUsd} onChange={(event) => setBudget(Number(event.target.value))} />
      </label>
      <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
        <button onClick={getQuote}>Ask agent for quote</button>
        <button onClick={approveAndPay} disabled={stage === "idle"}>Approve & settle</button>
      </div>
      <pre>{JSON.stringify(receipt ?? quote ?? { status: "waiting_for_request" }, null, 2)}</pre>
    </div>
  );
}
