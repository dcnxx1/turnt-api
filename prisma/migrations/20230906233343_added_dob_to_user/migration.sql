-- AlterTable
ALTER TABLE `EntryCodes` MODIFY `role` ENUM('User', 'Artist', 'Ghost', 'EstablishedArtist') NOT NULL DEFAULT 'User';

-- AlterTable
ALTER TABLE `User` ADD COLUMN `dob` DATETIME(3) NULL;
