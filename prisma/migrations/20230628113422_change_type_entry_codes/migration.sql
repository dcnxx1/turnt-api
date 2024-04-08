/*
  Warnings:

  - You are about to drop the column `type` on the `EntryCodes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `EntryCodes` DROP COLUMN `type`,
    ADD COLUMN `role` ENUM('User', 'Artist', 'Ghost') NOT NULL DEFAULT 'User';
