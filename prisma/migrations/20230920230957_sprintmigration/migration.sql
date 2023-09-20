-- CreateTable
CREATE TABLE `Sprint` (
    `sprintId` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `term` DATETIME(3) NOT NULL,

    PRIMARY KEY (`sprintId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Team` ADD CONSTRAINT `Team_leaderId_fkey` FOREIGN KEY (`leaderId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
