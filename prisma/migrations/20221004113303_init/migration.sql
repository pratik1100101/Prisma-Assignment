/*
  Warnings:

  - You are about to drop the column `episode` on the `podcast` table. All the data in the column will be lost.
  - Added the required column `episodes` to the `Podcast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `podcast` DROP COLUMN `episode`,
    ADD COLUMN `episodes` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `studio` MODIFY `deletedAt` DATETIME(3) NULL;
