/*
  Warnings:

  - Added the required column `body` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` ADD COLUMN `body` VARCHAR(191) NOT NULL;
