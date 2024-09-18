-- CreateTable
CREATE TABLE "XUserPreferences" (
    "userId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "XUserPreferences_pkey" PRIMARY KEY ("userId","categoryId")
);

-- CreateTable
CREATE TABLE "_XUserPreferences" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_XUserPreferences_AB_unique" ON "_XUserPreferences"("A", "B");

-- CreateIndex
CREATE INDEX "_XUserPreferences_B_index" ON "_XUserPreferences"("B");

-- AddForeignKey
ALTER TABLE "XUserPreferences" ADD CONSTRAINT "XUserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "XUserPreferences" ADD CONSTRAINT "XUserPreferences_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "VentureCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_XUserPreferences" ADD CONSTRAINT "_XUserPreferences_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_XUserPreferences" ADD CONSTRAINT "_XUserPreferences_B_fkey" FOREIGN KEY ("B") REFERENCES "VentureCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
