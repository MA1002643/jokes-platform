import { prisma } from "../../src/db.js";
import { getRandomJoke } from "../../src/services/jokesService.js";

beforeAll(async () => {
  await prisma.joke.deleteMany();
  await prisma.joke.createMany({
    data: [
      { type: "general", setup: "A", punchline: "B" },
      { type: "programming", setup: "C", punchline: "D" },
    ],
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

test("getRandomJoke returns a joke", async () => {
  const j = await getRandomJoke();
  expect(j).toBeTruthy();
  expect(j?.setup).toBeDefined();
  expect(j?.punchline).toBeDefined();
});
