-- CreateTable
CREATE TABLE `Like` (
    `like_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `turn_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`like_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_turn_id_fkey` FOREIGN KEY (`turn_id`) REFERENCES `Turn`(`turn_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
