/*
  Warnings:

  - A unique constraint covering the columns `[walletAccount]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "walletAccount" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_walletAccount_key" ON "User"("walletAccount");
