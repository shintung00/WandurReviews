# Wandur - Reviews
How to start this component?

1. npm install
2. run 'mysql u root p < database/schema.sql' command in the terminal to create database and table
3. npm run seeddatabase
4. npm run reactdev
5. npm run start

API Routes  Reviews

* **Method**: GET
  *  **URL**: /properties/:${propertyId}/reviews;
  *  **Route Parameters:**: propertyId=[integer];
  *  **Query Parameters:**: Optional;
  *  **Description:**: Route to handle retrieving all reviews for a given property and accepts optional query used to filter results;
  *  **Body:**: false


* **Method** POST
  *  **URL**: /properties/:${propertyId}/reviews;
  *  **Route Parameters:**: propertyId=[integer];
  *  **Query Parameters:**: N/A;
  *  **Description:**: Route to handle inserting a new review for a property;
  *  **Body:**: userId=[integer], reviewerName=[varchar], ratingOverall=[integer], ratingCommunication=[integer], ratingCheckIn=[integer], ratingCleanliness=[integer], ratingAccuracy=[integer], ratingLocation=[integer], comment=[varchar]


* **Method**: PUT
  *  **URL**: /properties/:${propertyId}/reviews?review=${reviewId}/user/:${userId};
  *  **Route Parameters:**: propertyId=[integer], reviewId=[integer], userId=[integer];
  *  **Query Parameters:** Required: reviewNumber=[integer];
  *  **Description:**: Route for users to edit a posted review for a given property;
  *  **Body:**: ratingOverall=[integer], ratingCommunication=[integer], ratingCheckIn=[integer], ratingCleanliness=[integer], ratingAccuracy=[integer], ratingLocation=[integer], comment=[varchar];

* **Method**: PUT
  *  **URL**: /properties/:${propertyId}/reviews?review=${reviewId}/host/:${hostId};
  *  **Route Parameters:**: propertyId=[integer], reviewId=[integer], userId=[integer];
  *  **Query Parameters:** Required: reviewNumber=[integer];
  *  **Description:**: Route for hosts to reply to a review;
  *  **Body:**: hostReplied=[bool], hostComment=[varchar], hostTime=[time];

* **Method**: DELETE
  *  **URL**: /properties/:${propertyId}/reviews?review=${reviewId}/user/:${userId};
  *  **Route Parameters:**: propertyId=[integer], reviewId=[integer], userId=[integer];
  *  **Query Parameters:** Required: reviewNumber=[integer];
  *  **Description:**: Route to delete a posted review by a user;
  *  **Body:**: false
 
 * **Method**: DELETE
  *  **URL**: /properties/:${propertyId}/reviews?review=${reviewId}/host/:${hostId};
  *  **Route Parameters:**: propertyId=[integer], reviewId=[integer], hostId=[integer];
  *  **Query Parameters:** Required: reviewNumber=[integer];
  *  **Description:**: Route to delete a posted review by a user;
  *  **Body:**: false
