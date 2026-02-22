-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 22, 2026 at 02:37 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `areesia`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
CREATE TABLE IF NOT EXISTS `addresses` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClientId` int(11) NOT NULL,
  `Country` varchar(50) CHARACTER SET utf8 NOT NULL,
  `City` varchar(50) CHARACTER SET utf8 NOT NULL,
  `PostalCode` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Address` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Agreement` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `ClientId` (`ClientId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
CREATE TABLE IF NOT EXISTS `artist` (
  `DesignerId` int(11) NOT NULL,
  `Design1` longblob DEFAULT NULL,
  `Design2` longblob DEFAULT NULL,
  `Design3` longblob DEFAULT NULL,
  `Token` varchar(50) NOT NULL,
  `IsUsed` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`DesignerId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `ClientId` int(11) NOT NULL,
  `UpdatedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ClientId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
CREATE TABLE IF NOT EXISTS `cart_items` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CartId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `CartId` (`CartId`),
  KEY `ProductId` (`ProductId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) CHARACTER SET utf8 NOT NULL,
  `LastName` varchar(50) CHARACTER SET utf8 NOT NULL,
  `PhoneNumber` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `Email` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Password` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Birthday` date DEFAULT NULL,
  `DefaultAddressId` int(11) DEFAULT NULL,
  `EmailConfirmation` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `DefaultAddressId` (`DefaultAddressId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
CREATE TABLE IF NOT EXISTS `colors` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `HexCode` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `designer`
--

DROP TABLE IF EXISTS `designer`;
CREATE TABLE IF NOT EXISTS `designer` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Profile` longblob DEFAULT NULL,
  `Cover` longblob DEFAULT NULL,
  `FirstName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `LastName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `PhoneNumber` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `Email` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Password` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Country` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `City` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `PostalCode` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `Address` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `EmailConfirmation` tinyint(1) NOT NULL DEFAULT 0,
  `AccountStatus` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `designer_funds`
--

DROP TABLE IF EXISTS `designer_funds`;
CREATE TABLE IF NOT EXISTS `designer_funds` (
  `DesignerId` int(11) NOT NULL,
  `TotalFunds` decimal(10,2) DEFAULT 0.00,
  PRIMARY KEY (`DesignerId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `designer_payment_methods`
--

DROP TABLE IF EXISTS `designer_payment_methods`;
CREATE TABLE IF NOT EXISTS `designer_payment_methods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DesignerId` int(11) DEFAULT NULL,
  `WithdrawalMethodId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `DesignerId` (`DesignerId`),
  KEY `WithdrawalMethodId` (`WithdrawalMethodId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `designs`
--

DROP TABLE IF EXISTS `designs`;
CREATE TABLE IF NOT EXISTS `designs` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DesignerId` int(11) DEFAULT NULL,
  `Title` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `isMen` tinyint(1) DEFAULT NULL,
  `isWomen` tinyint(1) DEFAULT NULL,
  `isKids` tinyint(1) DEFAULT NULL,
  `DefaultColor` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `MarginProfit` decimal(10,2) DEFAULT NULL,
  `isPublic` tinyint(1) DEFAULT NULL,
  `UserAgreement` tinyint(1) DEFAULT NULL,
  `UploadDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`Id`),
  KEY `DesignerId` (`DesignerId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `designs_places`
--

DROP TABLE IF EXISTS `designs_places`;
CREATE TABLE IF NOT EXISTS `designs_places` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DesignsId` int(11) DEFAULT NULL,
  `PlacesId` int(11) DEFAULT NULL,
  `Design` blob DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `DesignsId` (`DesignsId`),
  KEY `PlacesId` (`PlacesId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `design_colors`
--

DROP TABLE IF EXISTS `design_colors`;
CREATE TABLE IF NOT EXISTS `design_colors` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DesignId` int(11) DEFAULT NULL,
  `ColorsId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `DesignId` (`DesignId`),
  KEY `ColorsId` (`ColorsId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
CREATE TABLE IF NOT EXISTS `favorites` (
  `ClientId` int(11) NOT NULL,
  `LastUpdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ClientId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `favorite_items`
--

DROP TABLE IF EXISTS `favorite_items`;
CREATE TABLE IF NOT EXISTS `favorite_items` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FavoritesId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FavoritesId` (`FavoritesId`),
  KEY `ProductId` (`ProductId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `funds_transactions`
--

DROP TABLE IF EXISTS `funds_transactions`;
CREATE TABLE IF NOT EXISTS `funds_transactions` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DesignerFundsId` int(11) DEFAULT NULL,
  `OrderItemsId` int(11) DEFAULT NULL,
  `Funds` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `DesignerFundsId` (`DesignerFundsId`),
  KEY `OrderItemsId` (`OrderItemsId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
CREATE TABLE IF NOT EXISTS `invoices` (
  `OrdersId` int(11) NOT NULL,
  `TotalPrice` decimal(10,2) DEFAULT NULL,
  `BilledTo` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`OrdersId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClientId` int(11) DEFAULT NULL,
  `AddressId` int(11) DEFAULT NULL,
  `ShippingMethodId` int(11) DEFAULT NULL,
  `OrderDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Status` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `ClientId` (`ClientId`),
  KEY `AddressId` (`AddressId`),
  KEY `ShippingMethodId` (`ShippingMethodId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders_items`
--

DROP TABLE IF EXISTS `orders_items`;
CREATE TABLE IF NOT EXISTS `orders_items` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `OrderId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `OrderId` (`OrderId`),
  KEY `ProductId` (`ProductId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `WithdrawalMethodId` int(11) DEFAULT NULL,
  `DesignerId` int(11) DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  `Message` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Status` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `TransactionDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `PaymentAgreement` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `WithdrawalMethodId` (`WithdrawalMethodId`),
  KEY `DesignerId` (`DesignerId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
CREATE TABLE IF NOT EXISTS `places` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Cost` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `printable_products`
--

DROP TABLE IF EXISTS `printable_products`;
CREATE TABLE IF NOT EXISTS `printable_products` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `FabricType` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `CareInstructions` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Origin` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `BasePrice` decimal(10,2) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DesignsId` int(11) DEFAULT NULL,
  `PrintableProductId` int(11) DEFAULT NULL,
  `TotalPrice` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `DesignsId` (`DesignsId`),
  KEY `PrintableProductId` (`PrintableProductId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shipping_methods`
--

DROP TABLE IF EXISTS `shipping_methods`;
CREATE TABLE IF NOT EXISTS `shipping_methods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Cost` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `withdrawal_info`
--

DROP TABLE IF EXISTS `withdrawal_info`;
CREATE TABLE IF NOT EXISTS `withdrawal_info` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `DesignerId` int(11) DEFAULT NULL,
  `FirstName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `LastName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `NationalID` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `HolderName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `BankName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `IBAN` varchar(34) CHARACTER SET utf8 DEFAULT NULL,
  `DesignerAgreement` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `DesignerId` (`DesignerId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `withdrawal_methods`
--

DROP TABLE IF EXISTS `withdrawal_methods`;
CREATE TABLE IF NOT EXISTS `withdrawal_methods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
