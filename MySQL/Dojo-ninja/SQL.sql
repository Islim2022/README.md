-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dojo
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dojo` ;

-- -----------------------------------------------------
-- Schema dojo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dojo` DEFAULT CHARACTER SET utf8 ;
USE `dojo` ;

-- -----------------------------------------------------
-- Table `dojo`.`dojos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojo`.`dojos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(225) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dojo`.`ninja`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojo`.`ninja` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(225) NULL,
  `last_name` VARCHAR(225) NULL,
  `age` INT NULL,
  `dojo_id` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT Now(),
  `updated_at` DATETIME NULL DEFAULT Now(),
  PRIMARY KEY (`id`),
  INDEX `fk_ninja_dojos_idx` (`dojo_id` ASC) VISIBLE,
  CONSTRAINT `fk_ninja_dojos`
    FOREIGN KEY (`dojo_id`)
    REFERENCES `dojo`.`dojos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
