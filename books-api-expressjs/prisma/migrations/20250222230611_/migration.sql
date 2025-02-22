/*
  Warnings:

  - You are about to drop the column `autorId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `editoraId` on the `Book` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisherId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_autorId_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_editoraId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "autorId",
DROP COLUMN "editoraId",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "publisherId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
