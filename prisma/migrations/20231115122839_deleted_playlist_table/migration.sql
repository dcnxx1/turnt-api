/*
  Warnings:

  - You are about to drop the column `playlist_id` on the `Turn` table. All the data in the column will be lost.
  - You are about to drop the column `playlist_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Turn` DROP FOREIGN KEY `Turn_playlist_id_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_playlist_id_fkey`;

-- AlterTable
ALTER TABLE `Turn` DROP COLUMN `playlist_id`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `playlist_id`;

-- DropTable
DROP TABLE `Playlist`;
