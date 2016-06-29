-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2016 at 03:31 AM
-- Server version: 5.7.11
-- PHP Version: 5.6.19

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

CREATE TABLE `a_service` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `category` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `a_service`
--

INSERT INTO `a_service` (`id`, `name`, `description`, `category`) VALUES
('line1', 'Recharge sim', 'You can recharge your sim card credit using our services either by web or mobile application instead of going directly to our store.', 'line'),
('line2', 'Mobile phones', 'for mobile phones you have to go to the page and we have to fill this later ', 'line'),
('monitoring1', 'Fixed Phone', 'How to Read your bill', 'monitoring'),
('monitoring2', 'Mobile Phone', 'Check your Remaining Credit', 'monitoring');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `Id` bigint(11) NOT NULL,
  `Firstname` varchar(100) NOT NULL,
  `Lastname` varchar(100) NOT NULL,
  `Email` varchar(300) NOT NULL,
  `Phone` int(11) NOT NULL,
  `Message` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`Id`, `Firstname`, `Lastname`, `Email`, `Phone`, `Message`) VALUES
(1, 'Saeed', 'mohtasham', 'Alex@kir.com', 45454, 'kiram to harchi irani furushe'),
(2, 'Soheil', 'Ghanbari', 'soheilghanbari1365@gmail.com', 656456, '							    hgnghnhg');

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
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
('mobile1', 'iPhone 6s', 'mobile', 'Apple\'s flagship model', '699', 'iOS', 'Retina', '16GB', '2GB', '1.50Ghz', '4G'),
('tablet1', 'iPad', 'tablet', 'Apple\'s newest tablet device', '599', 'iOS', 'Retina', '32GB', '2GB', '2.0GHz', 'Wifi'),
('modem1', 'Trust Modem', 'modem', 'Generic ADSL modem', '39EUR', 'Linux', '', '', '', '150Mbps', 'ADSL'),
('other1', 'Galaxy Gear', 'other', 'Samsung smartwatch', '199', 'Android', '320x320', '', '', '', ''),
('tablet2', 'Surface Pro', 'tablet', '', '799', 'Windows', 'Full HD', '128GB', '4GB', '1.7GHz', 'Wifi'),
('mobile2', 'i phone 5s', 'mobile', 'apple model', '799', 'ios', 'Retina', '64GB', '4GB', '2,4GHZ', 'Wifi'),
('mobile3', 'Samsung Galaxy S6 Edge', 'mobile', 'Samsung Galaxy S6 Edge 32GB SM-G925F Mobile Phone', '450', 'Andriod', 'Full HD', '32Gb', '8Gb', '1.8Gb', 'Wifi'),
('mobile4', 'Sony', 'mobile', '', '340', 'Windows', 'HD', '120', '4GB', '2.6 Rgb', '4G'),
('modem2', 'Expert Modem For Professional', 'modem', 'This modem is useful for many particular Activities in your home and wherever you have to do something especial ', '200', '', '', '', '1GB', '4MB', 'High Speed ');

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` varchar(30) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL,
  `service_id` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `has_a`
--

CREATE TABLE `has_a` (
  `device_id` varchar(30) NOT NULL,
  `a_id` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `has_sl`
--

CREATE TABLE `has_sl` (
  `device_id` varchar(30) NOT NULL,
  `sl_id` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sl_service`
--

CREATE TABLE `sl_service` (
  `id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `activation` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `category` varchar(30) NOT NULL,
  `Promoted` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sl_service`
--

INSERT INTO `sl_service` (`id`, `name`, `activation`, `description`, `category`, `Promoted`) VALUES
('tv1', '4K TV ', 'For Activating you need to : 1.send SMs with Content 3D to number 9898 2. you will get the activation Code as a response. 3.if you want to use the service on your smart phone or tablet, you need to download the app from the link from the sms. 4. if you want to use the service on your smart service Tv , enter the Code in menu.', 'you can check any time if your device is listed among campatible device.', 'tv', 0),
('tv2', '3K TV ', 'For Activating you need to : 1.send SMs with Content 3D to number 9898 2. you will get the activation Code as a response. 3.if you want to use the service on your smart phone or tablet, you need to download the app from the link from the sms. 4. if you want to use the service on your smart service Tv , enter the Code in menu.', 'you can check any time if your device is listed among campatible device.', 'tv', 0),
('homefamily1', 'smart services', 'Go 2 steps further with our smart home services. Your home - under your own control, ant time , any place.For just 29 euro per month,VAT included', 'further with our smart home services.', 'homefamily', 0),
('health1', 'Run Tracker', 'in order to Activate first of all you need to send a number via SMS.', 'you can check anytime if your devices among compatibila devices', 'health', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `a_service`
--
ALTER TABLE `a_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Id` (`Id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sl_service`
--
ALTER TABLE `sl_service`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `Id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
