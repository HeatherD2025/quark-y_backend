/*
  Warnings:

  - You are about to drop the column `content` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `articleTitle` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `articleUrl` on the `Comment` table. All the data in the column will be lost.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `articleId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_articleUrl_fkey";

-- DropForeignKey
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Article" DROP COLUMN "content",
ADD COLUMN     "body" TEXT;

-- AlterTable
ALTER TABLE "public"."Comment" DROP COLUMN "articleTitle",
DROP COLUMN "articleUrl",
ADD COLUMN     "articleId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Post_id_seq";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "role";

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "public"."Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
