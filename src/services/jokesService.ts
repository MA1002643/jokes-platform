import { prisma } from "../db.js";

export async function getRandomJoke() {
  const count = await prisma.joke.count();
  if (count === 0) return null;
  const skip = Math.floor(Math.random() * count);
  const [joke] = await prisma.joke.findMany({ skip, take: 1 });
  return joke;
}
