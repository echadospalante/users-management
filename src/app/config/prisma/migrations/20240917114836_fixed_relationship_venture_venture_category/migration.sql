/*
  Warnings:

  - You are about to drop the `_VentureCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_VentureCategory" DROP CONSTRAINT "_VentureCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_VentureCategory" DROP CONSTRAINT "_VentureCategory_B_fkey";

-- DropTable
DROP TABLE "_VentureCategory";

-- CreateTable
CREATE TABLE "XVentureVencureCategory" (
    "ventureId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "XVentureVencureCategory_pkey" PRIMARY KEY ("ventureId","categoryId")
);

-- CreateTable
CREATE TABLE "_XVentureVencureCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_XVentureVencureCategory_AB_unique" ON "_XVentureVencureCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_XVentureVencureCategory_B_index" ON "_XVentureVencureCategory"("B");

-- AddForeignKey
ALTER TABLE "XVentureVencureCategory" ADD CONSTRAINT "XVentureVencureCategory_ventureId_fkey" FOREIGN KEY ("ventureId") REFERENCES "Venture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "XVentureVencureCategory" ADD CONSTRAINT "XVentureVencureCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "VentureCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_XVentureVencureCategory" ADD CONSTRAINT "_XVentureVencureCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Venture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_XVentureVencureCategory" ADD CONSTRAINT "_XVentureVencureCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "VentureCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
