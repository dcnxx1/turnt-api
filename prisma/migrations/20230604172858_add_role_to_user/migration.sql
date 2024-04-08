/*
  Warnings:

  - You are about to alter the column `Role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `Role` VARCHAR(191) NULL;
