/*
  Warnings:

  - You are about to drop the column `startAt` on the `Turn` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Turn` DROP COLUMN `startAt`,
    ADD COLUMN `impressionEnd` INTEGER NULL,
    ADD COLUMN `impressionStart` INTEGER NULL;
