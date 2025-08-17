# Jokes App

A tiny full-stack app that imports jokes from the official_joke_api JSON, stores them in a database, and serves them to a clean UI. Click to reveal the punchline; click again for a new random joke.

- **Backend:** Node.js + Express
- **ORM:** Prisma
- **DB:** PostgreSQL (via Docker)
- **Frontend:** Static HTML + Tailwind (CDN) + jQuery
- **Dev runner:** `tsx` (TypeScript, ESM-friendly)

---

## Demo behavior

- `GET /api/jokes/random` → returns one random joke: `{ id, type, setup, punchline }`
- UI at `http://localhost:3000/`:
  - First click shows punchline
  - Second click fetches the next random joke

---

## Prerequisites

- **Node.js 20+** (recommended)
- **npm** (comes with Node)
- **Docker Desktop** (for PostgreSQL)
- **Git**

> If you cannot use Docker, there’s a SQLite fallback guide at the end.

---

## 1) Clone the repo

````bash
git clone https://github.com/MA1002643/jokes-app.git
cd jokes-app

## 2) Environment variables

First, create a `.env` file based on the provided example:

```bash
cp .env.example .env

Then open .env and add the following:

# Database connection string
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/jokesdb?schema=public"

# Port the Express server will run on
PORT=3000

## 3) Start PostgreSQL (Docker)

From the project root, run:

```bash
docker-compose up -d

Verify the database is running

run: "docker ps" in the terminal.

## 4) Install dependencies

Once the database is running, install the Node.js dependencies:

```bash
npm install

## 5) Prisma: generate client & run migrations

After installing dependencies, you need to generate the Prisma client and run the database migrations to create the tables.

Run the following commands:

```bash
# Generate the Prisma client
npx prisma generate

# Run migrations and apply them to the database
npx prisma migrate dev --name init

## 6) Seed the database

Run:

```bash
npx prisma db seed

## 7) Run the app (development)

Start the server in development mode:

```bash
npm run dev

## Project Folder

prisma/
  schema.prisma        # Prisma data model (PostgreSQL provider)
  jokes.json           # Source data for seeding (copied from brief)
  seed.mjs             # ESM seed script (no ts-node needed)
src/
  app.ts               # Express app (routes, middleware, static hosting)
  index.ts             # Server entrypoint (reads PORT, starts app)
  db.ts                # Prisma client init
  routes/jokes.ts      # /api/jokes/random route
  controllers/jokesController.ts
  services/jokesService.ts
public/
  index.html           # UI (Tailwind via CDN + jQuery)
  main.js              # Click-to-reveal logic, fetches random jokes
.env.example
docker-compose.yml     # Postgres service
Dockerfile             # Containerize the app (optional)
tsconfig.json          # TypeScript config (ESM-friendly, NodeNext)
jest.config.js         # (tests optional)
.eslintrc.json         # Linting config
.prettierrc            # Formatting config
````
