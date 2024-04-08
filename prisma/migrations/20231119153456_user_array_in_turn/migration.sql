-- DropForeignKey
ALTER TABLE `Turn` DROP FOREIGN KEY `Turn_artist_id_fkey`;

-- CreateTable
CREATE TABLE `_TurnToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TurnToUser_AB_unique`(`A`, `B`),
    INDEX `_TurnToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_TurnToUser` ADD CONSTRAINT `_TurnToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Turn`(`turn_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TurnToUser` ADD CONSTRAINT `_TurnToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
