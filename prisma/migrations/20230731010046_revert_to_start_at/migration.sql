/*
  Warnings:

  - You are about to drop the column `impressionEnd` on the `Turn` table. All the data in the column will be lost.
  - You are about to drop the column `impressionStart` on the `Turn` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Turn` DROP COLUMN `impressionEnd`,
    DROP COLUMN `impressionStart`,
    ADD COLUMN `impressionStartAt` INTEGER NULL;
