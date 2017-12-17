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
  `Date` date DEFAULT NULL,
  `Section` int(11) NOT NULL,
  `Period` int(11) NOT NULL,
  `SignUpStartTime` time NOT NULL,
  `SignUpEndTime` time NOT NULL,
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
INSERT INTO `coursescheduletb` VALUES (1,10001,'2017-09-18',1,3,'09:45:00','09:55:00'),(2,10002,'2017-09-19',1,2,'09:45:00','09:55:00'),(3,10003,'2017-09-20',6,3,'13:25:00','13:35:00'),(4,10004,'2017-09-21',1,3,'09:45:00','09:55:00'),(5,10005,'2017-09-22',6,2,'13:25:00','13:35:00'),(6,10006,'2017-09-23',1,3,'09:45:00','09:55:00'),(7,10007,'2017-09-24',6,3,'13:25:00','13:35:00');
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
  `FirstWeek` date DEFAULT NULL,
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
INSERT INTO `coursetb` VALUES (10001,'软件工程',1,'清华大学','六教','413',38.32,83.56,20172018,'2017-09-18'),(10002,'微机设计',1,'清华大学','六教','422',38.32,83.56,20172018,'2017-09-18'),(10003,'有机结构',2,'清华大学','三教','011',34.34,83.11,20172018,'2017-09-18'),(10004,'物化性质',2,'清华大学','三教','222',34.34,83.11,20172018,'2017-09-18'),(10005,'微生物学',3,'清华大学','四教','313',38.31,83.23,20172018,'2017-09-18'),(10006,'生物制药',3,'清华大学','四教','115',38.31,83.23,20172018,'2017-09-18'),(10007,'组织结构',3,'清华大学','四教','113',38.31,83.23,20172018,'2017-09-18');
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
INSERT INTO `signingtb` VALUES (1,10004,201701024),(2,10001,201701021),(3,10001,201701021),(4,10003,201701022),(5,10002,201701025),(6,10005,201701025),(7,10006,201701026);
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
INSERT INTO `studenttb` VALUES (201701021,'其他','jywang','王同学','清华大学','计算机系'),(201701022,'其他','cdliu','刘同学','清华大学','化学系'),(201701023,'其他','mkzhao','赵同学','清华大学','生物系'),(201701024,'其他','ajqian','钱同学','清华大学','计算机系'),(201701025,'其他','jysun','孙同学','清华大学','生物系'),(201701026,'其他','jyli','李同学','清华大学','化学系');
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
INSERT INTO `teachertb` VALUES (1,'zyli','李老师','清华大学','计算机系'),(2,'swzhang','张老师','清华大学','化学系'),(3,'ghliu','刘老师','清华大学','生物系');
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

-- Dump completed on 2017-12-16 11:49:51
