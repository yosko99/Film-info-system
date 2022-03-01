-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2021 at 01:12 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kinoteatyrdb`
--

DELIMITER $$
--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `FortyTwo` () RETURNS TINYINT(4) BEGIN
 DECLARE x TINYINT;
 SET x = 42;
 RETURN x;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `kodFilm` tinyint(2) NOT NULL,
  `nazvanieFilm` varchar(50) DEFAULT NULL,
  `rejisyorFilm` varchar(50) DEFAULT NULL,
  `kompozitorFilm` varchar(50) DEFAULT NULL,
  `tematikaFilm` varchar(25) DEFAULT NULL,
  `kategoriqFilm` varchar(25) DEFAULT NULL,
  `scenaristFilm` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`kodFilm`, `nazvanieFilm`, `rejisyorFilm`, `kompozitorFilm`, `tematikaFilm`, `kategoriqFilm`, `scenaristFilm`) VALUES
(1, 'Rampage', 'Искра Вълкова', 'Ивелина Костова', 'Филм за бедствия', 'Екшън', 'Албена Ковачева'),
(2, 'Vanguard', 'Камен Колев', 'Кристина Грозева', 'Филм за пътуване във врем', 'Екшън', 'Георги Торнев'),
(3, 'The Predator', 'Цветан Гайдарски', 'Каролина Стойчева', 'филм за ужаси', 'Научен', 'Теодор Вълчев'),
(4, 'Jumanji: The Next Level', 'Калин Калинов', 'Камен Воденичаров', 'Филм за игри', 'Приключенски', 'Маргарита Савова'),
(5, 'The Avengers', 'Иглика Ангелова', 'Рени Груева', 'Филм за супергерои', 'Приключенски', 'Иван Колев'),
(6, 'The Last Thing He Wanted', 'Цветодар Марков', 'Армандо Константино', 'Затворнически филм', 'Мистерия', 'Цветанка Коева'),
(7, 'Coming 2 America', 'Борис Десподов', 'Дорит Йоша', 'Комедия', 'Комедия', 'Снежана Грошкова'),
(8, 'Ready Player One', 'Боян Ковачев', 'Никола Кънев', 'Филм за игри', 'Сай-фай', 'Николай Томов'),
(9, 'Cod 8', 'Явор Калъчев', 'Свилен Иванов', 'Филм за бедствия', 'Мистерия', 'Таня Казакова'),
(10, 'Sputnik', 'Павлина Ангелова', 'Спиридон Петренков', 'Филм за ужаси', 'Екшън', 'Николай Сотиров'),
(11, 'The SpongeBob Movie: Sponge on the Run', 'Николай Барулов', 'Никола Ковачев', 'Филм за деца', 'Семеен', 'Анжел Вагенщайн'),
(12, 'Thor: Ragnarok', 'Петър Батаклиев', 'Олег Ковачев', 'Филм за супегерои', 'Приключенски', 'Александър Вазов'),
(13, 'Gemini Man', 'Лиляна Батулева', 'Киран Коларов', 'Комедия', 'Екшън', 'Януш Вазов'),
(14, 'Godzilla', 'Петър Бахнев', 'Стефан Командарев', 'Филм за бедствия', 'Екшън', 'Къци Вапцаров'),
(15, 'Psycho-Pass 3: First Inspector', 'Михаил Белчев', 'Михаела Комитова', 'Филм за ужаси', 'Екшън', 'Мая Вапцарова'),
(16, 'Wonder Woman', 'Моис Бениеш', 'Сергей Комитски', 'Филм за супергерои', 'Приключенски', 'Павел Васев'),
(17, 'The Croods: A New Age', 'Коста Биков', 'Никола Корабов', 'Комедия', 'Семеен', 'Васил Василев'),
(18, 'Fast & Furious Presents: Hobbs & Shaw', 'Бойко Богданов', 'Георги Костов', 'Филм за съзстезания', 'Екшън', 'Петър Б. Василев'),
(19, 'My Hero Academia: Heroes Rising', 'Иван Богданов', 'Илия Костов', 'Филм за супергерои', 'Приключенски', 'Иля Велчев'),
(20, 'We Bare Bears: The Movie', 'Пенчо Богданов', 'Константин Костов', 'Филм за деца', 'Семеен', 'Михаил Венков'),
(21, 'Baba Yaga: Terror of the Dark Forest', 'Дочо Боджаков', 'Искрен Красимиров', 'Филм за ужаси', 'Ужаси', 'Иван Веселинов'),
(22, 'Bulletproof 2', 'Лиза Боева', 'Красимир Крумов', 'Затворнически филм', 'Екшън', 'Руши Видинлиев'),
(23, 'A Quiet Place Part II', 'Виктор Божинов', 'Петър Крумов', 'Филм за ужаси', 'Ужаси', 'Дора Винарова'),
(24, 'We Can Be Heroes', 'Костадин Бонев', 'Малин Кръстев', 'Филм за бедствия', 'Приключенски', 'Майя Виткова'),
(25, 'More Than Miyagi: The Pat Morita Story', 'Драгомира Бонева', 'Марио Кръстев', 'Филм за игри', 'Семеен', 'Камен Воденичаров'),
(26, 'Underwater', 'Борис Борозанов', 'Анри Кулев', 'Филм за пътуване във врем', 'Ужаси', 'Николай Волев'),
(27, 'Sonic the Hedgehog', 'Емил Бошнаков', 'Огнян Купенов', 'Филм за деца', 'Семее', 'Толи Вулова'),
(28, 'Red Dot', 'Хачо Бояджиев', 'Мариус Куркински', 'Филм за ужаси', 'Ужаси', 'Юри Жиров');

-- --------------------------------------------------------

--
-- Table structure for table `kinoteatyr`
--

CREATE TABLE `kinoteatyr` (
  `kodKinoteatyr` tinyint(2) NOT NULL,
  `nazvanieKinoteatyr` varchar(21) DEFAULT NULL,
  `adresKinoteatyr` varchar(109) DEFAULT NULL,
  `kategoriqKinoteatyr` varchar(13) DEFAULT NULL,
  `imeDirektor` varchar(17) DEFAULT NULL,
  `kinorazpredelitel` varchar(19) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kinoteatyr`
--

INSERT INTO `kinoteatyr` (`kodKinoteatyr`, `nazvanieKinoteatyr`, `adresKinoteatyr`, `kategoriqKinoteatyr`, `imeDirektor`, `kinorazpredelitel`) VALUES
(1, 'Cienma citi', 'TRC,Ocean plaza,125', 'cinema', 'Anri Kulev', 'Jana Ivanova'),
(2, 'Sunshine Cinema', 'E Hewsten,164', 'theater', 'Zadraveko Vatev', 'Simeon Ivanov'),
(3, 'Miramar Film', 'bul. Dundukov, Sofia', 'multi-cinema', 'Penko Rusev', 'Lychezar Ivanov'),
(4, 'Korund - X', '238 Mari Street,21', 'theater', 'Dimityr Petkov', 'Aneliya Dosheva'),
(5, 'Paralax', '4761, Smolyan, Smolian, Bablon', 'theater', 'Svetlana Taneva', 'Radoslav Penev'),
(6, 'Boyana Film', 'Kyustendil, Bobov Dol, Golema Fucha\n9803, Shumen, Hitrino, Timarevo', 'cinema', 'Georgi Dimitrov', 'Georgi Georgiev'),
(7, 'Kulev Film production', '9927 Euna Parkways,2972, Blagoevgrad, Gotse Delchev, Breznitsa', 'cinema', 'Hristofor Bojilov', 'Zlatin Radev'),
(8, 'ART FEST', 'Vidin, Chuprene, Dolni Lom', 'multi-cinema', 'Dimityr Gochev', 'Ani Yotova'),
(9, 'Adelle media 99', '6526, Haskovo, Svilengrad, Mihalich', 'cinema', 'Georgi Bonin', 'Snejana Stoycheva'),
(10, 'Kadiak Film', '4160, Plovdiv, Brezovo, Choba', 'multi-cinema', 'Zornica Popova', 'Merlina Petkova'),
(11, 'CineMax', '9523 Collier Viaduct Blagoevgrad, Strumiani', 'cinema', 'Emil Abadjiev', 'Chavdar Gatov'),
(12, 'Pasards IMAX', '882 Sandra Ferry Razgrad, Isperih, Malak Porovets', 'multi-cinema', 'Lilia Abadjieva', 'Atanas Gatev'),
(13, 'INOX', '438 Clifton Ridges 9869, Shumen, Varbitsa, Konevo', 'theater', 'Andrey Avramov', 'Hristo Ganev'),
(14, 'Kolaba', '11195 Kimberly Club 6900, Kardzhali, Krumovgrad, Krumovgrad', 'theater', 'Boqn Avramov', 'Vasa Gancheva'),
(15, 'Regal', '85791 Ratke Underpass Sliven, Nova Zagora, Byal Kladenets', 'cinema', 'Grigor Azaryan', 'Mariq Petkova'),
(16, 'Sterling Cineplex', '22981 Kuvalis Groves Stara Zagora, Stara Zagora', 'cinema', 'Nikolay Akimov', 'Ognqn Gelinov'),
(17, 'Cinema Eros', '71364 Hand Points 6146, Stara Zagora, Pavel Bania, Dolno Sahrane', 'cinema', 'Irina Aktasheva', 'Vasil Gendov'),
(18, 'Mukta A2', '995 Mraz Lodge 2798, Blagoevgrad, Razlog, Dolno Draglishte', 'theater', 'Nidal Todorov', 'Gencho Genchev'),
(19, 'Defrenson', '53702 Izabella Expressway 5805, Pleven, Pleven', 'multi-cinema', 'Stoyan Aleksiev', 'Georgi Georgiev'),
(20, 'NCR', '356 Bayer Stravenue Burgas, Primorsko', 'multi-cinema', 'Andrey Popov', 'Angelina Georgieva'),
(21, 'BigCinema', '44519 Kobe Gateway Veliko Tarnovo, Svishtov, Balgarsko Slivovo', 'multi-cinema', 'Georgi Alurkov', 'Nikolina Todorova'),
(22, 'Luceon', '985 Kuphal Centers Varna, Provadia, Dobrina', 'theater', 'Ivan Andonov', 'Pavel Todorov'),
(23, 'DefrosterXD', '1409 Ellis Wall 5462, Gabrovo, Sevlievo, Tabashka', 'cinema', 'Metodi Andonov', 'Veselina Gerinska'),
(24, 'Kazanova 55', '64396 Lukas Canyon Sliven, Vaglen', 'cinema', 'Milena Andonova', 'Milen Getov'),
(25, 'Dinmero citi - x', '3893 Karson Stream Pernik, Tran, Leshnikovtsi', 'cinema', 'Vladimir Andreev', 'Boris Kostadinov'),
(26, 'XPO Film', '926 Declan Plain Haskovo, Haskovo', 'theater', 'Todor Ivanov', 'Konstantin Georgiev'),
(27, 'Sinepolis', '835 Zola Isle Haskovo, Stambolovo, Jalti Briag', 'multi-theater', 'Milena Todorova', 'Rumen Grigorov'),
(28, 'Mumbainet', '795 Crystal Roads Yambol, Tundzha', 'theater', 'Rosica Ancheva', 'Kristina Grozeva'),
(29, 'Cinema Arena Luxe', '9278 Danika Shoal\nStara Zagora, Radnevo, Polski Gradets\n23358 Destany Manors 5720, Lovech, Teteven, Vasiliovo', 'multi-cinema', 'Nikolay Aprilov', 'Ivanka Aprilova'),
(30, 'Cinema Arena Fore', '7500 Watsica Ports Dobrich, Dobrichka, Sliventsi', 'cinema', 'Yuri Arnaudov', 'Stefan Gyrdev');

-- --------------------------------------------------------

--
-- Table structure for table `projektira`
--

CREATE TABLE `projektira` (
  `dataProjekciq` datetime NOT NULL,
  `cenaBilet` float NOT NULL,
  `kodKinoteatyr` tinyint(2) NOT NULL,
  `kodFilm` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projektira`
--

INSERT INTO `projektira` (`dataProjekciq`, `cenaBilet`, `kodKinoteatyr`, `kodFilm`) VALUES
('2021-08-06 12:07:29', 20, 12, 18),
('2021-09-01 12:07:26', 22, 15, 11),
('2021-10-01 00:00:57', 6, 24, 14),
('2021-10-01 13:00:30', 7, 6, 5),
('2021-10-01 17:50:14', 15, 10, 8),
('2021-10-01 22:48:38', 5, 6, 4),
('2021-10-02 11:48:09', 4, 13, 21),
('2021-10-03 00:00:45', 8, 25, 25),
('2021-10-03 15:48:47', 6, 1, 22),
('2021-10-04 00:50:16', 15, 18, 19),
('2021-10-04 12:04:47', 50, 6, 9),
('2021-10-06 12:00:05', 15, 20, 20),
('2021-10-06 12:02:56', 21, 2, 2),
('2021-10-07 00:00:22', 34, 25, 9),
('2021-10-07 06:48:44', 5, 15, 27),
('2021-10-07 12:07:41', 17, 7, 25),
('2021-10-07 23:05:16', 19, 29, 20),
('2021-10-11 12:02:42', 19, 1, 22),
('2021-10-12 12:01:46', 16, 1, 21),
('2021-10-13 02:48:30', 3, 27, 10),
('2021-10-13 12:00:00', 3, 14, 24),
('2021-10-14 00:49:58', 10, 9, 7),
('2021-10-14 11:48:26', 3, 22, 15),
('2021-10-14 12:03:51', 30, 3, 5),
('2021-10-15 20:00:54', 9, 29, 1),
('2021-10-21 11:51:17', 25, 1, 4),
('2021-10-21 17:50:10', 15, 4, 10),
('2021-10-22 23:50:01', 11, 7, 6),
('2021-10-26 09:00:34', 7, 28, 17),
('2021-10-26 13:00:25', 7, 1, 22),
('2021-10-26 14:00:38', 8, 1, 21),
('2021-10-26 20:00:59', 10, 11, 28),
('2021-10-26 21:00:50', 9, 18, 25),
('2021-10-26 23:04:50', 20, 6, 10),
('2021-10-27 00:05:07', 15, 30, 22),
('2021-10-27 20:03:06', 13, 3, 2),
('2021-10-28 12:04:43', 19, 4, 3),
('2021-10-30 00:00:41', 8, 3, 10),
('2021-10-30 11:00:51', 6, 17, 16),
('2021-11-09 07:00:13', 7, 1, 21),
('2021-11-12 00:05:28', 25, 24, 1),
('2021-11-14 12:00:16', 20, 18, 12),
('2021-11-27 23:00:09', 30, 19, 19),
('2021-12-08 23:07:21', 16, 15, 26),
('2022-01-06 12:07:37', 30, 12, 11);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`kodFilm`);

--
-- Indexes for table `kinoteatyr`
--
ALTER TABLE `kinoteatyr`
  ADD PRIMARY KEY (`kodKinoteatyr`);

--
-- Indexes for table `projektira`
--
ALTER TABLE `projektira`
  ADD PRIMARY KEY (`dataProjekciq`,`kodKinoteatyr`,`kodFilm`),
  ADD KEY `kod-film` (`kodFilm`),
  ADD KEY `kod-kinoteatyr` (`kodKinoteatyr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kinoteatyr`
--
ALTER TABLE `kinoteatyr`
  MODIFY `kodKinoteatyr` tinyint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `projektira`
--
ALTER TABLE `projektira`
  ADD CONSTRAINT `projektira_ibfk_1` FOREIGN KEY (`kodFilm`) REFERENCES `film` (`kodFilm`),
  ADD CONSTRAINT `projektira_ibfk_2` FOREIGN KEY (`kodKinoteatyr`) REFERENCES `kinoteatyr` (`kodKinoteatyr`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
