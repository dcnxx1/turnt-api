/*
  Warnings:

  - You are about to drop the `_PlaylistToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_PlaylistToUser` DROP FOREIGN KEY `_PlaylistToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PlaylistToUser` DROP FOREIGN KEY `_PlaylistToUser_B_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `playlist_id` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_PlaylistToUser`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_playlist_id_fkey` FOREIGN KEY (`playlist_id`) REFERENCES `Playlist`(`playlist_id`) ON DELETE SET NULL ON UPDATE CASCADE;
