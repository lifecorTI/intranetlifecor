/*
  Warnings:

  - You are about to alter the column `content` on the `Nfe` table. The data in that column could be lost. The data in that column will be cast from `Xml` to `Unsupported("xml")`.

*/
-- AlterTable
ALTER TABLE "Nfe" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "content" SET DATA TYPE xml;
