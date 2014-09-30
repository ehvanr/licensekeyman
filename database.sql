-- Evan Reichard
-- September 2014

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

DROP DATABASE IF EXISTS `licensekeyman`;
CREATE DATABASE IF NOT EXISTS `licensekeyman` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `licensekeyman`;

DROP TABLE IF EXISTS `applicationkeys`;
CREATE TABLE IF NOT EXISTS `applicationkeys` (
  `Key` varchar(50) NOT NULL,
  `ApplicationID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserID` int(11) unsigned DEFAULT NULL,
  `InUse` tinyint(1) NOT NULL DEFAULT '0',
  `Issued` date DEFAULT NULL,
  `Expires` date DEFAULT NULL,
  PRIMARY KEY (`Key`,`ApplicationID`),
  KEY `ApplicationID` (`ApplicationID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `ApplicationID` FOREIGN KEY (`ApplicationID`) REFERENCES `applications` (`ApplicationID`),
  CONSTRAINT `UserID` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `applications`;
CREATE TABLE IF NOT EXISTS `applications` (
  `ApplicationID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ApplicationName` varchar(50) NOT NULL,
  PRIMARY KEY (`ApplicationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `UserID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserName` varchar(50) NOT NULL,
  `UserEmail` varchar(50) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;