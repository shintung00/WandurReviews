-- DROP DATABASE IF EXISTS SDCreviews;

-- CREATE DATABASE SDCreviews;

CREATE TABLE users (
    user_id SERIAL NOT NULL,
    user_name VARCHAR(40) NOT NULL,
    user_pic VARCHAR(100) NOT NULL,
    PRIMARY KEY(user_id)
);

COPY users(user_name, user_pic)
FROM '/Users/hsintung/Desktop/reviews/database/data/userEntries.csv' DELIMITER ',' CSV;


/* run psql postgres < database/reviewSchema.sql to 
create database and table 

*** Need to change date type when use true data
*/ 

-- psql sdcreviews < database/seedingScripts/usersSchema.sql