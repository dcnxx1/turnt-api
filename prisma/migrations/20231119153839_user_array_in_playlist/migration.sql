/*
  Warnings:

  - You are about to drop the column `user_id` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the `_TurnToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Playlist` DROP FOREIGN KEY `Playlist_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `_TurnToUser` DROP FOREIGN KEY `_TurnToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_TurnToUser` DROP FOREIGN KEY `_TurnToUser_B_fkey`;

-- DropIndex
DROP INDEX `Turn_artist_id_fkey` ON `Turn`;

-- AlterTable
ALTER TABLE `Playlist` DROP COLUMN `user_id`;

-- DropTable
DROP TABLE `_TurnToUser`;

-- CreateTable
CREATE TABLE `_PlaylistToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PlaylistToUser_AB_unique`(`A`, `B`),
    INDEX `_PlaylistToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Turn` ADD CONSTRAINT `Turn_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaylistToUser` ADD CONSTRAINT `_PlaylistToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Playlist`(`playlist_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlaylistToUser` ADD CONSTRAINT `_PlaylistToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
