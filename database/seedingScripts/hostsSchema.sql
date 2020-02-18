CREATE TABLE hosts (
    host_id SERIAL NOT NULL,
    host_name VARCHAR(40) NOT NULL,
    host_pic VARCHAR(100) NOT NULL,
    PRIMARY KEY(host_id)
);

COPY hosts(host_name, host_pic)
FROM '/Users/hsintung/Desktop/reviews/database/data/hostEntries.csv' DELIMITER ',' CSV;

-- psql sdcreviews < database/seedingScripts/hostsSchema.sql