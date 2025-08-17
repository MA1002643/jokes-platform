-- CreateTable
CREATE TABLE "public"."Joke" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "setup" TEXT NOT NULL,
    "punchline" TEXT NOT NULL,

    CONSTRAINT "Joke_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Joke_type_idx" ON "public"."Joke"("type");
