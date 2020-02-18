CREATE TABLE reviews (
    review_id SERIAL NOT NULL,
    property_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_time VARCHAR(100) NOT NULL,
    comment VARCHAR(300) NOT NULL,
    host_id INT NOT NULL,
    host_replied BOOLEAN NOT NULL,
    host_comment VARCHAR(150),
    host_time VARCHAR(100),
    rating_communication FLOAT NOT NULL,
    rating_check_in FLOAT NOT NULL,
    rating_cleanliness FLOAT NOT NULL,
    rating_accuracy FLOAT NOT NULL,
    rating_location FLOAT NOT NULL,
    rating_value FLOAT NOT NULL,
    rating_overall FLOAT NOT NULL,
    PRIMARY KEY(review_id)
);

COPY reviews(property_id, user_id, comment_time, comment, host_id, host_replied, host_comment, host_time, rating_communication, rating_check_in, rating_cleanliness, rating_accuracy, rating_location, rating_value, rating_overall)
FROM '/Users/hsintung/Desktop/reviews/database/data/reviewEntries.csv' DELIMITER ',' CSV;


-- psql sdcreviews < database/seedingScripts/reviewsSchema.sql