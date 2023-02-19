/*
  Warnings:

  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Article";

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "readTime" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pageName" TEXT DEFAULT '',
    "keywords" TEXT DEFAULT 'auto transport company, car shipping company, car shipping companies, companies that ship cars, auto transport companies, car transport companies, best car shipping company, best company to ship a car, car moving companies, car hauling companies, auto shipping companies, vehicle transport company, vehicle transportation company, safeeds, safeeds transport, safeeds transport inc, vehicle shipping, new york auto shipping',

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "readTime" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pageName" TEXT DEFAULT '',
    "keywords" TEXT DEFAULT 'auto transport company, car shipping company, car shipping companies, companies that ship cars, auto transport companies, car transport companies, best car shipping company, best company to ship a car, car moving companies, car hauling companies, auto shipping companies, vehicle transport company, vehicle transportation company, safeeds, safeeds transport, safeeds transport inc, vehicle shipping, new york auto shipping',

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "readTime" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pageName" TEXT DEFAULT '',
    "keywords" TEXT DEFAULT 'auto transport company, car shipping company, car shipping companies, companies that ship cars, auto transport companies, car transport companies, best car shipping company, best company to ship a car, car moving companies, car hauling companies, auto shipping companies, vehicle transport company, vehicle transportation company, safeeds, safeeds transport, safeeds transport inc, vehicle shipping, new york auto shipping',

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "readTime" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pageName" TEXT DEFAULT '',
    "keywords" TEXT DEFAULT 'auto transport company, car shipping company, car shipping companies, companies that ship cars, auto transport companies, car transport companies, best car shipping company, best company to ship a car, car moving companies, car hauling companies, auto shipping companies, vehicle transport company, vehicle transportation company, safeeds, safeeds transport, safeeds transport inc, vehicle shipping, new york auto shipping',

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);
