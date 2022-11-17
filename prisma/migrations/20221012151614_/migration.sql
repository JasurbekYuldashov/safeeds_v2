/*
  Warnings:

  - Added the required column `name` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "name" TEXT NOT NULL;
