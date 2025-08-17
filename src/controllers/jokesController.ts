import { Request, Response } from "express";
import { getRandomJoke } from "../services/jokesService.js";

export async function randomJoke(req: Request, res: Response) {
  const joke = await getRandomJoke();
  if (!joke) return res.status(404).json({ error: "No jokes found" });
  res.json({
    id: joke.id,
    type: joke.type,
    setup: joke.setup,
    punchline: joke.punchline,
  });
}
