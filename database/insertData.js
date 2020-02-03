/* eslint-disable no-console */
const mysql = require('mysql');
const data = require('./dummyData.js');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

// connect to mysql
connection.connect((err) => {
  if (err) {
    console.log('err connect to mysql: ', err);
  } else {
    console.log('mysql is connected');
  }
});

// insert data to table reviews;
const query = 'INSERT INTO reviews (property_id, date, name, comments, user_photo) VALUES (?, ?, ?, ?, ?);';
// eslint-disable-next-line no-plusplus
for (let i = 0; i < data.length; i++) {
  const currentProperty = data[i];
  // eslint-disable-next-line max-len
  connection.query(query, [currentProperty.property_id, currentProperty.date, currentProperty.name, currentProperty.comments, currentProperty.user_photo]);
}

connection.end();
