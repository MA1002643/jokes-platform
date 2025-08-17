import { Router } from "express";
import { randomJoke } from "../controllers/jokesController.js";

const router = Router();
router.get("/random", randomJoke);

export default router;
