# reviews
How to start this component?

1. npm install
2. run 'mysql -u root -p < database/schema.sql' command in the terminal to create database and table
3. npm run seed-database
4. npm run react-dev
5. npm run start

API Routes - Reviews

-Method: GET
-URL Params Required: propertyId=[integer]
-URL Query: Optional
-Description: Route to handle retrieving all reviews for a given property and accepts optional query used to filter results
-URL: /properties/:${property}/reviews

-Method: POST
-URL Params Required: propertyId=[integer]
-URL Query: N/A
-Description: Route to handle inserting a new review for a property
-URL: /properties/:${property}/reviews

-Method: PUT
-URL Params Required: propertyId=[integer]
-URL Query Required: reviewNumber=[integer] 
-Description: Route to edit a posted review for a given property
-URL: /properties/:${property}/reviews?review=${number}

-Method: DELETE
-URL Params Required: propertyId=[integer]
-URL Query Required: reviewNumber=[integer] 
-Description: Route to delete a posted review for a given property
-URL: /properties/:${property}/reviews?review=${number}
