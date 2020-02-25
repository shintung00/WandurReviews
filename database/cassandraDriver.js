const cassandra = require('cassandra-driver');
const faker = require('faker');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc',
});

const getReviews = (req, res) => {
  client.execute(`SELECT * FROM reviews WHERE property_id = ${req.params.propertyID}`)
    .then((result) => {
      // console.log(`now showing reviews for property #${req.params.propertyID}`);
      res.json(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteReview = (req, res) => {
  client.execute(`DELETE FROM reviews WHERE property_id = ${req.params.propertyID} AND review_id = ${req.query.reviewID};`).then(() => {
    // console.log(`review #${req.query.reviewID} successfully deleted`);
    res.send(`review #${req.query.reviewID} successfully deleted`);
  });
};

const postReview = (req, res) => {
  const { propertyID } = req.params;
  const reviewID = Math.floor((Math.random() * 1000000) + 50000000);
  const userID = Math.floor(Math.random() * 4000000);
  const { userName } = req.body;
  const userPic = faker.internet.avatar();
  const { reviewComment } = req.body;
  const reviewTime = faker.date.past().toString();
  const { communication } = req.body;
  const { check } = req.body;
  const { clean } = req.body;
  const { accuracy } = req.body;
  const { location } = req.body;
  const { value } = req.body;
  const query = 'INSERT INTO reviews (property_id, review_id, user_id, user_name, user_pic, review_comment, review_time, rating_communication, rating_check, rating_clean, rating_accuracy, rating_location, rating_value) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  const params = [propertyID, reviewID, userID, userName, userPic, reviewComment, reviewTime, communication, check, clean, accuracy, location, value];
  client.execute(query, params, { prepare: true })
    .then((result) => {
      // console.log(`successfully posted review #${reviewID}`);
      res.send(`successfully posted review #${reviewID}`);
      res.status(200);
    })
    .catch((error) => {
      // console.error(error);
      res.status(400);
      res.end('error in posting review');
    });
};

const deleteHostResponse = (req, res) => {
  const query = 'SELECT host_id FROM reviews WHERE property_id = ? AND review_id = ?;';
  const params = [req.params.propertyID, req.query.reviewID];
  console.log(req.query.reviewID);
  client.execute(query, params, { prepare: true })
    .then((result) => {
      if (result.rows[0].host_id === req.body.hostID) {
        client.execute(`UPDATE reviews SET host_comment = '', host_time = '' WHERE property_id = ${req.params.propertyID} AND review_id = ${req.query.reviewID};`, { prepare: true })
          .then((result) => res.send('host review delete successful'))
          .catch((error) => {
            console.log(error);
            res.send('oh poop2');
          });
      } else {
        res.send('your request is invalid. please try again');
      }
    })
    .catch((error) => {
      console.log(error);
      res.send('oh poop1');
    });
};


const updateReview = (req, res) => {
  const query = 'SELECT host_id, user_id FROM reviews WHERE property_id = ? AND review_id = ?;';
  const params = [req.params.propertyID, req.query.reviewID];
  client.execute(query, params, { prepare: true })
    .then((result) => {
      if (result.rows[0].host_id === req.body.hostID) {
        client.execute(`UPDATE reviews SET host_comment = '${req.body.hostReview}', host_time = '${faker.date.past().toString()}' WHERE property_id = ${req.params.propertyID} AND review_id = ${req.query.reviewID};`, { prepare: true })
          .then((result) => res.send('host review update successful'))
          .catch((error) => {
            console.log(error);
            res.send('oh poop2');
          });
      } else if (result.rows[0].user_id === req.body.userID) {
        const {
          reviewComment, communication,
          check, clean, accuracy, location, value,
        } = req.body;
        client.execute(`UPDATE reviews SET review_comment = '${reviewComment}', review_time = '${faker.date.past().toString()}', rating_communication = ${communication}, rating_check = ${check}, rating_clean = ${clean}, rating_accuracy =${accuracy}, rating_location = ${location}, rating_value = ${value} WHERE property_id = ${req.params.propertyID} AND review_id = ${req.query.reviewID}`, { prepare: true })
          .then((result) => res.send('guest review update successful'))
          .catch((error) => {
            console.log(error);
            res.send('something went wrong with processing your review update');
          });
      } else {
        res.send('your request is invalid. please try again');
      }
    })
    .catch((error) => {
      console.log(error);
      res.send('oh poop1');
    });
};


module.exports = {
  getReviews,
  deleteReview,
  postReview,
  updateReview,
  deleteHostResponse,
};
