/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `title` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_articleUrl_fkey";

-- AlterTable
ALTER TABLE "public"."Post" ALTER COLUMN "title" SET NOT NULL;

-- DropTable
DROP TABLE "public"."Item";

-- CreateTable
CREATE TABLE "public"."Article" (
    "id" TEXT NOT NULL,
    "articleUrl" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_articleUrl_key" ON "public"."Article"("articleUrl");

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_articleUrl_fkey" FOREIGN KEY ("articleUrl") REFERENCES "public"."Article"("articleUrl") ON DELETE RESTRICT ON UPDATE CASCADE;
