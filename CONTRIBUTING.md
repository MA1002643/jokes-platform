# Contributing Guide

Thanks for your interest in contributing to **jokes-platform** 🎉  
We welcome issues, feature requests, bug reports, and pull requests.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [jokes-platform — Community & Issue Hub](#jokes--platform--community--issue-hub)
  - [Purpose](#purpose)
  - [How to Contribute](#how-to-contribute)
    - [Reporting an Issue](#reporting-an-issue)
    - [Requesting a New Feature](#requesting-a-new-feature)
    - [Proposing an Integration or Extension](#proposing-an-integration-or-extension)
  - [Issue Status & Labels](#issue-status--labels)
- [Contributing Guide](#contributing-guide)
  - [What You Can Contribute](#what-you-can-contribute)
  - [Quick Contribution Steps](#quick-contribution-steps)
  - [Contribution Guidelines & Best Practices](#contribution-guidelines--best-practices)
  - [Credit & License](#credit--license)
  - [Questions or Feedback](#questions-or-feedback)

<a id="code-of-conduct"></a>

## 📜 Code of Conduct

Please read and follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

<a id="getting-started"></a>

## 🧭 Getting Started

- **💬 [Join the Discussions](https://github.com/MA1002643/jokes-platform/discussions)**: Share your insights, provide feedback, or ask questions about Vevox.
- **🐛 [Report Issues](https://github.com/MA1002643/jokes-platform/issues)**: Submit bugs found or log feature requests for the `jokes-platform` project.
- **💡 [Submit Pull Requests](https://github.com/MA1002643/jokes-platform/pulls)**: Review open PRs, and submit your own PRs.

<a id="jokes--platform--community--issue-hub"></a>

## 🗂️ Jokes platform — Community & Issue Hub

This project welcomes community feedback and feature suggestions.

<a id="purpose"></a>

### 🎯 Purpose

This repository serves as a community space to:

- Report bugs and unexpected behaviours in the Jokes platform
- Request new features or improvements
- Propose integrations or ideas for extending Jokes platform (for example: MCP-style adapters, plugins, or example integrations)
- Track the status of reported issues and feature requests

<a id="how-to-contribute"></a>

### 🛠️ How to Contribute

<a id="reporting-an-issue"></a>

#### 🐞 Reporting an Issue

1. Open the Bug Report form: [Create a Bug Report](https://github.com/MA1002643/jokes-platform/issues/new?assignees=&labels=bug%2C+needs+triage&template=bug_report.yml&title=%5BUG%5D+)
2. Choose the appropriate template (Bug Report or Feature Request)
3. Provide as much detail as possible:
   - Steps to reproduce
   - Expected behaviour
   - Actual behaviour
   - Relevant logs or screenshots
   - System information (Node.js version, OS, browser)

<a id="requesting-a-new-feature"></a>

#### ✨ Requesting a New Feature

1. Open the Feature Request form: [Create a Feature Request](https://github.com/MA1002643/jokes-platform/issues/new?assignees=&labels=enhancement%2C+idea&template=feature_request.yml&title=%5BFEATURE%5D+)
2. Use the Feature Request template
3. Describe clearly:
   - The feature you'd like to see
   - Why it would be valuable for jokes platform users
   - Any design/implementation ideas or trade-offs

<a id="proposing-an-integration-or-extension"></a>

#### 🔌 Proposing an Integration or Extension

1. Open a new issue and use the available template
2. Include:
   - Name and short description of the integration
   - Use cases and benefits
   - Sample implementation or code snippets (optional)
   - References to similar tools or standards

<a id="issue-status--labels"></a>

### 🏷️ Issue Status & Labels

We use labels to indicate issue state. Common labels include:

- `triage` — Under initial review
- `accepted` — Approved for implementation
- `in-progress` — Work is currently being done
- `needs-more-info` — Additional information required from the reporter

<a id="contributing-guide"></a>

## 🙌 Contributing Guide

Thanks for considering contributing to Jokes Platform! Below is a short, friendly guide to make it easy for first-time contributors.

<a id="what-you-can-contribute"></a>

### 📚 What You Can Contribute

- Improve documentation or fix typos
- Suggest or add useful scripts, tools, or configurations (build scripts, example clients)
- Add UI/UX improvements to the chat frontend
- Report bugs or suggest new features
- Add sample integrations or adapters (e.g., connecting Jokes platform to other platforms)
- Add tests or improve existing test coverage

<a id="quick-contribution-steps"></a>

### ⚡ Quick Contribution Steps

1. Fork the repository on GitHub, then clone your fork and enter the project:

   ```bash
   git clone https://github.com/<your-username>/jokes-platform.git
   ```

   ```bash
   cd jokes-platform
   ```

   > Default branch is **main**

2. Set up environment variables (copy the example and adjust if needed):

   ```bash
   cp .env.example .env
   ```

   > The project uses a PostgreSQL DATABASE_URL and a PORT (3000 by default in the README).

3. Start PostgreSQL via Docker Compose:

   ```bash
   docker-compose up -d
   ```

   > This repo includes docker-compose.yml to run Postgres locally.

4. Install dependencies (Node.js 20+ recommended):

   ```bash
   npm install
   ```

   > Project is a single app (not split into Frontend/Backend folders). It’s Node.js + Express (backend) with static UI in /public (Tailwind via CDN + jQuery) and TypeScript tooling (tsx).

5. Generate Prisma client, run migrations, and seed the DB:

   ```bash
   npx prisma generate
   ```

   ```bash
   npx prisma migrate dev --name init
   ```

   ```bash
   npx prisma db seed
   ```

   > Prisma schema and seed scripts are part of the repo.

6. Create a new branch with a descriptive name:

   ```bash
   git checkout -b fix/short-issue-desc
   # or: feat/new-endpoint, docs/update-readme, chore/refactor-jokes-route, etc.
   ```

7. Run the app (development) and verify it works:

   ```bash
   npm run dev
   ```

   > API: GET /api/jokes/random returns { id, type, setup, punchline }.
   > UI: open http://localhost:3000/ (first click reveals punchline, second click fetches next joke).

8. Match code style (ESLint + Prettier included in the repo):

   ```bash
   npx eslint . --fix
   ```

   ```bash
   npx prettier . --check
   ```

   > The repo contains .eslintrc.json and .prettierrc; use them to keep formatting consistent.

9. Run tests (if your change includes/testable logic):

   ```bash
   npx jest
   ```

   > jest.config.js exists in the root; use Jest to validate changes.

10. Commit with a clear message and push your branch:

    ```bash
    git add -A
    ```

    ```bash
    git commit -m "fix: correct response shape for /api/jokes/random"
    ```

    ```bash
    git push origin fix/correct-response-shape
    ```

11. Open a Pull Request to MA1002643/jokes-platform:main from your branch:

- Describe what you changed and why (include screenshots for UI changes).
- Note: there’s no PR template in this repo at the moment, so include testing steps, screenshots, and any migration notes directly in the PR description.

<a id="contribution-guidelines--best-practices"></a>

### ✅ Contribution Guidelines & Best Practices

- Keep code readable and follow existing project style
- Add tests for new behaviour where possible
- Link any third-party resources you include
- Use meaningful commit messages and keep commits focused
- Be responsive to review feedback and update your PR when requested

<a id="credit--license"></a>

### 📝 Credit & License

- All contributions will be credited in the Contributors section.
- By contributing, you agree that your changes will be licensed under the project's MIT License.

<a id="questions-or-feedback"></a>

### ❓ Questions or Feedback

- If you're unsure where to start, open an issue labelled `good-first-issue` or ask in Discussions.
- For direct questions about contributing workflows, open an issue and tag the maintainer.

#

<p align="center">
  <strong>© 2025 Muhammad Abdullah</strong><br>
Developed with 💙 using JavaScript, TypeScript, HTML, Dockerfile and CSS<br>
  <a href="#top"><img alt="Back to Top" src="https://img.shields.io/badge/Back_to_Top-0A0A0A?style=for-the-badge">
</a>
</p>
