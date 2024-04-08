/*
  Warnings:

  - You are about to drop the column `playlist_id` on the `Turn` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Turn` DROP FOREIGN KEY `Turn_playlist_id_fkey`;

-- AlterTable
ALTER TABLE `Turn` DROP COLUMN `playlist_id`;

-- CreateTable
CREATE TABLE `_PlaylistToTurn` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PlaylistToTurn_AB_unique`(`A`, `B`),
    INDEX `_PlaylistToTurn_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PlaylistToTurn` ADD CONSTRAINT `_PlaylistToTurn_A_fkey` FOREIGN KEY (`A`) REFERENCES `Playlist`(`playlist_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaylistToTurn` ADD CONSTRAINT `_PlaylistToTurn_B_fkey` FOREIGN KEY (`B`) REFERENCES `Turn`(`turn_id`) ON DELETE CASCADE ON UPDATE CASCADE;
