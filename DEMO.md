# 🎬 Demo Walkthrough: GitHub Copilot Agentic Workflow

This guide walks you through four demo scenarios that showcase the power of **GitHub Copilot cloud agent**.

Each scenario follows the same flow:
1. Create or open an issue
2. Assign it to **Copilot**
3. Watch Copilot work in the background
4. Review and merge the pull request

---

## 📋 Prerequisites

Before you start:
- ✅ You have a GitHub Copilot **Pro**, **Pro+**, **Business**, or **Enterprise** subscription
- ✅ Copilot cloud agent is **enabled** for this repository
- ✅ The CI workflow (`.github/workflows/ci.yml`) is active

> 🔗 Check your settings: [github.com/settings/copilot](https://github.com/settings/copilot)

---

## 🎬 Scenario 1: Fix a Bug

**Goal:** Have Copilot fix the division-by-zero bug in `src/calculator.js`

### Step 1 — Create the issue

Create a new issue using the **Bug Report** template:
- **Title:** `Fix division by zero in calculator.js`
- **Description:**
  ```
  The `divide` function in src/calculator.js returns Infinity when the divisor is 0,
  instead of throwing a clear error. Similarly, `factorial` causes infinite recursion
  for negative inputs and `percentage` returns Infinity when total is 0.

  Expected: all three functions should throw a TypeError with a descriptive message
  when given invalid inputs.
  ```

### Step 2 — Assign to Copilot

1. In the right sidebar, click **Assignees**
2. Select **Copilot**
3. Click **Assign**

### Step 3 — Track Progress

- Go to [github.com/copilot](https://github.com/copilot) → **Agents** panel
- You'll see your session appear within seconds
- Click on it to see Copilot's plan and live progress

### Step 4 — Review the PR

Copilot will open a pull request that:
- Adds input validation to `divide`, `factorial`, and `percentage`
- Adds or updates tests to cover the edge cases
- Passes the CI workflow

Review the diff, add comments if you want changes, and merge!

---

## 🎬 Scenario 2: Improve Test Coverage

**Goal:** Have Copilot identify and fill gaps in the test suite

### Step 1 — Create the issue

Create a new issue using the **Copilot Task** template:
- **Title:** `Improve test coverage for calculator module`
- **Description:**
  ```
  The tests in tests/calculator.test.js are missing several edge cases.
  Please analyze the calculator.js source and add comprehensive tests for:
  - divide: test division by zero (should throw)
  - factorial: test negative numbers (should throw), test non-integers (should throw)
  - percentage: test when total is 0 (should throw)
  - All functions: test with non-numeric inputs
  ```

### Step 2 — Assign to Copilot and track as above

### Expected Outcome

Copilot opens a PR with expanded test coverage, all tests passing in CI.

---

## 🎬 Scenario 3: Add JSDoc Documentation

**Goal:** Have Copilot add full JSDoc documentation to `src/string-utils.js`

### Step 1 — Create the issue

Create a new issue using the **Copilot Task** template:
- **Title:** `Add JSDoc documentation to string-utils.js`
- **Description:**
  ```
  The file src/string-utils.js has no JSDoc documentation on any of its exported functions.
  Please add complete JSDoc comments to every function including:
  - @param with types and descriptions
  - @returns with type and description
  - @throws if applicable
  - @example for each function showing typical usage
  ```

### Step 2 — Assign to Copilot and track as above

### Expected Outcome

Copilot opens a PR adding `@param`, `@returns`, `@throws`, and `@example` JSDoc blocks to every exported function.

---

## 🎬 Scenario 4: Implement Missing Features

**Goal:** Have Copilot implement the TODO stubs in `src/data-processor.js`

### Step 1 — Create the issue

Create a new issue using the **Copilot Task** template:
- **Title:** `Implement groupBy, sortBy, summarise, and deduplicateBy in data-processor.js`
- **Description:**
  ```
  The file src/data-processor.js has four stub functions that throw "not yet implemented":
  - groupBy(data, key): group array of objects by key value
  - sortBy(data, key, direction): sort by key ascending or descending
  - summarise(data, key): return { min, max, sum, avg, count } for a numeric key
  - deduplicateBy(data, key): remove duplicate objects, keeping first occurrence

  Please implement all four functions and add corresponding unit tests in tests/data-processor.test.js.
  ```

### Step 2 — Assign to Copilot and track as above

### Expected Outcome

Copilot opens a PR implementing all four functions and creating `tests/data-processor.test.js` with full test coverage.

---

## 🧠 Pro Tips

### Write Better Prompts
Copilot performs best when issues are:
- **Specific** — name the file, function, and exact behavior expected
- **Bounded** — one clear task per issue works better than many tasks in one
- **Contextualized** — mention relevant constraints or coding conventions

### Use the Optional Prompt
When assigning an issue, use the **Optional prompt** field to add extra guidance that isn't in the issue body — e.g., "Use Jest's `toThrow` matcher for error assertions."

### Iterate with Comments
If Copilot's first attempt isn't quite right, leave a comment on the PR mentioning `@copilot` with your feedback. Copilot will respond and push an updated commit.

### Custom Instructions
The `.github/copilot-instructions.md` file in this repo shapes how Copilot works on every task. Edit it to add your own conventions.
> 📖 [Custom instructions docs](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/customizing-copilot-cloud-agent)

---

## 📚 Further Reading

| Topic | Link |
|---|---|
| About Copilot cloud agent | [docs.github.com](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) |
| Starting sessions | [docs.github.com](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions) |
| Tracking sessions | [docs.github.com](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/track-copilot-sessions) |
| Reviewing & iterating on PRs | [docs.github.com](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/make-changes-to-an-existing-pr) |
| Custom agents | [docs.github.com](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/agent-management) |
| Integrations (Jira, Slack, Teams) | [docs.github.com](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations) |
