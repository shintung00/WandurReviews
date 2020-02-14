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

// Create / POST - create a new item
app.post(`properties/:${property}/reviews`, (req, res) => {
  {
    Reviewer: ${},
    RatingOverall: ${},
    RatingCommunication: ${},
    RatingCheckIn: ${},
    RatingCleanliness: ${},
    RatingAccuracy: ${},
    RatingLocation: ${},
    RatingValue: ${},
    PropertyId: ${},
    Comment: ${},
    Time: ${},
    ReviewId: ${},
    HostReplied: ${},
    HostComment: ${},
    HostTime: ${}
  };
  somePOSTFunction((error, result) => {
    if (error) {
      console.log('error in posting review: ', error)
    } else {
      console.log('successfully posted review!');
      res.send(result);
    }
  })
});

// Read / GET - read an item
app.get(`properies/:${property}/reviews`, (req, res) => {
  {
    
  }
  someGETFunction((error, result) => {
    if (error) {
      console.log('error in retrieving reviews: ', error)
    } else {
      console.log('successfully posted review!');
      res.send(result);
    }
  })
});

// Update / PUT - update an item based on query
app.put(`properties/:${property}/reviews?review=${number}`, (req, res) => {
  {
    RatingOverall: ${},
    RatingCommunication: ${},
    RatingCheckIn: ${},
    RatingCleanliness: ${},
    RatingAccuracy: ${},
    RatingLocation: ${},
    RatingValue: ${},
    PropertyId: ${},
    Comment: ${},
    Time: ${},
    ReviewId: ${}
  };
  someUPDATEFunction((error, result) => {
    if (error) {
      console.log('error in updating review: ', error)
    } else {
      console.log('successfully updated review!');
      res.send(result);
    }
  })
});

app.put(`properties/:${property}/reviews?review=${number}?host=true`, (req, res) => {
  {
    HostReplied: ${},
    HostComment: ${}
  };
  someUPDATEFunction((error, result) => {
    if (error) {
      console.log('error in updating review: ', error)
    } else {
      console.log('successfully updated review!');
      res.send(result);
    }
  })
});

// Delete / DELETE - delete an item based on query
app.delete(`properties/:${property}/reviews?review=${number}`, (req, res) => {
  someDELETEFunction((error, result) => {
    {
      ReviewId: ${}
    }
    if (error) {
      console.log('error in deleting review: ', error)
    } else {
      console.log('successfully deleted review!');
      res.send(result);
    }
  })
});


// start server on port 3003
app.listen(port, () => console.log(`app listening on port ${port}!`));
