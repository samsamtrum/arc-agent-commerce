import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Arc Agent Commerce",
  description: "AI agent commerce demo using USDC settlement on Arc."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
