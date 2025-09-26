-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: pona
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('05d48195-2d92-4214-9e66-7db2535c335b','765d0d44ae2b5da808c32ec212de2604e215fb0ecbbd09c10ef1fb3d362e833b','2025-09-25 06:57:05.687','20250925065519_add_jenis_kelamin',NULL,NULL,'2025-09-25 06:57:05.637',1),('132542ca-e333-4dca-9f79-34d04cb62d49','4960d877e28007cdd51a01224c275b099aa7ca76308676ccce86000c72864204','2025-09-08 07:06:50.917','20250908070650_init',NULL,NULL,'2025-09-08 07:06:50.553',1),('46c7b104-897d-4b72-825c-51de05978341','8c045fe67e40ab4780bec6598492470be62fc420a90140708a251536f1a2bffd','2025-09-15 03:26:15.169','20250915032614_remove_kelas_model',NULL,NULL,'2025-09-15 03:26:14.974',1),('49591418-9408-4909-afc9-a3899c06e190','5c436343e8f90c979483fff3e2e677f141b8080287266f28f100358c2768949c',NULL,'20250926051645_init_enums','A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20250926051645_init_enums\n\nDatabase error code: 1265\n\nDatabase error:\nData truncated for column \'kelas\' at row 1\n\nPlease check the query number 2 from the migration file.\n\n   0: sql_schema_connector::apply_migration::apply_script\n           with migration_name=\"20250926051645_init_enums\"\n             at schema-engine\\connectors\\sql-schema-connector\\src\\apply_migration.rs:113\n   1: schema_commands::commands::apply_migrations::Applying migration\n           with migration_name=\"20250926051645_init_enums\"\n             at schema-engine\\commands\\src\\commands\\apply_migrations.rs:95\n   2: schema_core::state::ApplyMigrations\n             at schema-engine\\core\\src\\state.rs:236','2025-09-26 05:26:34.050','2025-09-26 05:16:45.885',0),('6062f270-bbb3-450f-8bac-5a980d872f8f','9c233f179b76bacd8c69e9ff698e714c859ed8207c69feac025f1fffb58837ed','2025-09-16 06:34:35.476','20250916063435_add_admin_role',NULL,NULL,'2025-09-16 06:34:35.446',1),('b836f66c-743c-4369-b254-6edc77e807c0','b7ed7aa8702bbf08522652337c96b82e91147e65c8989c99f1749e736c2bd429','2025-09-26 05:06:31.898','20250925065706_add_jenis_kelamin',NULL,NULL,'2025-09-26 05:06:31.845',1),('d9c64998-d04f-441e-ada0-aac0b8d2e507','b1ab4de22435a1077245824652fe0b33f12b19d20b25f2f96529c63e7887057d','2025-09-15 03:29:23.371','20250915032923_rename_kelas_id_to_kelas',NULL,NULL,'2025-09-15 03:29:23.347',1),('f2fc7796-786f-4cd6-b954-b084cae12f0f','7dede15d873f9a05cbca39ca71df1a063e7a40907c84690ac4902662213fc332','2025-09-22 01:39:03.193','20250922013903_add_total_poin_to_siswa',NULL,NULL,'2025-09-22 01:39:03.167',1),('f460a5da-4090-43d2-9762-d3de6a0dd987','5c436343e8f90c979483fff3e2e677f141b8080287266f28f100358c2768949c','2025-09-26 05:26:34.051','20250926051645_init_enums','',NULL,'2025-09-26 05:26:34.051',0),('f54a9a86-f313-4dda-8bee-34711c730d2e','7f7abccbd93b37eea9f531f50b559f4980a863ea9bc23208371610066dda3f1e','2025-09-18 00:19:27.078','20250918001927_add_foto_to_poin',NULL,NULL,'2025-09-18 00:19:27.022',1),('f7a09208-6d64-475f-9f10-971a4ba57c28','a58b14f6e0ce3378be8c326805f82e65ccf3983fbef3b61f6baf926279098bb2','2025-09-15 02:42:59.759','20250915024259_remove_tipe_from_kategori_poin',NULL,NULL,'2025-09-15 02:42:59.731',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guru`
--

DROP TABLE IF EXISTS `guru`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guru` (
  `id_guru` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nip` int NOT NULL,
  `user_id` int NOT NULL,
  `jenis_kelamin` enum('LAKI_LAKI','PEREMPUAN') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_guru`),
  UNIQUE KEY `Guru_user_id_key` (`user_id`),
  CONSTRAINT `Guru_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guru`
--

LOCK TABLES `guru` WRITE;
/*!40000 ALTER TABLE `guru` DISABLE KEYS */;
INSERT INTO `guru` VALUES (1,'Fitri',1234,1,'LAKI_LAKI'),(2,'Anjisso',2345,2,'LAKI_LAKI'),(3,'kania',6789,10,'LAKI_LAKI');
/*!40000 ALTER TABLE `guru` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kategori_poin`
--

DROP TABLE IF EXISTS `kategori_poin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kategori_poin` (
  `id_kategori` int NOT NULL AUTO_INCREMENT,
  `nama_kategori` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nilai_default` int NOT NULL,
  PRIMARY KEY (`id_kategori`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategori_poin`
--

LOCK TABLES `kategori_poin` WRITE;
/*!40000 ALTER TABLE `kategori_poin` DISABLE KEYS */;
INSERT INTO `kategori_poin` VALUES (1,'Kedisiplinan',10),(2,'Tepat Waktu',10);
/*!40000 ALTER TABLE `kategori_poin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poin`
--

DROP TABLE IF EXISTS `poin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poin` (
  `id_poin` int NOT NULL AUTO_INCREMENT,
  `jumlah_poin` int NOT NULL,
  `tanggal` datetime(3) NOT NULL,
  `user_siswa` int NOT NULL,
  `kategori_id` int NOT NULL,
  `foto` longblob,
  PRIMARY KEY (`id_poin`),
  KEY `Poin_user_siswa_fkey` (`user_siswa`),
  KEY `Poin_kategori_id_fkey` (`kategori_id`),
  CONSTRAINT `Poin_kategori_id_fkey` FOREIGN KEY (`kategori_id`) REFERENCES `kategori_poin` (`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Poin_user_siswa_fkey` FOREIGN KEY (`user_siswa`) REFERENCES `siswa` (`id_siswa`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poin`
--

LOCK TABLES `poin` WRITE;
/*!40000 ALTER TABLE `poin` DISABLE KEYS */;
INSERT INTO `poin` VALUES (10,10,'2025-09-22 06:14:03.464',1,2,NULL),(11,10,'2025-09-22 06:14:15.827',1,1,NULL),(12,10,'2025-09-22 06:15:32.266',1,2,NULL),(13,10,'2025-09-23 00:44:30.318',1,2,NULL),(14,10,'2025-09-23 00:47:42.603',1,1,NULL),(15,10,'2025-09-23 00:52:12.873',1,1,NULL);
/*!40000 ALTER TABLE `poin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `siswa`
--

DROP TABLE IF EXISTS `siswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `siswa` (
  `id_siswa` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nisn` int NOT NULL,
  `id_user` int NOT NULL,
  `kelas` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_poin` int NOT NULL DEFAULT '0',
  `jenis_kelamin` enum('LAKI_LAKI','PEREMPUAN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'LAKI_LAKI',
  PRIMARY KEY (`id_siswa`),
  UNIQUE KEY `Siswa_id_user_key` (`id_user`),
  CONSTRAINT `Siswa_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `siswa`
--

LOCK TABLES `siswa` WRITE;
/*!40000 ALTER TABLE `siswa` DISABLE KEYS */;
INSERT INTO `siswa` VALUES (1,'Ridho Tangguh Tambayong',234567,12,'XI',80,'LAKI_LAKI'),(2,'Fitri',12345678,13,'XI',0,'PEREMPUAN');
/*!40000 ALTER TABLE `siswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('GURU','SISWA','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'fitri@gmail.com','$2b$10$dGon/p9x0MAQk8tNlyBjLu9sVXX0u1DsGaz/8IZjvyDaX/aHmuzy.','GURU'),(2,'ibnu@gmail.com','$2b$10$nsGxTVkBygsdwg1TDd9Zcu4SX1XaIJmNDUgtsbnZZGu2gOUl77L12','GURU'),(10,'kania@gmail.com','$2b$10$KD3o2Jd.5k1AILAXDd53v.DkY2mcoyij0qECZ48x0JlJ.vJPo/qzy','GURU'),(11,'redo@gmail.com','$2b$10$5rrffCQF42uK2bZ94ahFGuqBsEtQclPsbF5ZlB/z2ScFIRWHCpREm','ADMIN'),(12,'ridho@gmail.com','$2b$10$GlGF7WAfg3ikMV4wTX5qq.YOt5g/Zh7NIE9uRFgIWUmsyt.KQ2UQu','SISWA'),(13,'Fitri@gmial.com','$2b$10$bWPizP73CM9AjWh5AmLnK.9IbS.T9s2m3SWkuKk38ignVyyp8UBNG','SISWA');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-26 13:33:50
