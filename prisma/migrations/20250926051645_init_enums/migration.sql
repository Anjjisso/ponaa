/*
  Warnings:

  - You are about to alter the column `kelas` on the `siswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `guru` MODIFY `jenis_kelamin` ENUM('LAKI_LAKI', 'PEREMPUAN') NULL;

-- AlterTable
ALTER TABLE `siswa` ADD COLUMN `jurusan` ENUM('RPL', 'TKJ', 'DKV') NULL,
    MODIFY `kelas` ENUM('X', 'XI', 'XII') NULL,
    MODIFY `jenis_kelamin` ENUM('LAKI_LAKI', 'PEREMPUAN') NULL;
