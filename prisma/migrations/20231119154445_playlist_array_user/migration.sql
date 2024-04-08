/*
  Warnings:

  - You are about to drop the column `playlist_id` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_playlist_id_fkey`;

-- AlterTable
ALTER TABLE `Playlist` ADD COLUMN `user_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `playlist_id`;

-- AddForeignKey
ALTER TABLE `Playlist` ADD CONSTRAINT `Playlist_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
