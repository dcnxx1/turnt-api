/*
  Warnings:

  - You are about to drop the column `playlist_id` on the `Turn` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_turn_id_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_comment_id_fkey`;

-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_turn_id_fkey`;

-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Playlist` DROP FOREIGN KEY `Playlist_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Turn` DROP FOREIGN KEY `Turn_playlist_id_fkey`;

-- AlterTable
ALTER TABLE `Turn` DROP COLUMN `playlist_id`;

-- DropTable
DROP TABLE `Comment`;

-- DropTable
DROP TABLE `Like`;

-- DropTable
DROP TABLE `Playlist`;
