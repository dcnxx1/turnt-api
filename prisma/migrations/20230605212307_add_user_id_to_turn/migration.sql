/*
  Warnings:

  - You are about to alter the column `genre` on the `Turn` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Turn` ADD COLUMN `user_id` VARCHAR(191) NULL,
    MODIFY `genre` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Turn` ADD CONSTRAINT `Turn_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
