//list databases
\l 

//choose database
\c <database name>

//show tables in the database
\d 

//show all tables in the shell
\dt 


//show all reviews for a given listing
SELECT * FROM reviews INNER JOIN properties ON reviews.property_id = properties.property_id INNER JOIN users ON reviews.user_id = users.user_id INNER JOIN hosts ON hosts.host_id = reviews.host_id WHERE reviews.property_id = 9980000;

//post a new review for a given listing
INSERT INTO reviews(property_id, user_id, comment_time, comment, host_id, host_replied, host_comment, host_time, rating_communication, rating_check_in, rating_cleanliness, rating_accuracy, rating_location, rating_value, rating_overall) VALUES (8, 191919, 'Thu Sep 26 2019 11:10:03 GMT-0700 (PDT)', 'Heyyyyyyyyy', 34342, false, null, null, 5, 5, 5, 5, 5, 5, 5);

//update review
UPDATE reviews SET comment_time = 'Thu Sep 26 2011 11:20:03 GMT-0700 (PDT)', comment = 'I am so drunk', rating_check_in = 1, rating_cleanliness = 1, rating_accuracy = 1  WHERE review_id = 60000001;

//delete a review
DELETE FROM reviews WHERE review_id = 60000001;

//update a review response
UPDATE reviews SET host_replied = true, host_comment = 'When will SDC be over?', host_time = 'Thu Sep 26 2000 11:10:03 GMT-0700 (PDT)'  WHERE review_id = 60000002;

//delete a review response
UPDATE reviews SET host_replied = f, host_comment = null, host_time = null WHERE review_id = 60000002;