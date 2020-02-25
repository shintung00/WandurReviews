/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const { getData } = require('../database/index.js');
const cassandraFunctions = require('../database/cassandraDriver.js');

const { getReviews } = cassandraFunctions;
const { deleteReview } = cassandraFunctions;
const { postReview } = cassandraFunctions;
const { updateReview } = cassandraFunctions;
const { deleteHostResponse } = cassandraFunctions;

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// get request response for property_id = 0
// app.get('/api/0', (req, res) => {
//   getData((error, results) => {
//     if (error) {
//       console.log('error retrive data from reviews table: ', error);
//     } else {
//       console.log('successfully get data from reviews table!');
//       res.send(results);
//     }
//   });
// });


// Create / POST - create a new item
app.post('/properties/:propertyID/reviews', postReview);

// Read / GET - get all reviews of a given property
app.get('/properties/:propertyID/reviews', getReviews);

// Delete / DELETE - delete a review of a given property
app.delete('/properties/:propertyID/reviews', deleteReview);

// Delete / DELETE - delete a reply to a property review
app.put('/properties/:propertyID/replies', deleteHostResponse);

// Update / PUT - update an item based on query
app.put('/properties/:propertyID/reviews', updateReview);


// start server on port 3003
app.listen(port, () => console.log(`app listening on port ${port}!`));
