/*
  Warnings:

  - You are about to drop the column `start` on the `Satisfied` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Satisfied" DROP COLUMN "start",
ADD COLUMN     "star" DOUBLE PRECISION DEFAULT 5;
