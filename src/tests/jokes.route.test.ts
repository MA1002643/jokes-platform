import request from "supertest";
import app from "../../src/app.js";
import { prisma } from "../../src/db.js";

beforeAll(async () => {
  await prisma.joke.deleteMany();
  await prisma.joke.create({
    data: { type: "general", setup: "Setup", punchline: "Punchline" },
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

it("GET /api/jokes/random works", async () => {
  const res = await request(app).get("/api/jokes/random");
  expect(res.status).toBe(200);
  expect(res.body.setup).toBe("Setup");
  expect(res.body.punchline).toBe("Punchline");
});
