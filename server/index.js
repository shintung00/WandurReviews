/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getData } = require('../database/index.js');

const app = express();
const port = 3003;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// get request response for property_id = 0
app.get('/api/0', (req, res) => {
  getData((error, results) => {
    if (error) {
      console.log('error retrive data from reviews table: ', error);
    } else {
      console.log('successfully get data from reviews table!');
      res.send(results);
    }
  });
});

// start server on port 3003
app.listen(port, () => console.log(`app listening on port ${port}!`));
