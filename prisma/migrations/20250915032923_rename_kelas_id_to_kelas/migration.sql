/*
  Warnings:

  - You are about to drop the column `kelas_id` on the `siswa` table. All the data in the column will be lost.
  - Added the required column `kelas` to the `Siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `siswa` DROP COLUMN `kelas_id`,
    ADD COLUMN `kelas` VARCHAR(100) NOT NULL;
