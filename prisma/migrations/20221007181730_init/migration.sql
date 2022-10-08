-- DropForeignKey
ALTER TABLE `single` DROP FOREIGN KEY `Single_albumId_fkey`;

-- DropForeignKey
ALTER TABLE `single` DROP FOREIGN KEY `Single_artistId_fkey`;

-- AlterTable
ALTER TABLE `single` MODIFY `artistId` VARCHAR(191) NULL,
    MODIFY `albumId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Single` ADD CONSTRAINT `Single_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `Artist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Single` ADD CONSTRAINT `Single_albumId_fkey` FOREIGN KEY (`albumId`) REFERENCES `Album`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
