/*
  Warnings:

  - You are about to drop the column `turn_id` on the `Playlist` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Playlist` DROP FOREIGN KEY `Playlist_turn_id_fkey`;

-- AlterTable
ALTER TABLE `Playlist` DROP COLUMN `turn_id`;

-- AlterTable
ALTER TABLE `Turn` ADD COLUMN `playlist_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Turn` ADD CONSTRAINT `Turn_playlist_id_fkey` FOREIGN KEY (`playlist_id`) REFERENCES `Playlist`(`playlist_id`) ON DELETE SET NULL ON UPDATE CASCADE;
