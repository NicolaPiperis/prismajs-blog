/*
  Warnings:

  - Made the column `title` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `title` VARCHAR(100) NOT NULL,
    MODIFY `image` TEXT NULL;
