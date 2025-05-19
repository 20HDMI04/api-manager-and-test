/*
  Warnings:

  - Added the required column `cover` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `published` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `cover` LONGTEXT NOT NULL,
    DROP COLUMN `published`,
    ADD COLUMN `published` DATETIME(3) NOT NULL;
