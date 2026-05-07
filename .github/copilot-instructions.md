# Copilot Custom Instructions

> This file provides GitHub Copilot cloud agent with context about this repository's
> conventions, preferences, and coding standards.
> See: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/customizing-copilot-cloud-agent

## Project Overview

This is a **demo playground** for showcasing GitHub Copilot Agentic Workflow capabilities.
It contains intentional bugs, missing documentation, and incomplete features that serve as
demo scenarios for Copilot cloud agent to work on.

## Language and Runtime

- **Language**: JavaScript (Node.js)
- **Test framework**: Jest
- **Node version**: 18+
- **Package manager**: npm

## Code Style

- Use `const` and `let` (never `var`)
- Use arrow functions for callbacks and anonymous functions
- Use template literals instead of string concatenation
- Always add error handling for edge cases (null/undefined, division by zero, empty arrays, etc.)
- Use descriptive variable and function names
- Keep functions small and focused on a single responsibility

## Testing Conventions

- Test files live in the `tests/` directory and follow the `*.test.js` naming pattern
- Use Jest for all tests
- Each function should have at least one happy-path test and one edge-case test
- Use descriptive test names in the format: `"should <expected behavior> when <condition>"`
- Group related tests with `describe` blocks

## Documentation Conventions

- All exported functions must have JSDoc comments
- JSDoc should include `@param`, `@returns`, and `@throws` (when applicable)
- Add `@example` blocks for non-obvious usage

## Pull Request Conventions

- PR titles should follow: `<type>: <short description>` (e.g., `fix: handle division by zero in calculator`)
- Types: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`
- PR descriptions should explain *what* changed and *why*
- All PRs must pass the CI workflow before merging

## Important Files

- `src/calculator.js` — Math utility functions (has known bugs — ideal for fix demos)
- `src/string-utils.js` — String helper functions (missing JSDoc — ideal for docs demos)
- `src/data-processor.js` — Data processing utilities (has TODO stubs — ideal for feature demos)
- `tests/` — Jest test files
- `.github/workflows/ci.yml` — CI pipeline (runs on every PR)
