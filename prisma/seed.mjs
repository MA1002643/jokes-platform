import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import url from 'url';

const prisma = new PrismaClient();

// __dirname in ESM
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  // Expect a local copy of the jokes JSON at prisma/jokes.json
  const jsonPath = path.join(__dirname, 'jokes.json');
  if (!fs.existsSync(jsonPath)) {
    throw new Error(
      'Missing prisma/jokes.json. Please download the file from the brief and save it as prisma/jokes.json',
    );
  }

  const raw = fs.readFileSync(jsonPath, 'utf8');
  /** @type {{type:string, setup:string, punchline:string}[]} */
  const jokes = JSON.parse(raw);

  await prisma.joke.deleteMany();
  if (jokes.length > 0) {
    await prisma.joke.createMany({
      data: jokes.map((j) => ({
        type: j.type,
        setup: j.setup,
        punchline: j.punchline,
      })),
    });
  }

  const count = await prisma.joke.count();
  console.log(`✅ Seed complete. Inserted ${count} jokes.`);
}

main()
  .catch((err) => {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
