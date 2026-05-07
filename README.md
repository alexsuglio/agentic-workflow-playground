# 🤖 GitHub Copilot Agentic Workflow Playground

> A hands-on demo repository to explore and showcase the capabilities of **GitHub Copilot's Agentic Workflow** (Copilot cloud agent) — the autonomous AI developer that works directly on GitHub.

[![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-Cloud%20Agent-blue?logo=github)](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🚀 What Is GitHub Copilot Agentic Workflow?

**GitHub Copilot cloud agent** (formerly Copilot coding agent) is an autonomous AI developer that works directly on GitHub — researching your codebase, creating plans, writing code, running tests, and opening pull requests — all without you leaving GitHub.

Unlike traditional AI assistants that require you to be present in an IDE session, Copilot cloud agent works **asynchronously in the background** inside a GitHub Actions-powered ephemeral environment.

### Key Capabilities

| Capability | Description |
|---|---|
| 🔍 **Research** | Explores and understands your codebase |
| 📋 **Planning** | Creates implementation plans before writing code |
| 🐛 **Bug Fixes** | Diagnoses and patches bugs autonomously |
| ✨ **Feature Development** | Implements incremental new features |
| 🧪 **Test Coverage** | Generates and improves unit/integration tests |
| 📝 **Documentation** | Writes and updates technical documentation |
| 🏗️ **Refactoring** | Addresses technical debt and code quality |
| 🔀 **Merge Conflicts** | Resolves merge conflicts automatically |

---

## 📚 Official Documentation

| Resource | Link |
|---|---|
| About Copilot cloud agent | [docs.github.com → About cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) |
| Starting Copilot sessions | [docs.github.com → Start sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions) |
| Research, plan & iterate | [docs.github.com → Research & plan](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/research-plan-iterate) |
| Tracking agent sessions | [docs.github.com → Track sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/track-copilot-sessions) |
| Custom instructions | [docs.github.com → Custom instructions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/customizing-copilot-cloud-agent) |
| Agent management | [docs.github.com → Agent management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/agent-management) |
| Access management | [docs.github.com → Access management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management) |
| Integrations overview | [docs.github.com → Integrations](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations) |

---

## 🎯 How to Trigger Copilot Cloud Agent

Copilot cloud agent can be started from **many entry points**:

### 1. Assign an Issue to Copilot
The most common way — open any issue and set **Copilot** as the assignee:
1. Navigate to an issue in this repo
2. Click **Assignees** in the right sidebar
3. Select **Copilot** from the list
4. (Optional) Add guidance in the **Optional prompt** field
5. Copilot starts working in the background and opens a PR when done

### 2. Copilot Chat on GitHub.com
Use the [Agents panel](https://github.com/copilot) on GitHub.com to start a session directly from chat.

### 3. GitHub CLI
```bash
gh copilot suggest "fix the bug in src/calculator.js where division by zero is not handled"
```

### 4. From Your IDE
In VS Code, JetBrains, or Eclipse — use Copilot Chat and ask it to create a pull request:
```
@copilot Create a PR that adds input validation to the calculator module
```

### 5. Third-Party Integrations
- **Jira** → [Integrate with Jira](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-jira)
- **Slack** → [Integrate with Slack](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-slack)
- **Microsoft Teams** → [Integrate with Teams](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-teams)
- **Azure Boards** → [Integrate with Azure Boards](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-azure-boards)
- **Linear** → [Integrate with Linear](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-linear)

---

## 🏗️ Repository Structure

```
agentic-workflow-playground/
├── .github/
│   ├── copilot-instructions.md      # Custom instructions for Copilot cloud agent
│   ├── ISSUE_TEMPLATE/
│   │   ├── copilot-task.md          # Template for assigning tasks to Copilot
│   │   └── bug-report.md            # Bug report template (assign to Copilot!)
│   └── workflows/
│       └── ci.yml                   # CI pipeline that Copilot's PRs must pass
├── src/
│   ├── calculator.js                # 🐛 Has bugs — assign a fix issue to Copilot!
│   ├── string-utils.js              # 📝 Missing docs — ask Copilot to add them
│   └── data-processor.js            # ✨ Has TODOs — ask Copilot to implement
├── tests/
│   ├── calculator.test.js           # Unit tests (incomplete — ask Copilot to improve!)
│   └── string-utils.test.js         # Unit tests
├── DEMO.md                          # 🎬 Step-by-step demo walkthrough
└── README.md                        # This file
```

---

## 🎬 Quick Demo Scenarios

Use the pre-created issues in this repo (or create your own) to see Copilot cloud agent in action:

### Scenario 1: Fix a Bug 🐛
> Assign the **"Fix division by zero bug in calculator"** issue to Copilot and watch it diagnose and fix the bug, write a test, and open a PR.

### Scenario 2: Improve Test Coverage 🧪
> Assign the **"Improve test coverage for string-utils"** issue to Copilot and watch it analyze the existing tests, identify gaps, and write new tests.

### Scenario 3: Add Documentation 📝
> Assign the **"Add JSDoc documentation to string-utils module"** issue to Copilot and watch it write documentation across the entire module.

### Scenario 4: Implement a Feature ✨
> Assign the **"Implement the TODO items in data-processor"** issue to Copilot and watch it implement the missing functionality end-to-end.

---

## ⚙️ Custom Instructions

This repository includes a [`.github/copilot-instructions.md`](.github/copilot-instructions.md) file that gives Copilot cloud agent context about this project's conventions and preferences. This ensures Copilot writes code that matches the project's style.

See the [Custom Instructions documentation](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/customizing-copilot-cloud-agent) for how to tailor Copilot's behavior.

---

## 🔄 Copilot vs Traditional AI Workflows

| | AI Assistant in IDE | Copilot Cloud Agent |
|---|---|---|
| **Where** | Local machine | On GitHub |
| **Session type** | Synchronous (you must be present) | Asynchronous (works in background) |
| **Branch/commit** | Manual | Automated |
| **PR creation** | Manual | Automated |
| **Transparency** | Session-local | Full audit trail in commits & logs |
| **Collaboration** | Single developer | Team-wide visibility |

---

## 🏁 Getting Started

1. **Fork or clone this repo** to your GitHub account
2. Make sure **GitHub Copilot** is enabled (Pro, Pro+, Business, or Enterprise plan)
3. Open any [issue](../../issues) in this repository
4. Assign it to **Copilot** using the Assignees panel
5. Watch Copilot work — track progress in the [Agents panel](https://github.com/copilot) on GitHub.com
6. Review the pull request Copilot opens when it's done

> 📖 **Need more detail?** See the full [DEMO.md](DEMO.md) walkthrough guide.

---

## 📋 Prerequisites

- A GitHub account with **Copilot Pro**, **Pro+**, **Business**, or **Enterprise** plan
- Copilot cloud agent enabled (check [Settings → Copilot](https://github.com/settings/copilot))
- This repository accessible to Copilot (not disabled by org policy)

---

## 🤝 Contributing

This is a playground — feel free to:
- Add more demo scenarios as issues
- Improve the sample source code to make demos more interesting
- Add examples in other programming languages
- Share what you've built with Copilot cloud agent!

---

*Built to showcase [GitHub Copilot Agentic Workflow](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) capabilities. Happy building! 🚀*
