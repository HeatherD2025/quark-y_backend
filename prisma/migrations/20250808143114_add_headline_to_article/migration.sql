/*
  Warnings:

  - Added the required column `content` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `headline` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Article" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "headline" TEXT NOT NULL,
ADD COLUMN     "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
