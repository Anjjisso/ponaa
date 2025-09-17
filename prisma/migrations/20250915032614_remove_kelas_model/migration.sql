/*
  Warnings:

  - You are about to drop the `absen` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kelas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `absen` DROP FOREIGN KEY `Absen_user_guru_fkey`;

-- DropForeignKey
ALTER TABLE `absen` DROP FOREIGN KEY `Absen_user_siswa_fkey`;

-- DropForeignKey
ALTER TABLE `siswa` DROP FOREIGN KEY `Siswa_kelas_id_fkey`;

-- DropIndex
DROP INDEX `Siswa_kelas_id_fkey` ON `siswa`;

-- AlterTable
ALTER TABLE `siswa` MODIFY `kelas_id` VARCHAR(100) NOT NULL;

-- DropTable
DROP TABLE `absen`;

-- DropTable
DROP TABLE `kelas`;
