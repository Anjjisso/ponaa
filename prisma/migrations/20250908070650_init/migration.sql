-- CreateTable
CREATE TABLE `User` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `role` ENUM('GURU', 'SISWA') NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guru` (
    `id_guru` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(500) NOT NULL,
    `nip` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `Guru_user_id_key`(`user_id`),
    PRIMARY KEY (`id_guru`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Siswa` (
    `id_siswa` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(500) NOT NULL,
    `nisn` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `kelas_id` INTEGER NOT NULL,

    UNIQUE INDEX `Siswa_id_user_key`(`id_user`),
    PRIMARY KEY (`id_siswa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kelas` (
    `id_kelas` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kelas` VARCHAR(100) NOT NULL,
    `jurusan` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_kelas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Absen` (
    `id_absen` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATETIME(3) NOT NULL,
    `status` VARCHAR(100) NOT NULL,
    `user_guru` INTEGER NOT NULL,
    `user_siswa` INTEGER NOT NULL,

    PRIMARY KEY (`id_absen`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kategori_Poin` (
    `id_kategori` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(100) NOT NULL,
    `tipe` VARCHAR(191) NOT NULL,
    `nilai_default` INTEGER NOT NULL,

    PRIMARY KEY (`id_kategori`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Poin` (
    `id_poin` INTEGER NOT NULL AUTO_INCREMENT,
    `jumlah_poin` INTEGER NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `user_siswa` INTEGER NOT NULL,
    `kategori_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_poin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Guru` ADD CONSTRAINT `Guru_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Siswa` ADD CONSTRAINT `Siswa_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Siswa` ADD CONSTRAINT `Siswa_kelas_id_fkey` FOREIGN KEY (`kelas_id`) REFERENCES `Kelas`(`id_kelas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absen` ADD CONSTRAINT `Absen_user_guru_fkey` FOREIGN KEY (`user_guru`) REFERENCES `Guru`(`id_guru`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absen` ADD CONSTRAINT `Absen_user_siswa_fkey` FOREIGN KEY (`user_siswa`) REFERENCES `Siswa`(`id_siswa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Poin` ADD CONSTRAINT `Poin_user_siswa_fkey` FOREIGN KEY (`user_siswa`) REFERENCES `Siswa`(`id_siswa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Poin` ADD CONSTRAINT `Poin_kategori_id_fkey` FOREIGN KEY (`kategori_id`) REFERENCES `Kategori_Poin`(`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
