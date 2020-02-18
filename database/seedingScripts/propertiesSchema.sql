CREATE TABLE properties (
    property_id SERIAL NOT NULL,
    property_name VARCHAR(100) NOT NULL,
    host VARCHAR(100) NOT NULL,
    rating_communication FLOAT NOT NULL,
    rating_check_in FLOAT NOT NULL,
    rating_cleanliness FLOAT NOT NULL,
    rating_accuracy FLOAT NOT NULL,
    rating_location FLOAT NOT NULL,
    rating_value FLOAT NOT NULL,
    rating_overall FLOAT NOT NULL,
    rating_sample FLOAT,
    rating_not_applicable FLOAT,
    PRIMARY KEY(property_id)
);

COPY properties(property_name, host, rating_communication, rating_check_in, rating_cleanliness, rating_accuracy, rating_location, rating_value, rating_overall)
FROM '/Users/hsintung/Desktop/reviews/database/data/propertiesEntries.csv' DELIMITER ',' CSV;

-- psql sdcreviews < database/seedingScripts/propertiesSchema.sql