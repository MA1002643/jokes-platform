<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center!important ">

<h1 align="center">JOKES-PLATFORM</h1>
<p align="center"><em>Unleash Laughter, Powerfully Delivered Every Time<em></p>

<!-- BADGES -->
<div align="center">
<a href="https://github.com/MA1002643/jokes-platform/blob/main/LICENSE" alt="license">
   <img src="https://img.shields.io/badge/license-MIT-green?style=flat&logo=opensourceinitiative&logoColor=white" alt="MIT License" />
</a>
<img src="https://img.shields.io/github/last-commit/MA1002643/jokes-platform?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<a href="https://github.com/MA1002643/jokes-platform/discussions" alt="Discussions">
   <img src="https://img.shields.io/github/discussions/MA1002643/jokes-platform" alt="Discussions" />
</a>
<a href="https://github.com/MA1002643/jokes-platform/stargazers">
   <img src="https://custom-icon-badges.demolab.com/github/stars/MA1002643/jokes-platform?logo=star&style=flat" alt="stars" />
</a>
<a href="https://github.com/MA1002643/jokes-platform/issues">
   <img src="https://custom-icon-badges.demolab.com/github/issues-raw/MA1002643/jokes-platform?logo=issue" alt="issues" />
</a>
</div>
<br>
<br>
<div align="center"><em>Built with the tools and technologies:</em></div>
<br>
<br>
<!-- TECH-STACK:START -->

<!-- TECH-STACK:END -->
</div>
<br>

---

## 📄 Table of Contents

- [Overview](#overview)
- [UI Preview](#ui-preview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Learning Outcomes](#learning-outcomes)
- [Roadmap](#roadmap)
- [Contributors](#contributors)
- [Acknowledgment](#acknowledgment)
- [License](#license)

---

<a id="overview"></a>

## 🧠 Project Overview

**jokes-platform** is a modern, containerised full-stack web application that serves and displays jokes dynamically. Built with **TypeScript**, **Express.js**, **Prisma**, and **PostgreSQL**, it offers a scalable backend and a minimal frontend using **Tailwind CSS** and **jQuery**. The project emphasises **clean architecture**, **type safety**, and **developer experience** through Docker-based setup, modular design, and automated testing.

### ⚡ Why jokes-platform?

This project was developed to demonstrate how a simple concept — joke sharing — can be transformed into a **production-grade, containerised web service** using modern technologies. It highlights best practices in API design, containerisation, and frontend integration.

---

<a id="ui-preview"></a>

## 🎨 UI Preview

|                Recipe Search                |              Dashboard              |
| :-----------------------------------------: | :---------------------------------: |
| ![Joke1 screenshot](screenshots/Jokes1.png) | ![jokes GIF](screenshots/jokes.gif) |

---

<a id="features"></a>

## 📌 Features

|     | Component                     | Details                                                                                                                                                                                                                                                                                                                                       |
| :-- | :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**              | <ul><li>Full-stack **jokes platform** with RESTful backend and lightweight frontend</li><li>Backend powered by **Express.js (TypeScript)**</li><li>Data layer managed with **Prisma ORM** connected to **PostgreSQL**</li><li>Fully containerized using **Docker** and **docker-compose** for consistent, reproducible environments</li></ul> |
| 🚀  | **TypeScript Backend**        | <ul><li>Backend written entirely in **TypeScript** for type safety and scalability</li><li>Structured routes, controllers, and middleware architecture</li><li>Improved maintainability with strongly typed request/response objects</li></ul>                                                                                                |
| 🗄️  | **Database Integration**      | <ul><li>Schema-first modeling with **Prisma ORM**</li><li>Backed by a **PostgreSQL** database</li><li>Includes **migration** and **seeding scripts** for populating jokes from JSON</li></ul>                                                                                                                                                 |
| 🧩  | **Modular Architecture**      | <ul><li>Clean separation of **routes**, **controllers**, and **config** modules</li><li>Reusable **TypeScript modules** for scalability and clarity</li><li>Well-structured folder hierarchy for maintainability</li></ul>                                                                                                                    |
| 🧪  | **Integrated Testing Suite**  | <ul><li>Testing setup using **Jest**, **Supertest**, and **ts-jest**</li><li>Automated API endpoint tests for reliability</li><li>Test commands integrated into **package.json** scripts</li></ul>                                                                                                                                            |
| 🎨  | **Lightweight Frontend**      | <ul><li>Minimalist frontend built with **Tailwind CSS (CDN)** and **jQuery**</li><li>Instant joke fetching and display using AJAX</li><li>Focus on responsiveness and simplicity</li></ul>                                                                                                                                                    |
| 🔧  | **Developer Experience**      | <ul><li>Modern development setup using **tsx** for fast TypeScript execution</li><li>Linting and formatting via **ESLint** and **Prettier**</li><li>Consistent code style and streamlined dev workflow</li></ul>                                                                                                                              |
| 🐳  | **Containerised Environment** | <ul><li>Complete **Docker** and **Docker Compose** setup</li><li>Runs both the **Node.js server** and **PostgreSQL database** in isolated containers</li><li>Enables seamless local and production deployments</li></ul>                                                                                                                      |
| 🔐  | **Environment Management**    | <ul><li>Secure configuration using **dotenv**</li><li>All secrets and credentials stored in environment variables</li><li>Supports easy environment switching (development, test, production)</li></ul>                                                                                                                                       |
| 🛡️  | **Security & Stability**      | <ul><li>Container isolation ensures safe runtime environments</li><li>Input validation and error handling for robust API performance</li><li>Secure access to database and environment variables</li></ul>                                                                                                                                    |
| 📦  | **Dependencies**              | <ul><li>Core: **express**, **typescript**, **prisma**, **dotenv**, **tsx**</li><li>Frontend: **tailwindcss**, **jquery** (via CDN)</li><li>Testing: **jest**, **supertest**, **ts-jest**</li><li>Linting/Formatting: **eslint**, **prettier**</li></ul>                                                                                       |

---

<a id="project-structure"></a>

## 📁 Project Structure

```sh
└── jokes-platform/
├── prisma/
│   ├── migrations/
│   │   ├── 20250817194353_init/
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── jokes.json
│   ├── schema.prisma
│   └── seed.mjs
├── src/
│   ├── controllers/
│   │   └── jokesController.ts
│   ├── routes/
│   │   └── jokes.ts
│   ├── services/
│   │   └── jokesService.ts
│   ├── app.ts
│   ├── db.ts
│   └── index.ts
├──  tsconfig.json
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── docker-compose.yml
├── Dockerfile
├── jest.config.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── SECURITY.md
└── tailwind.config.js
```

---

<a id="project-index"></a>

### 📑 Project Index

<details open>
	<summary><b><code>JOKES-PLATFORM/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/Dockerfile'>Dockerfile</a></b></td>
					<td style='padding: 8px;'>- Defines the containerized environment for deploying the application by orchestrating dependency installation, build processes, and production setup<br>- It ensures a streamlined, consistent deployment process, optimizing the application for production use with minimal overhead<br>- The Dockerfile encapsulates the entire build lifecycle, enabling reliable, scalable deployment within containerized infrastructure.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/ tsconfig.json'> tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Defines the TypeScript compilation settings to ensure consistent, modern JavaScript output aligned with project standards<br>- It facilitates seamless development and deployment by specifying target environments, module resolution, and strict type checking, thereby supporting the overall architectures robustness and maintainability.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/jest.config.js'>jest.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures the testing environment for the project by integrating TypeScript support with Jest<br>- It ensures that tests run in a Node.js environment, utilizing the default TypeScript preset for accurate transformation of TypeScript files<br>- This setup facilitates reliable, type-aware testing aligned with the projects architecture, supporting maintainability and consistency across the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/docker-compose.yml'>docker-compose.yml</a></b></td>
					<td style='padding: 8px;'>- Defines the containerized environment for the application and its PostgreSQL database, orchestrating service dependencies, data persistence, and configuration<br>- Facilitates seamless deployment by ensuring the database is initialized and migrations are applied before launching the main application, thereby supporting reliable development and production workflows within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Facilitates the core functionality of the Jokes App by managing joke retrieval, storage, and API endpoints<br>- Integrates the database with server logic to serve random jokes, enabling seamless interaction between the backend data layer and frontend UI<br>- Ensures efficient data flow and supports the app’s interactive, click-to-reveal joke experience within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
					<td style='padding: 8px;'>- Defines the Tailwind CSS configuration to specify which files are scanned for class names, enabling optimized styling and purging unused styles<br>- It ensures that the styling framework integrates seamlessly with the projects HTML and JavaScript files, supporting a streamlined and efficient design system within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the core server setup for the jokes application, enabling API endpoints to serve and manage joke data<br>- Integrates Express for routing, Prisma for database interactions, and middleware for logging and CORS, forming the backbone that supports data retrieval, creation, and overall application functionality within the architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/src/db.ts'>db.ts</a></b></td>
					<td style='padding: 8px;'>- Establishes a centralized Prisma client instance to facilitate database interactions across the application<br>- It enables seamless, type-safe communication with the database, supporting data querying, manipulation, and management within the broader architecture<br>- This setup ensures consistent database access and simplifies connection handling throughout the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/src/app.ts'>app.ts</a></b></td>
					<td style='padding: 8px;'>- Defines the core Express application setup, integrating middleware for logging, CORS, and JSON parsing<br>- Serves static frontend assets and establishes API routing for jokes-related endpoints<br>- Includes a health check endpoint to monitor server status, forming the central entry point that orchestrates request handling and connects the backend API with the frontend interface within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/src/index.ts'>index.ts</a></b></td>
					<td style='padding: 8px;'>- Initialize and launch the server by configuring environment variables and setting up the application to listen on a specified port<br>- It serves as the entry point, orchestrating the startup process and ensuring the application is accessible, thereby integrating configuration management with the core server initialization within the overall project architecture.</td>
				</tr>
			</table>
			<!-- controllers Submodule -->
			<details>
				<summary><b>controllers</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.controllers</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/src/controllers/jokesController.ts'>jokesController.ts</a></b></td>
							<td style='padding: 8px;'>- Facilitates retrieval of a random joke by handling incoming requests and coordinating with the joke service<br>- Integrates seamlessly into the applications architecture by serving as the controller responsible for delivering joke data to clients, ensuring proper response formatting and error handling within the API layer.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- routes Submodule -->
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.routes</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/src/routes/jokes.ts'>jokes.ts</a></b></td>
							<td style='padding: 8px;'>- Defines the routing logic for joke-related endpoints within the application, specifically handling requests for random jokes<br>- Integrates with the central Express server architecture to facilitate user interactions with the jokes feature, enabling seamless retrieval of humorous content<br>- Serves as a key component in the API layer, connecting client requests to the joke generation functionality.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- services Submodule -->
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.services</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/src/services/jokesService.ts'>jokesService.ts</a></b></td>
							<td style='padding: 8px;'>- Provides functionality to retrieve a random joke from the database, supporting the applications core entertainment feature<br>- It integrates with the database layer to fetch a single, randomly selected joke, enabling dynamic content delivery within the overall architecture<br>- This service underpins user engagement by supplying diverse, unpredictable humor content.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- prisma Submodule -->
	<details>
		<summary><b>prisma</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ prisma</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/prisma/jokes.json'>jokes.json</a></b></td>
					<td style='padding: 8px;'>- This code file, located at <code>prisma/jokes.json</code>, serves as a centralized repository of joke data within the project<br>- Its primary purpose is to provide a structured collection of humorous content that can be utilized across the application to enhance user engagement, entertainment, or onboarding experiences<br>- By maintaining jokes in a dedicated JSON file, the project ensures easy management, scalability, and integration of diverse joke types, supporting the overall architectures goal of delivering dynamic and lively content to end-users.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/prisma/seed.mjs'>seed.mjs</a></b></td>
					<td style='padding: 8px;'>- Seeds the database with a collection of jokes from a local JSON file, ensuring the joke data is populated and up-to-date within the applications data layer<br>- Facilitates initial setup and testing by providing a consistent dataset, supporting the overall architectures focus on data management and retrieval for the joke-related features.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/jokes-platform/blob/master/prisma/schema.prisma'>schema.prisma</a></b></td>
					<td style='padding: 8px;'>- Defines the database schema for storing jokes, including fields for type, setup, and punchline, with indexing to optimize query performance<br>- Serves as the foundational data model within the overall architecture, enabling structured storage and retrieval of joke data for the application<br>- Facilitates seamless integration between the application logic and the PostgreSQL database.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

<a id="getting-started"></a>

## 🚀 Getting Started

<a id="prerequisites"></a>

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm
- **Container Runtime:** Docker

<a id="installation"></a>

### ⚙️ Installation

Build jokes-platform from the source and install dependencies:

1. **Clone the repository:**

   ```sh
   ❯ git clone https://github.com/MA1002643/jokes-platform
   ```

2. **Navigate to the project directory:**

   ```sh
   ❯ cd jokes-platform
   ```

3. **Install the dependencies:**

**Using [docker](https://www.docker.com/):**

```sh
❯ docker build -t MA1002643/jokes-platform .
```

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

<a id="usage"></a>

### 💻 Usage

Run the project with:

**Using [docker](https://www.docker.com/):**

```sh
docker run -it {image_name}
```

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

<a id="testing"></a>

### 🧪 Testing

Jokes-platform uses the {**test_framework**} test framework. Run the test suite with:

**Using [docker](https://www.docker.com/):**

```sh
echo 'INSERT-TEST-COMMAND-HERE'
```

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<a id="learning-outcomes"></a>

## 🎓 Learning Outcomes

- Designed and developed a **full-stack jokes platform** that delivers randomised and categorised jokes from a PostgreSQL database, gaining practical experience in **backend API design** and **frontend integration**.
- Implemented a **TypeScript-based Express server** with structured routes, controllers, and Prisma ORM — strengthening understanding of **type-safe backend development** and **database schema management**.
- Utilised **Prisma** to define models, perform migrations, and seed data efficiently, improving proficiency in **ORM workflows**, **data modeling**, and **PostgreSQL integration**.
- Configured a **Docker-based development environment** with PostgreSQL containers, enhancing skills in **containerisation**, **service orchestration**, and **local database setup**.
- Built a **minimal frontend** using **HTML**, **Tailwind CSS (CDN)**, and **jQuery**, allowing users to fetch and display jokes interactively — refining knowledge of **DOM manipulation** and **asynchronous JavaScript (AJAX)**.
- Ensured **code quality and consistency** by integrating **ESLint**, **Prettier**, and **Jest**, gaining practical insight into **linting**, **formatting**, and **unit testing** for Node.js projects.
- Enhanced project maintainability by applying a **modular folder structure** separating routes, controllers, and utilities — promoting scalability and clean code architecture.
- Practiced **error handling**, **input validation**, and **logging techniques** to ensure the reliability and robustness of API endpoints.
- Strengthened **version control and collaboration skills** using GitHub for source management, documentation, and CI readiness.
- Developed a strong understanding of **modern backend ecosystems** (TypeScript, Prisma, Docker, PostgreSQL) and **lightweight frontend integration**, building confidence in delivering complete and production-ready web solutions.

---

<a id="roadmap"></a>

## 📈 Roadmap

- [ ] **`Task 1`**: Implement feature one.
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

<a id="contributors"></a>

## 🤝 Contributors

<!-- CONTRIBUTORS:START -->

<!-- CONTRIBUTORS:END -->

---

<a id="acknowledgment"></a>

## ✨ Acknowledgments

- Data seeding based on the **Official Joke API** JSON format and community contributions — thanks to its maintainers and contributors for an accessible, well-structured jokes dataset.
- Built with a pragmatic stack: **Node.js + Express**, **TypeScript**, **Prisma**, and **PostgreSQL** (via **Docker Compose**) — gratitude to these ecosystems for their stellar docs and tooling that made schema-first development, migrations, and local DB setup straightforward.
- Frontend kept intentionally lightweight with **static HTML**, **Tailwind CSS (CDN)**, and **jQuery** for a simple click-to-reveal UX — thanks to the Tailwind and jQuery communities for battle-tested utilities that speed up prototyping.
- Developer experience powered by **tsx** (ESM-friendly TypeScript runner), plus **ESLint**, **Prettier**, and **Jest** for a smooth dev loop, consistent style, and test scaffolding.
- Appreciation to the broader **open-source community** for libraries, examples, and discussions that influenced the project’s structure and seeding flow.

---

<a id="license"></a>

## 📜 License

This project is licensed under the **[MIT License](https://github.com/MA1002643/jokes-platform/blob/main/LICENSE)**. See the **[LICENSE](https://choosealicense.com/licenses/)** file for full details.

#

<p align="center">
  <strong>© 2025 Muhammad Abdullah</strong><br>
  Developed with 💙 using JavaScript, TypeScript, HTML, Dockerfile and CSS<br>
  <a href="#top"><img alt="Back to Top" src="https://img.shields.io/badge/Back_to_Top-0A0A0A?style=for-the-badge">
</a>
</p>
