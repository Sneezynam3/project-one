-- Drops the color_db if it exists currently --
DROP DATABASE IF EXISTS paint_db;
-- Creates the "color_db" database --
CREATE DATABASE paint_db;

-- Makes it so all of the following code will affect color_db --
USE paint_db;

-- Creates the table "colors" within paint_db --
CREATE TABLE  `colors` (
 -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL

); 