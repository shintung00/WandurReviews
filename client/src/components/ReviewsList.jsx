/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewsListItem from './ReviewsListItem.jsx';

const ReviewsList = ({ reviews }) => (
  <div>
    {reviews.map((review) => <ReviewsListItem key={review.id} review={review} />)}
  </div>
);

export default ReviewsList;
