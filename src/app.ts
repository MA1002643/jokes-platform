import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import jokesRouter from './routes/jokes.js';
import path from 'path';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// static frontend
app.use(express.static(path.join(process.cwd(), 'public')));

// api
app.use('/api/jokes', jokesRouter);

// health
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

export default app;
