/*
  Warnings:

  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Comment` table. All the data in the column will be lost.
  - The primary key for the `Like` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Like` table. All the data in the column will be lost.
  - The primary key for the `Playlist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Playlist` table. All the data in the column will be lost.
  - The primary key for the `Turn` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Turn` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `comment_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `like_id` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playlist_id` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turn_id` to the `Turn` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `User` table without a default value. This is not possible if the table is not empty.

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

-- DropForeignKey
ALTER TABLE `Turn` DROP FOREIGN KEY `Turn_user_id_fkey`;

-- AlterTable
ALTER TABLE `Comment` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `comment_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`comment_id`);

-- AlterTable
ALTER TABLE `Like` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `like_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`like_id`);

-- AlterTable
ALTER TABLE `Playlist` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `playlist_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`playlist_id`);

-- AlterTable
ALTER TABLE `Turn` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `turn_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`turn_id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `Role`,
    DROP COLUMN `id`,
    ADD COLUMN `role` VARCHAR(191) NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- AddForeignKey
ALTER TABLE `Turn` ADD CONSTRAINT `Turn_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turn` ADD CONSTRAINT `Turn_playlist_id_fkey` FOREIGN KEY (`playlist_id`) REFERENCES `Playlist`(`playlist_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Playlist` ADD CONSTRAINT `Playlist_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_turn_id_fkey` FOREIGN KEY (`turn_id`) REFERENCES `Turn`(`turn_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_comment_id_fkey` FOREIGN KEY (`comment_id`) REFERENCES `Comment`(`comment_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_turn_id_fkey` FOREIGN KEY (`turn_id`) REFERENCES `Turn`(`turn_id`) ON DELETE SET NULL ON UPDATE CASCADE;
