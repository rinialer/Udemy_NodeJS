CREATE TABLE `node-complete`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` TEXT NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);


INSERT INTO `node-complete`.`products` (`title`, `price`, `description`, `imageUrl`) VALUES ('A Book', '12.99', 'This is an awesome book', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg');
