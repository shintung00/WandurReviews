/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewsListItem from './ReviewsListItem.jsx';

const ReviewsList = ({ reviews }) => (
  <div tabIndex="-1">
    {reviews.map((review, index) => <ReviewsListItem key={index} review={review} />)}
  </div>
);

export default ReviewsList;
