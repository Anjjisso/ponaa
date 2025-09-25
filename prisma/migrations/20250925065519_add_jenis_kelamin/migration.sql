/*
  Warnings:

  - Added the required column `jenis_kelamin` to the `Guru` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_kelamin` to the `Siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `guru` ADD COLUMN `jenis_kelamin` ENUM('LAKI_LAKI', 'PEREMPUAN') NOT NULL;

-- AlterTable
ALTER TABLE `siswa` ADD COLUMN `jenis_kelamin` ENUM('LAKI_LAKI', 'PEREMPUAN') NOT NULL;
