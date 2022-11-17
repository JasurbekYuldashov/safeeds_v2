/*
  Warnings:

  - You are about to drop the column `broker` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "broker";

-- AlterTable
ALTER TABLE "Satisfied" ADD COLUMN     "broker" TEXT;
