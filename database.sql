-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.2.3-MariaDB-log - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for youtubebase
DROP DATABASE IF EXISTS `youtubebase`;
CREATE DATABASE IF NOT EXISTS `youtubebase` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `youtubebase`;

-- Dumping structure for table youtubebase.categories
DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table youtubebase.categories: ~6 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `title`, `created_at`, `updated_at`) VALUES
	(1, 'news', '2017-06-09 09:47:40', '2017-06-09 09:47:40'),
	(2, 'comedy', '2017-06-09 09:48:16', '2017-06-09 09:48:16'),
	(3, 'animation', '2017-06-09 09:48:23', '2017-06-09 09:48:23'),
	(4, 'education', '2017-06-09 09:48:33', '2017-06-09 09:48:33'),
	(5, 'music', '2017-06-09 09:49:04', '2017-06-09 09:49:04'),
	(6, 'adventure', '2017-06-09 09:49:22', '2017-06-09 09:49:22'),
	(7, 'politics', '2017-06-09 14:48:28', '2017-06-09 14:48:29'),
	(8, 'culture', '2017-06-09 14:48:56', '2017-06-09 14:48:56');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping structure for table youtubebase.categoriesmatcher
DROP TABLE IF EXISTS `categoriesmatcher`;
CREATE TABLE IF NOT EXISTS `categoriesmatcher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `channel_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_ChannelCategoryMatcher` (`channel_id`),
  KEY `FK_CategoryChannelMatcher` (`category_id`),
  CONSTRAINT `FK_CategoryChannelMatcher` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_ChannelCategoryMatcher` FOREIGN KEY (`channel_id`) REFERENCES `channels` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- Dumping data for table youtubebase.categoriesmatcher: ~8 rows (approximately)
/*!40000 ALTER TABLE `categoriesmatcher` DISABLE KEYS */;
INSERT INTO `categoriesmatcher` (`id`, `channel_id`, `category_id`, `created_at`) VALUES
	(9, 14, 1, '2017-06-09 14:09:37'),
	(10, 14, 3, '2017-06-09 14:09:38'),
	(11, 15, 6, '2017-06-09 14:15:45'),
	(12, 16, 5, '2017-06-09 14:16:27'),
	(13, 17, 4, '2017-06-09 14:16:44'),
	(14, 18, 4, '2017-06-09 14:16:58'),
	(15, 18, 3, '2017-06-09 14:16:58'),
	(16, 19, 4, '2017-06-09 14:17:17'),
	(17, 21, 7, '2017-06-09 15:10:25');
/*!40000 ALTER TABLE `categoriesmatcher` ENABLE KEYS */;

-- Dumping structure for table youtubebase.channels
DROP TABLE IF EXISTS `channels`;
CREATE TABLE IF NOT EXISTS `channels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `y_id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `published_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dumping data for table youtubebase.channels: ~7 rows (approximately)
/*!40000 ALTER TABLE `channels` DISABLE KEYS */;
INSERT INTO `channels` (`id`, `y_id`, `title`, `description`, `published_at`, `created_at`, `updated_at`, `thumbnail`) VALUES
	(14, 'UCLXo7UDZvByw2ixzpQCufnA', 'Vox', 'Vox helps you cut through the noise and understand what\'s driving events in the headlines and in our lives, on everything from Taxes to Terrorism to Taylor Swift. Vox Video is Joe Posner, Joss Fong, Estelle Caswell, Johnny Harris, Phil Edwards, Carlos Waters, Gina Barton, Liz Scheltens, Liz Plank, Christophe Haubursin, Carlos Maza, Coleman Lowndes, Matteen Mokalla, Dion Lee, Dean Peterson, Mac Schneider, Sam Ellis, Valerie Lapinski, Michael Cades, Mona Lalwani, and the staff of Vox.com. \n\nFor much much more, head over to www.vox.com. And subscribe so you don\'t miss a video at http://goo.gl/0bsAjO\n\nTo write us: joe@vox.com.\nTo request permission to use our videos: permissions@voxmedia.com', '2014-03-04 20:03:30', '2017-06-09 14:09:37', '2017-06-09 14:09:37', 'https://yt3.ggpht.com/-moy7q66uDVs/AAAAAAAAAAI/AAAAAAAAAAA/3kiAD7O0Q_E/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'),
	(15, 'UCpVm7bg6pXKo1Pr6k5kxG9A', 'National Geographic', 'Inspiring people to care about the planet! National Geographic is the world\'s premium destination for science, exploration, and adventure. Through their world-class scientists, photographers, journalists, and filmmakers, Nat Geo gets you closer to the stories that matter and past the edge of what\'s possible.\n\nWEEKLY YOUTUBE SCHEDULE:\nMon & Tues - Nature & Environment\nWed - Exploration\nThur - Science\nFri - Fun Facts\nSat - Adventure & Survival\nSun - History & Culture', '2006-05-07 09:05:30', '2017-06-09 14:15:45', '2017-06-09 14:15:45', 'https://yt3.ggpht.com/-gVuW1PB5eQU/AAAAAAAAAAI/AAAAAAAAAAA/TFf3A48Pyuk/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'),
	(16, 'UC4eYXhJI4-7wSWc8UNRwD4A', 'NPR Music', 'The official YouTube channel for NPR Music featuring Tiny Desk Concerts, live shows, documentaries and more.  Find more at www.npr.org/music', '2008-01-03 16:01:53', '2017-06-09 14:16:27', '2017-06-09 14:16:27', 'https://yt3.ggpht.com/-b3a2Rs13Wh0/AAAAAAAAAAI/AAAAAAAAAAA/laq_oCKec1Y/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'),
	(17, 'UCvQECJukTDE2i6aCoMnS-Vg', 'Big Think', 'Big Think is the leading source of expert-driven, actionable, educational content -- with thousands of videos, featuring experts ranging from Bill Clinton to Bill Nye, we help you get smarter, faster. We aim to help you explore the big ideas and core skills that define knowledge in the 21st century, so you can apply them to the questions and challenges in your own life.', '2006-10-01 18:10:37', '2017-06-09 14:16:44', '2017-06-09 14:16:44', 'https://yt3.ggpht.com/-9FlV-XEd_gU/AAAAAAAAAAI/AAAAAAAAAAA/VaeU8o3d_Fc/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'),
	(18, 'UCsooa4yRKGN_zEE8iknghZA', 'TED-Ed', 'TED-Ed’s commitment to creating lessons worth sharing is an extension of TED’s mission of spreading great ideas. Within TED-Ed’s growing library of TED-Ed animations, you will find carefully curated educational videos, many of which represent collaborations between talented educators and animators nominated through the TED-Ed website (ed.ted.com).\n\nWant to suggest an idea for a TED-Ed animation or get involved with TED-Ed? Visit our website at: http://ed.ted.com/get_involved.', '2011-03-01 20:03:33', '2017-06-09 14:16:58', '2017-06-09 14:16:58', 'https://yt3.ggpht.com/-mnEpZE0uuus/AAAAAAAAAAI/AAAAAAAAAAA/SM5q4mSZgq4/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'),
	(19, 'UCUdettijNYvLAm4AixZv4RA', 'SciShow Psych', 'Twice a week, SciShow Psych digs into the science of...us! SciShow Psych is all about the human brain and how we humans interact with the world. \n\nHosts Hank Green and Brit Garner explain ground-breaking studies and contextualize psychology throughout history. \n\nFor more science, check out SciShow and SciShow Space as well. And for young thinkers, visit SciShow Kids!', '2016-09-02 20:09:31', '2017-06-09 14:17:17', '2017-06-09 14:17:17', 'https://yt3.ggpht.com/-a5DiJ1FBL5E/AAAAAAAAAAI/AAAAAAAAAAA/D_MJbvJTUl0/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'),
	(20, 'UCuPgdqQKpq4T4zeqmTelnFg', 'kaptainkristian', 'visual love letters to my favorite shit', '2016-03-11 16:03:35', '2017-06-09 14:17:33', '2017-06-09 14:17:33', 'https://yt3.ggpht.com/-qfp7N6b2Vdk/AAAAAAAAAAI/AAAAAAAAAAA/nPAzd8LYp2Q/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'),
	(21, 'UCT3v6vL2H5HK4loLMc8pmCw', 'VisualPolitik EN', 'Welcome to VisualPolitik! In this channel we\'ll be talking about politics, economics and things that are happening all around the world. Stay tuned!', '2017-01-22 15:01:50', '2017-06-09 15:10:24', '2017-06-09 15:10:24', 'https://yt3.ggpht.com/-kspDPiRU0n8/AAAAAAAAAAI/AAAAAAAAAAA/o1h4x-zJvxc/s240-c-k-no-mo-rj-c0xffffff/photo.jpg');
/*!40000 ALTER TABLE `channels` ENABLE KEYS */;

-- Dumping structure for table youtubebase.usercookies
DROP TABLE IF EXISTS `usercookies`;
CREATE TABLE IF NOT EXISTS `usercookies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `cookie` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `UC_Cookie` (`cookie`),
  KEY `FK_UserCookie` (`user_id`),
  CONSTRAINT `FK_UserCookie` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table youtubebase.usercookies: ~0 rows (approximately)
/*!40000 ALTER TABLE `usercookies` DISABLE KEYS */;
/*!40000 ALTER TABLE `usercookies` ENABLE KEYS */;

-- Dumping structure for table youtubebase.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) DEFAULT NULL,
  `slug` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(40) DEFAULT NULL,
  `last_name` varchar(40) DEFAULT NULL,
  `about_me` text DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `role` int(1) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `UC_User` (`username`,`slug`,`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table youtubebase.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
