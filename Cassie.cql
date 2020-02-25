Cassandra Tables
DESCRIBE KEYSPACES
DESCRIBE KEYSPACE ____
DESCRIBE TABLE ____

CREATE KEYSPACE sdc WITH REPLICATION = { 'class' :  'SimpleStrategy', 'replication_factor' : 1};



CREATE TABLE reviews (
  property_id int, 
  review_id int, 
  user_id int, 
  user_name text, 
  user_pic text, 
  review_comment text, 
  review_time text, 
  host_id int, 
  host_name text, 
  host_pic text, 
  host_comment text, 
  host_time text, 
  rating_communication int, 
  rating_check int, 
  rating_clean int, 
  rating_accuracy int, 
  rating_location int, 
  rating_value int,
  PRIMARY KEY (property_id, review_id)
);


COPY reviews (  
  property_id, 
  review_id, 
  user_id, 
  user_name, 
  user_pic, 
  review_comment, 
  review_time, 
  host_id, 
  host_name, 
  host_pic, 
  host_comment, 
  host_time, 
  rating_communication, 
  rating_check, 
  rating_clean, 
  rating_accuracy, 
  rating_location, 
  rating_value
) FROM '/home/ubuntu/csv/cassieEntries.csv' WITH header = false AND DELIMITER = ','; 


COPY reviews (  
  property_id, 
  review_id, 
  user_id, 
  user_name, 
  user_pic, 
  review_comment, 
  review_time, 
  host_id, 
  host_name, 
  host_pic, 
  host_comment, 
  host_time, 
  rating_communication, 
  rating_check, 
  rating_clean, 
  rating_accuracy, 
  rating_location, 
  rating_value
) FROM '/home/ubuntu/csv/cassieEntries.csv' WITH header = false AND DELIMITER = ',' AND MAXBATCHSIZE = 3000; CHUNKSIZE


-- CREATE A NEW REVIEW
-- INSERT INTO reviews (
--   property_id, 
--   review_id,
--   user_id,
--   user_name,
--   user_pic,
--   review_time,
--   review_comment,
--   rating_communication, 
--   rating_check, 
--   rating_clean, 
--   rating_accuracy, 
--   rating_location, 
--   rating_value, 
--   host_id,
--   host_name,
--   host_pic,
--   host_comment,
--   host_time
--   ) VALUES (
--     20,
--     50000005,
--     1000,
--     'Bro',
--     'https:s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg',
--     'Thu Feb 21 2019 09:19:18 GMT-0800 (PST)',
--     'Hey hey hey it is time to play',
--     5,
--     5,
--     5,
--     5,
--     5,
--     5,
--     304398,
--     'Kutch',
--     'https:s3.amazonaws.com/uifaces/faces/twitter/ehsandiary/128.jpg',
--     '',
--     ''
--   );

  
--   DELETE review
--   DELETE FROM reviews WHERE property_id = 1 AND review_id = 7;

--   UPDATE review
--   UPDATE reviews SET review_comment = 'This is a profane comment', rating_communication = 1 WHERE property_id = 0 AND review_id = 0;
  
--   UPDATE review response
--   UPDATE reviews SET host_comment = 'HEY IT WORKSSSSS', host_time = 'Thu Feb 21 2019 09:19:18 GMT-0800 (PST)' WHERE property_id = 9999999 AND review_id = 49999999;


--   DELETE host response
--   UPDATE reviews SET host_comment = '', host_time = '' WHERE property_id = 9999999 AND review_id = 49999999;
