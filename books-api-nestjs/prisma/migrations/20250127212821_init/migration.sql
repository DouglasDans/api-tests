-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Editora" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Editora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "isbn" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL,
    "edicao" TEXT NOT NULL,
    "autorId" INTEGER NOT NULL,
    "editoraId" INTEGER NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Editora_cnpj_key" ON "Editora"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Livro_isbn_key" ON "Livro"("isbn");

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_editoraId_fkey" FOREIGN KEY ("editoraId") REFERENCES "Editora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
