-- MySQL Script generated by MySQL Workbench
-- Sat Feb 29 11:43:25 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`table1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`table1` ;

CREATE TABLE IF NOT EXISTS `mydb`.`table1` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pessoa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Pessoa` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Pessoa` (
  `idPessoa` INT NOT NULL,
  `aprender` VARCHAR(45) NULL,
  `ensinar` VARCHAR(45) NULL,
  `nome` VARCHAR(45) NULL,
  `idade` VARCHAR(45) NULL,
  `trabalho` VARCHAR(45) NULL,
  PRIMARY KEY (`idPessoa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Anuncio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Anuncio` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Anuncio` (
  `idAnuncio` INT NOT NULL,
  `ensinar` VARCHAR(45) NOT NULL,
  `aprender` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`idAnuncio`))
ENGINE = InnoDB
COMMENT = 'n';


-- -----------------------------------------------------
-- Table `mydb`.`Metch`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Metch` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Metch` (
  `idMetch` INT NOT NULL,
  `dt_inicio` VARCHAR(45) NOT NULL,
  `Anuncio_idAnuncio` INT NOT NULL,
  PRIMARY KEY (`idMetch`, `Anuncio_idAnuncio`),
  CONSTRAINT `fk_Metch_Anuncio1`
    FOREIGN KEY (`Anuncio_idAnuncio`)
    REFERENCES `mydb`.`Anuncio` (`idAnuncio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pessoa_has_Anuncio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Pessoa_has_Anuncio` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Pessoa_has_Anuncio` (
  `Pessoa_idPessoa` INT NOT NULL,
  `Anuncio_idAnuncio` INT NOT NULL,
  PRIMARY KEY (`Pessoa_idPessoa`, `Anuncio_idAnuncio`),
  INDEX `fk_Pessoa_has_Anuncio_Pessoa_idx` (`Pessoa_idPessoa` ASC) VISIBLE,
  CONSTRAINT `fk_Pessoa_has_Anuncio_Pessoa`
    FOREIGN KEY (`Pessoa_idPessoa`)
    REFERENCES `mydb`.`Pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pessoa_has_Anuncio_Anuncio1`
    FOREIGN KEY (`Anuncio_idAnuncio`)
    REFERENCES `mydb`.`Anuncio` (`idAnuncio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Chat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Chat` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Chat` (
  `idChat` INT NOT NULL,
  `Metch_idMetch` INT NOT NULL,
  `Metch_Anuncio_idAnuncio` INT NOT NULL,
  PRIMARY KEY (`idChat`, `Metch_idMetch`, `Metch_Anuncio_idAnuncio`),
  CONSTRAINT `fk_Chat_Metch1`
    FOREIGN KEY (`Metch_idMetch` , `Metch_Anuncio_idAnuncio`)
    REFERENCES `mydb`.`Metch` (`idMetch` , `Anuncio_idAnuncio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;