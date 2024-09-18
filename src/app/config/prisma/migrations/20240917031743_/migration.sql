/*
  Warnings:

  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userDetailId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userId_fkey";

-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userId",
ADD COLUMN     "userDetailId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_userDetailId_key" ON "User"("userDetailId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userDetailId_fkey" FOREIGN KEY ("userDetailId") REFERENCES "UserDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
