DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    property_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    comments VARCHAR(5000) NOT NULL,
    user_photo VARCHAR(250) NOT NULL,
    PRIMARY KEY(id)
);

/* run mysql -u root -p < dabase/schema.sql to create database and table */ 