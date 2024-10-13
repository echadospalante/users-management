/*
  Warnings:

  - The values [VIDEO] on the enum `ContentType` will be removed. If these variants are still used in the database, this will fail.
  - The values [NEW_FOLLOWER] on the enum `NotificationType` will be removed. If these variants are still used in the database, this will fail.
  - The values [TEXTUAL,VIDEO,IMAGE] on the enum `PublicationType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userId` on the `EventDonation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `PublicationClap` table. All the data in the column will be lost.
  - You are about to drop the column `userDetailId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Venture` table. All the data in the column will be lost.
  - You are about to drop the column `ventureDetailId` on the `VenturePublication` table. All the data in the column will be lost.
  - You are about to drop the column `sponsorId` on the `VentureSponsorship` table. All the data in the column will be lost.
  - You are about to drop the column `subscriberId` on the `VentureSubscription` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[contactId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[detailId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[locationId]` on the table `Venture` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ventureId]` on the table `Venture` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[locationId]` on the table `VentureEvent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `donorDetailId` to the `EventDonation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userDetailId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userDetailId` to the `PublicationClap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `Venture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerDetailId` to the `Venture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ventureId` to the `Venture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `VentureEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detailId` to the `VenturePublication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sponsorDetailId` to the `VentureSponsorship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriberDetailId` to the `VentureSubscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ContentType_new" AS ENUM ('TEXT', 'IMAGE', 'VIDEOf', 'ANNOUNCEMENT', 'ACHIEVEMENT');
ALTER TABLE "PublicationContent" ALTER COLUMN "type" TYPE "ContentType_new" USING ("type"::text::"ContentType_new");
ALTER TYPE "ContentType" RENAME TO "ContentType_old";
ALTER TYPE "ContentType_new" RENAME TO "ContentType";
DROP TYPE "ContentType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "NotificationType_new" AS ENUM ('WELCOME', 'REGISTER_COMPLETED', 'ACCOUNT_VERIFIED', 'ACCOUNT_UNVERIFIED', 'ACCOUNT_LOCKED', 'ACCOUNT_UNLOCKED', 'LOGIN', 'NEW_SUBSCRIPTION', 'NEW_SPONSOR', 'NEW_DONATION', 'NEW_COMMENT');
ALTER TABLE "Notification" ALTER COLUMN "type" TYPE "NotificationType_new" USING ("type"::text::"NotificationType_new");
ALTER TYPE "NotificationType" RENAME TO "NotificationType_old";
ALTER TYPE "NotificationType_new" RENAME TO "NotificationType";
DROP TYPE "NotificationType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PublicationType_new" AS ENUM ('STANDARD', 'ANNOUNCEMENT', 'ACHIEVEMENT', 'PROMOTION', 'BEHIND_THE_SCENES');
ALTER TABLE "VenturePublication" ALTER COLUMN "type" TYPE "PublicationType_new" USING ("type"::text::"PublicationType_new");
ALTER TYPE "PublicationType" RENAME TO "PublicationType_old";
ALTER TYPE "PublicationType_new" RENAME TO "PublicationType";
DROP TYPE "PublicationType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_publicationId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "EventDonation" DROP CONSTRAINT "EventDonation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_ventureEventId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "PublicationClap" DROP CONSTRAINT "PublicationClap_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userDetailId_fkey";

-- DropForeignKey
ALTER TABLE "Venture" DROP CONSTRAINT "Venture_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "VenturePublication" DROP CONSTRAINT "VenturePublication_ventureDetailId_fkey";

-- DropForeignKey
ALTER TABLE "VentureSponsorship" DROP CONSTRAINT "VentureSponsorship_sponsorId_fkey";

-- DropForeignKey
ALTER TABLE "VentureSubscription" DROP CONSTRAINT "VentureSubscription_subscriberId_fkey";

-- DropIndex
DROP INDEX "User_userDetailId_key";

-- AlterTable
ALTER TABLE "EventDonation" DROP COLUMN "userId",
ADD COLUMN     "donorDetailId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "userId",
ADD COLUMN     "userDetailId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PublicationClap" DROP COLUMN "userId",
ADD COLUMN     "userDetailId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userDetailId",
ADD COLUMN     "contactId" TEXT,
ADD COLUMN     "detailId" TEXT;

-- AlterTable
ALTER TABLE "Venture" DROP COLUMN "ownerId",
ADD COLUMN     "locationId" TEXT NOT NULL,
ADD COLUMN     "ownerDetailId" TEXT NOT NULL,
ADD COLUMN     "ventureId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VentureEvent" ADD COLUMN     "locationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VenturePublication" DROP COLUMN "ventureDetailId",
ADD COLUMN     "detailId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VentureSponsorship" DROP COLUMN "sponsorId",
ADD COLUMN     "sponsorDetailId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VentureSubscription" DROP COLUMN "subscriberId",
ADD COLUMN     "subscriberDetailId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Location";

-- CreateTable
CREATE TABLE "UserContact" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "facebookUrl" TEXT NOT NULL,
    "linkedinUrl" TEXT NOT NULL,
    "twitterUrl" TEXT NOT NULL,
    "instagramUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicationComment" (
    "id" TEXT NOT NULL,
    "authorDetailId" TEXT NOT NULL,
    "publicationId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PublicationComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventLocation" (
    "id" TEXT NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "description" TEXT,

    CONSTRAINT "EventLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VentureLocation" (
    "id" TEXT NOT NULL,
    "ventureId" TEXT NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VentureLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VentureContact" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VentureContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_contactId_key" ON "User"("contactId");

-- CreateIndex
CREATE UNIQUE INDEX "User_detailId_key" ON "User"("detailId");

-- CreateIndex
CREATE UNIQUE INDEX "Venture_locationId_key" ON "Venture"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Venture_ventureId_key" ON "Venture"("ventureId");

-- CreateIndex
CREATE UNIQUE INDEX "VentureEvent_locationId_key" ON "VentureEvent"("locationId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "UserContact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "UserDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicationComment" ADD CONSTRAINT "PublicationComment_authorDetailId_fkey" FOREIGN KEY ("authorDetailId") REFERENCES "UserDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicationComment" ADD CONSTRAINT "PublicationComment_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "VenturePublication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventDonation" ADD CONSTRAINT "EventDonation_donorDetailId_fkey" FOREIGN KEY ("donorDetailId") REFERENCES "UserDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userDetailId_fkey" FOREIGN KEY ("userDetailId") REFERENCES "UserDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicationClap" ADD CONSTRAINT "PublicationClap_userDetailId_fkey" FOREIGN KEY ("userDetailId") REFERENCES "UserDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venture" ADD CONSTRAINT "Venture_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "VentureLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venture" ADD CONSTRAINT "Venture_ownerDetailId_fkey" FOREIGN KEY ("ownerDetailId") REFERENCES "UserDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venture" ADD CONSTRAINT "Venture_ventureId_fkey" FOREIGN KEY ("ventureId") REFERENCES "VentureContact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VentureEvent" ADD CONSTRAINT "VentureEvent_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "EventLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenturePublication" ADD CONSTRAINT "VenturePublication_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "VentureDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VentureSponsorship" ADD CONSTRAINT "VentureSponsorship_sponsorDetailId_fkey" FOREIGN KEY ("sponsorDetailId") REFERENCES "UserDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VentureSubscription" ADD CONSTRAINT "VentureSubscription_subscriberDetailId_fkey" FOREIGN KEY ("subscriberDetailId") REFERENCES "UserDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
