/*
  Warnings:

  - The primary key for the `ChatMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ChatMember` table. All the data in the column will be lost.
  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Comment` table. All the data in the column will be lost.
  - The primary key for the `Like` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Like` table. All the data in the column will be lost.
  - The primary key for the `Message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Message` table. All the data in the column will be lost.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `body` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `Reply` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `Reply` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Reply` table. All the data in the column will be lost.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Role` table. All the data in the column will be lost.
  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Task` table. All the data in the column will be lost.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Team` table. All the data in the column will be lost.
  - The primary key for the `TeamMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TeamMember` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ChatType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chatMemberId` to the `ChatMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commentId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likeId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `messageId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `replyId` to the `Reply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Reply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamMemberId` to the `TeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ChatMember` DROP FOREIGN KEY `ChatMember_chatId_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMember` DROP FOREIGN KEY `ChatMember_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_postId_fkey`;

-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_chatId_fkey`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Reply` DROP FOREIGN KEY `Reply_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Reply` DROP FOREIGN KEY `Reply_commentId_fkey`;

-- DropForeignKey
ALTER TABLE `Role` DROP FOREIGN KEY `Role_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_responsibleId_fkey`;

-- DropForeignKey
ALTER TABLE `TeamMember` DROP FOREIGN KEY `TeamMember_memberId_fkey`;

-- DropForeignKey
ALTER TABLE `TeamMember` DROP FOREIGN KEY `TeamMember_teamId_fkey`;

-- AlterTable
ALTER TABLE `ChatMember` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `chatMemberId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`chatMemberId`);

-- AlterTable
ALTER TABLE `Comment` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `commentId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`commentId`);

-- AlterTable
ALTER TABLE `Like` DROP PRIMARY KEY,
    DROP COLUMN `authorId`,
    DROP COLUMN `id`,
    ADD COLUMN `likeId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`likeId`);

-- AlterTable
ALTER TABLE `Message` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `messageId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`messageId`);

-- AlterTable
ALTER TABLE `Post` DROP PRIMARY KEY,
    DROP COLUMN `body`,
    DROP COLUMN `id`,
    DROP COLUMN `title`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `likesCount` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `postId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`postId`);

-- AlterTable
ALTER TABLE `Project` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `projectId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`projectId`);

-- AlterTable
ALTER TABLE `Reply` DROP PRIMARY KEY,
    DROP COLUMN `authorId`,
    DROP COLUMN `id`,
    ADD COLUMN `replyId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`replyId`);

-- AlterTable
ALTER TABLE `Role` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `roleId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`roleId`);

-- AlterTable
ALTER TABLE `Task` DROP PRIMARY KEY,
    DROP COLUMN `authorId`,
    DROP COLUMN `id`,
    ADD COLUMN `taskId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`taskId`);

-- AlterTable
ALTER TABLE `Team` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `teamId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`teamId`);

-- AlterTable
ALTER TABLE `TeamMember` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `teamMemberId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`teamMemberId`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `userId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`userId`);

-- DropTable
DROP TABLE `ChatType`;

-- CreateTable
CREATE TABLE `Chat` (
    `chatId` INTEGER NOT NULL AUTO_INCREMENT,
    `chatType` VARCHAR(191) NOT NULL,
    `chatName` VARCHAR(191) NOT NULL,
    `chatOwner` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`chatId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`postId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `Comment`(`commentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`postId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_responsibleId_fkey` FOREIGN KEY (`responsibleId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`projectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamMember` ADD CONSTRAINT `TeamMember_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamMember` ADD CONSTRAINT `TeamMember_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`teamId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMember` ADD CONSTRAINT `ChatMember_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`chatId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMember` ADD CONSTRAINT `ChatMember_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`chatId`) ON DELETE RESTRICT ON UPDATE CASCADE;
