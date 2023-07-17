-- CreateTable
CREATE TABLE "Usuario" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "criado" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Postagem" (
    "post_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeId" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL,
    CONSTRAINT "Postagem_nomeId_fkey" FOREIGN KEY ("nomeId") REFERENCES "Usuario" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
