# SpecAlign: Visual Logic Auditor 🛡️

**A Generative UI tool that catches silent logic drifts in your code before they merge.**

> 🚀 **Built for the WeMakeDevs x Tambo Hackathon**

## 💡 The Problem
Unit tests catch syntax errors, but they often miss **logic drifts**—like a payment system accepting negative numbers or a refund policy being bypassed. These silent bugs cost money.

## 🛠️ The Solution
SpecAlign is an automated auditor that runs on every Pull Request. It visualizes the difference between "The Spec" (Jira requirements) and "The Code" using **Tambo's Generative UI**.

### ✨ Key Features
* **Visual Drift Detection:** Uses Tambo SDK to render a clear, interactive card showing the error.
* **One-Click Fix:** A Generative UI button that allows developers to apply the fix instantly.
* **Transparent Simulation:** Backend logic simulates the audit process to demonstrate the UI capabilities without API latency.

## 🏗️ Architecture & Tools Used
We utilized the full AI ecosystem to build this "Super App" in record time:

* **Frontend:** [Next.js](https://nextjs.org/) (App Router)
* **Generative UI:** [Tambo React SDK](https://tambo.ai/) (For the visual audit cards)
* **Infrastructure:** Scaffolding & Architecture generated autonomously by **Charlie** (TypeScript AI Agent).
* **Analytics:** **Vercel Web Analytics** (Real-time user tracking).
* **Authentication:** Vercel (Deployment Protection removed for public demo).

## 🚀 Live Demo
[**View the Live Dashboard**](https://specalign-three.vercel.app)

## 🎥 Video Demo
[Watch on YouTube](YOUR_YOUTUBE_LINK_HERE)

## 📦 How to Run Locally

1.  Clone the repository
    ```bash
    git clone [https://github.com/Sindhuja16-coder/specalign.git](https://github.com/Sindhuja16-coder/specalign.git)
    ```
2.  Install dependencies
    ```bash
    npm install
    ```
3.  Run the development server
    ```bash
    npm run dev
    ```

---
*Built with ❤️ by Sindhuja for the Hackathon.*
