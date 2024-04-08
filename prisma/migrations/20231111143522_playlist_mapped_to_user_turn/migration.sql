/*
  Warnings:

  - You are about to drop the column `user_id` on the `Turn` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Turn` DROP FOREIGN KEY `Turn_user_id_fkey`;

-- AlterTable
ALTER TABLE `Turn` DROP COLUMN `user_id`,
    ADD COLUMN `artist_id` VARCHAR(191) NULL,
    ADD COLUMN `playlist_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `playlist_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Playlist` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_playlist_id_fkey` FOREIGN KEY (`playlist_id`) REFERENCES `Playlist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turn` ADD CONSTRAINT `Turn_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turn` ADD CONSTRAINT `Turn_playlist_id_fkey` FOREIGN KEY (`playlist_id`) REFERENCES `Playlist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
