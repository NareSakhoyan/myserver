-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: html-css-db
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id_players` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `birthday` date NOT NULL,
  `nationality` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `youtubeLinks` json NOT NULL,
  `image` json NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id_players`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'ASDASD','ASD','SDSAD','2020-05-12','ASD','ASDS','DS','DSD','SDASD','{}','{}','SAD'),(2,'asd','asd','female','2020-06-04','Andorran','Angola','asdasd','23414','sda@Edassa','[{\"id\": 0, \"value\": \"asdasd\"}, {\"id\": 1, \"value\": \"asdasd\"}, {\"id\": 2, \"value\": \"sdasd\"}]','{}','dsadasd'),(3,'asdas','dasdasd','female','2020-06-03','Argentinean','Aruba','asd','23124','asda@wdasdaasd','[{\"id\": 0, \"value\": \"asdsad\"}]','{}','asdasd'),(4,'sadasd','asdas','male','2020-06-03','Albanian','Aruba','asd','1232','3@ada','[{\"id\": 0, \"value\": \"sdasdasd\"}, {\"id\": 1, \"value\": \"asdasd\"}]','{}','asdasd'),(5,'asdasd','asd','female','2020-06-02','Argentinean','Antigua and Barbuda','asdasd','12434342','sad@asdad','[{\"id\": 0, \"value\": \"asdasd\"}, {\"id\": 1, \"value\": \"sfaf\"}, {\"id\": 2, \"value\": \"asf\"}, {\"id\": 3, \"value\": \"sdfsfdsf\"}, {\"id\": 4, \"value\": \"sdfsdf\"}]','{}','sdasdsd'),(6,'asdas','dsad','female','2020-06-04','Argentinean','Argentina','sdfsfdaf','432542534','sdfsd@asfsaf','[{\"id\": 0, \"value\": \"asdasdsad\"}, {\"id\": 1, \"value\": \"asdasdas\"}, {\"id\": 2, \"value\": \"dsadsd\"}]','{\"name\": \"images.jpg\", \"size\": 6758, \"type\": \"image/jpeg\", \"lastModified\": 1593606773394, \"lastModifiedDate\": \"2020-07-01T12:32:53.394Z\", \"webkitRelativePath\": \"\"}','asfsadfdsf');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-03 19:14:13
