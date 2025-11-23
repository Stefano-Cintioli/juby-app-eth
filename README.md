Markdown

# 🛂 Juby Passport

> **Volatility to Stability. Verified on World Chain.**
> The first Self-Custody Retirement Mini App for the Freelance Economy.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://juby-app-eth.vercel.app)
[![World Chain](https://img.shields.io/badge/Built_on-World_Chain-red?style=for-the-badge)](https://worldcoin.org/world-chain)

## 🦁 The Problem
In Latin America, the freelance workforce is booming, but financially naked. They earn in crypto or volatile tokens like WLD, but:
1.  **Inflation** eats traditional pensions.
2.  **Volatility** causes panic-selling of grants.
3.  **Crypto Wallets** are built for trading, not saving.

Result: A generation of high-earners with **zero long-term wealth**.

## 🛡️ The Solution: Juby Passport
Juby Passport is a **World Chain native Mini App** that automates financial stability. We transform the World App from a "claim & sell" interface into a "claim & build wealth" platform.

* **Verify:** Uses **World ID** to create a unique "Proof of Savings" reputation.
* **Grow:** Direct access to institutional-grade yield vaults.

---

## 🏗️ Architecture & Tech Stack

This project was built from scratch during **ETHGlobal Devconnect 2025**.

### 1. Frontend & Integration (MiniKit)
* **Framework:** Next.js 14 (App Router) + Tailwind CSS.
* **SDK:** We used **MiniKit** to build a fully native experience inside World App.
* **Design:** "Calm Tech" UI generated with **v0** to abstract complexity for non-crypto users.

### 2. Identity (World ID)
* We enforce **Sybil-Resistance** at the vault level.
* Every deposit is linked to a verified human, preventing bot farming and establishing a trusted on-chain financial history for future under-collateralized loans.

### 3. Smart Contracts (The "Hack")
* **Network:** World Chain (Testnet).
* **Morpho Simulation:** Since Morpho Blue is not yet live on World Chain Testnet, we architected a custom **ERC-4626 Vault** (`MockMorphoVault.sol`).
* **Yield Simulation:** To demonstrate the value proposition during the hackathon, we implemented a "Yield Injector" logic in the contract that mathematically simulates share price appreciation based on `block.timestamp`. This allows judges to see wealth accumulation in real-time.

---

## 🚀 How to Run Locally

* 1. **Clone the repo**

   ```bash
   git clone [https://github.com/Stefano-Cintioli/juby-app-eth.git](https://github.com/Stefano-Cintioli/juby-app-eth.git)
   cd juby-app-eth

* 2. **Instal Dependencies**

npm install
# or
pnpm install

* 3. **Run the developer server**

npm run dev
# or
pnpm dev

* 4. **Open in Simulator**

Open http://localhost:3000 in the MiniKit Simulator to test the World ID verification flow.

**🗺️ Roadmap**

Q4 2025 (Now): Hackathon MVP with Mock Vault Architecture.

Q1 2026: Mainnet Launch on World Chain with Live Morpho Blue integration.

Q3 2026: Superchain Aggregation. Leveraging the OP Stack to aggregate liquidity from Base (Aave/Compound) natively without bridging friction.

**👥 Team**

Stefano Cintioli: Product & Strategy

Renzo Banegas: Smart Contracts & Backend

Joaquin Cortez: Frontend & MiniKit Integration


Built with ❤️ for the World ecosystem.
