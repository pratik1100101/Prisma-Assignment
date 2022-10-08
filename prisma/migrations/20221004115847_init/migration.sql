-- AlterTable
ALTER TABLE `album` MODIFY `credits` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `audiobook` MODIFY `credits` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `podcastepisode` MODIFY `credits` VARCHAR(191) NOT NULL;
