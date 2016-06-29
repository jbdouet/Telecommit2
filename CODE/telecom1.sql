-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2016 at 09:16 AM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `telecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `a_service`
--

DROP TABLE IF EXISTS `a_service`;
CREATE TABLE IF NOT EXISTS `a_service` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `category` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
CREATE TABLE IF NOT EXISTS `device` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` varchar(10) NOT NULL,
  `os` varchar(30) NOT NULL,
  `screen` varchar(30) NOT NULL,
  `capacity` varchar(30) NOT NULL,
  `ram` varchar(30) NOT NULL,
  `speed` varchar(30) NOT NULL,
  `network` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`id`, `name`, `category`, `description`, `price`, `os`, `screen`, `capacity`, `ram`, `speed`, `network`) VALUES
('mobile1', 'iPhone 6s', 'mobile', 'Apple''s flagship model', '699', 'iOS', 'Retina', '16GB', '2GB', '1.50Ghz', '4G'),
('tablet1', 'iPad', 'tablet', 'Apple''s newest tablet device', '599', 'iOS', 'Retina', '32GB', '2GB', '2.0GHz', 'Wifi'),
('modem1', 'Trust Modem', 'modem', 'Generic ADSL modem', '39EUR', 'Linux', '', '', '', '150Mbps', 'ADSL'),
('other1', 'Galaxy Gear', 'other', 'Samsung smartwatch', '199', 'Android', '320x320', '', '', '', ''),
('tablet2', 'Surface Pro', 'tablet', '', '799', 'Windows', 'Full HD', '128GB', '4GB', '1.7GHz', 'Wifi');

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
CREATE TABLE IF NOT EXISTS `faq` (
  `id` varchar(30) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL,
  `service_id` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `has_a`
--

DROP TABLE IF EXISTS `has_a`;
CREATE TABLE IF NOT EXISTS `has_a` (
  `device_id` varchar(30) NOT NULL,
  `a_id` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `has_sl`
--

DROP TABLE IF EXISTS `has_sl`;
CREATE TABLE IF NOT EXISTS `has_sl` (
  `device_id` varchar(30) NOT NULL,
  `sl_id` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sl_service`
--

DROP TABLE IF EXISTS `sl_service`;
CREATE TABLE IF NOT EXISTS `sl_service` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `activation` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `category` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
