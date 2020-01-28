const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

// connect to mysql
connection.connect((err) => {
    if (err) {
        console.log('mysql is not connected: ', error);
    } else {
        console.log('mysql is connected');
    }
});

// retrive all sample data in reviews table for API calls.
const getData = (callback) => {
    const query = `SELECT * from reviews WHERE property_id = 0;`;
    connection.query(query, (error, results) => {
        if (error) {
            // console.log('error retrive data from reviews table: ', error);
            callback(error);
        } else {
            // console.log(results);
            callback(null, results);
        }
    })
}

module.exports = {
    getData
};
