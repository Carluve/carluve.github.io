---
title: "Fixing 1-2-3 Math with Jules: How Google’s AI Coding Agent Revived My Broken App"
date: 2025-05-25
---

# Fixing 1-2-3 Math with Jules: How Google’s AI Coding Agent Revived My Broken App

## 📝 Summary

In this post, I share how I used [Jules](https://jules.google), Google’s asynchronous coding assistant, to fix a broken educational game project I had abandoned. The app, [1-2-3 Math](https://www.carlosluengo.com/portfolio/2025-05-123math/), had various issues—broken buttons, language-switching bugs, and general logic problems. I decided to test Jules as a dev assistant and was positively surprised.

## 🤖 What is Jules?

^[Jules is an experimental tool from Google Labs. Think of it as a GPT-based developer agent that understands your repo, can reason through issues asynchronously, and even make pull requests with real code suggestions. You just describe your problem in natural language, and Jules builds a step-by-step plan, implements the changes, and pushes commits back.]({"attribution":{"attributableIndex":"0-5"}})

#### 📸 Screenshot of Jules plan and code fix
![Jules plan and code fix](/images/post/2025/202505_02jules.png)

## 💡 Why I Used Jules

The app was failing in several critical ways:
- ^[Navigation buttons didn’t work.]({"attribution":{"attributableIndex":"964-4"}})
- ^[Levels weren’t loading properly.]({"attribution":{"attributableIndex":"964-5"}})
- ^[Language toggling between Spanish and English was broken.]({"attribution":{"attributableIndex":"964-6"}})
- ^[Game logic and thresholds were hardcoded and incorrect.]({"attribution":{"attributableIndex":"964-7"}}) [oai_citation:0‡DNyuz](https://dnyuz.com/2025/05/20/googles-jules-aims-to-out-code-codex-in-battle-for-the-ai-developer-stack/?utm_source=chatgpt.com)

I didn’t want to spend hours debugging the front-end logic, so I gave Jules a try.

## ⚙️ How Jules Helped

Jules broke the task into a detailed checklist:
- ^[Fix JavaScript structural issues.]({"attribution":{"attributableIndex":"1351-3"}})
- ^[Repair menu button (`btn-jugar`) navigation.]({"attribution":{"attributableIndex":"1351-4"}})
- ^[Rebuild level rendering logic.]({"attribution":{"attributableIndex":"1351-5"}})
- ^[Enable dynamic language switching.]({"attribution":{"attributableIndex":"1351-6"}})
- ^[Adjust game settings (rounds, thresholds).]({"attribution":{"attributableIndex":"1351-7"}})
- ^[Ensure correct flow: name > level > play.]({"attribution":{"attributableIndex":"1351-8"}}) [oai_citation:1‡Reddit](https://www.reddit.com/r/singularity/comments/1kqkfvw/jules_googles_coding_agent/?utm_source=chatgpt.com) [oai_citation:2‡Medium](https://medium.com/%40samarrana407/meet-jules-google-ai-coding-agent-codex-copilot-killer-bb9e38867436?utm_source=chatgpt.com)

Each step was tracked, executed, and documented. In the final commit, Jules:
- ^[Removed duplicate functions.]({"attribution":{"attributableIndex":"1763-1"}})
- ^[Rewrote navigation and menu logic.]({"attribution":{"attributableIndex":"1763-2"}})
- ^[Fixed level visibility CSS bugs.]({"attribution":{"attributableIndex":"1763-3"}})
- ^[Introduced a cleaner language-switching mechanism.]({"attribution":{"attributableIndex":"1763-4"}})
- ^[Recalibrated the level threshold logic to 70% dynamically.]({"attribution":{"attributableIndex":"1763-5"}})

#### 📸 Screenshot of merged Pull Request on GitHub
![Merged Pull Request on GitHub](/images/post/2025/202505_04jules.png)

## ✅ Benefits of Using Jules

- **Speed**: ^[Jules fixed everything in less than 10 minutes of actual time investment from my side.]({"attribution":{"attributableIndex":"2069-4"}})
- **Clarity**: ^[Clear commit messages and explanations at each step.]({"attribution":{"attributableIndex":"2069-6"}})
- **Autonomy**: ^[I could just approve plans and see working results, with very little micromanagement.]({"attribution":{"attributableIndex":"2069-8"}})
- **Confidence**: ^[I had control to test, verify and merge safely.]({"attribution":{"attributableIndex":"2069-10"}}) [oai_citation:3‡Reddit](https://www.reddit.com/r/singularity/comments/1kqkfvw/jules_googles_coding_agent/?utm_source=chatgpt.com) [oai_citation:4‡mundobytes.com](https://mundobytes.com/fr/Jules-Ia-de-Google/?utm_source=chatgpt.com)

## 🔚 Conclusion

^[Jules isn’t just a toy; it’s a powerful productivity multiplier for developers. For projects that are small, experimental, or stuck in debugging limbo, it feels like having a reliable junior dev always available. For me, it helped bring [1-2-3 Math](https://www.carlosluengo.com/portfolio/2025-05-123math/) back to life.]({"attribution":{"attributableIndex":"2568-1"}})

I’ll definitely keep experimenting with Jules—especially for prototype-level work or legacy bugs.

---

#### 📸 Screenshot of Jules homepage
![Jules homepage](/images/post/2025/202505_03jules.png)
