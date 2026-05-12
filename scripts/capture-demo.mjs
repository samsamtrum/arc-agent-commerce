import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const baseUrl = process.env.DEMO_URL ?? "http://127.0.0.1:3000";
mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROME_PATH ?? "/usr/bin/google-chrome-stable"
});
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();
await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.screenshot({ path: "screenshots/01-landing.png", fullPage: true });

await page.getByRole("button", { name: "Ask agent for quote" }).click();
await page.waitForFunction(() => document.body.innerText.includes("authorizationText"));
await page.screenshot({ path: "screenshots/02-agent-quote.png", fullPage: true });

await page.getByRole("button", { name: "Approve & settle" }).click();
await page.waitForFunction(() => document.body.innerText.includes("txHash"));
await page.screenshot({ path: "screenshots/03-receipt.png", fullPage: true });

await context.close();
await browser.close();
console.log(`Captured screenshots from ${baseUrl}`);
console.log("Video script is in scripts/demo-video.md. To record video, use OBS/Loom or install ffmpeg + Playwright browser bundle.");
