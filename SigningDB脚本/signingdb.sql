-- MySQL dump 10.13  Distrib 5.5.49, for Win32 (x86)
--
-- Host: localhost    Database: signingdb
-- ------------------------------------------------------
-- Server version	5.5.49

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coursescheduletb`
--

DROP TABLE IF EXISTS `coursescheduletb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coursescheduletb` (
  `id` int(11) NOT NULL,
  `Courseid` int(20) NOT NULL,
  `Date` datetime NOT NULL,
  `Section` int(11) NOT NULL,
  `Period` int(11) NOT NULL,
  `SignUpStartTime` datetime NOT NULL,
  `SignUpEndTime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Courseid` (`Courseid`),
  CONSTRAINT `coursescheduletb_ibfk_1` FOREIGN KEY (`Courseid`) REFERENCES `coursetb` (`Courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursescheduletb`
--

LOCK TABLES `coursescheduletb` WRITE;
/*!40000 ALTER TABLE `coursescheduletb` DISABLE KEYS */;
/*!40000 ALTER TABLE `coursescheduletb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coursetb`
--

DROP TABLE IF EXISTS `coursetb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coursetb` (
  `Courseid` int(20) NOT NULL,
  `CourseName` varchar(30) DEFAULT NULL,
  `Teacherid` int(20) NOT NULL,
  `SchoolName` varchar(30) NOT NULL,
  `TeachingBuilding` varchar(40) NOT NULL,
  `ClassRoom` varchar(30) NOT NULL,
  `Longitude` float(5,2) NOT NULL,
  `Latitude` float(5,2) NOT NULL,
  `Term` int(20) NOT NULL,
  `FirstWeek` datetime NOT NULL,
  PRIMARY KEY (`Courseid`),
  KEY `Teacherid` (`Teacherid`),
  CONSTRAINT `coursetb_ibfk_1` FOREIGN KEY (`Teacherid`) REFERENCES `teachertb` (`Teacherid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursetb`
--

LOCK TABLES `coursetb` WRITE;
/*!40000 ALTER TABLE `coursetb` DISABLE KEYS */;
/*!40000 ALTER TABLE `coursetb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signingscoretb`
--

DROP TABLE IF EXISTS `signingscoretb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `signingscoretb` (
  `id` int(11) NOT NULL,
  `Courseid` int(20) NOT NULL,
  `Studentid` int(20) NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Courseid` (`Courseid`),
  KEY `Studentid` (`Studentid`),
  CONSTRAINT `signingscoretb_ibfk_2` FOREIGN KEY (`Studentid`) REFERENCES `studenttb` (`Studentid`),
  CONSTRAINT `signingscoretb_ibfk_1` FOREIGN KEY (`Courseid`) REFERENCES `coursetb` (`Courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signingscoretb`
--

LOCK TABLES `signingscoretb` WRITE;
/*!40000 ALTER TABLE `signingscoretb` DISABLE KEYS */;
/*!40000 ALTER TABLE `signingscoretb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signingtb`
--

DROP TABLE IF EXISTS `signingtb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `signingtb` (
  `id` int(11) NOT NULL,
  `Courseid` int(20) NOT NULL,
  `Studentid` int(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Courseid` (`Courseid`),
  KEY `Studentid` (`Studentid`),
  CONSTRAINT `signingtb_ibfk_2` FOREIGN KEY (`Studentid`) REFERENCES `studenttb` (`Studentid`),
  CONSTRAINT `signingtb_ibfk_1` FOREIGN KEY (`Courseid`) REFERENCES `coursetb` (`Courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signingtb`
--

LOCK TABLES `signingtb` WRITE;
/*!40000 ALTER TABLE `signingtb` DISABLE KEYS */;
/*!40000 ALTER TABLE `signingtb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studenttb`
--

DROP TABLE IF EXISTS `studenttb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `studenttb` (
  `Studentid` int(20) NOT NULL,
  `Type` varchar(30) DEFAULT NULL,
  `Wechatid` varchar(30) DEFAULT NULL,
  `StudentName` varchar(30) DEFAULT NULL,
  `SchoolName` varchar(30) DEFAULT NULL,
  `Department` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Studentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studenttb`
--

LOCK TABLES `studenttb` WRITE;
/*!40000 ALTER TABLE `studenttb` DISABLE KEYS */;
/*!40000 ALTER TABLE `studenttb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachertb`
--

DROP TABLE IF EXISTS `teachertb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teachertb` (
  `Teacherid` int(20) NOT NULL DEFAULT '0',
  `Wechatid` varchar(30) DEFAULT NULL,
  `TeacherName` varchar(20) NOT NULL,
  `SchoolName` varchar(30) NOT NULL,
  `Department` varchar(30) NOT NULL,
  PRIMARY KEY (`Teacherid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachertb`
--

LOCK TABLES `teachertb` WRITE;
/*!40000 ALTER TABLE `teachertb` DISABLE KEYS */;
/*!40000 ALTER TABLE `teachertb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-14 20:34:14
