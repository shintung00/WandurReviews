/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsListItem = ({ review }) => (
  <div>
    <div>
      <img src={review.user_photo} alt="user_photo" />
    </div>
    <div>
      <div>{review.name}</div>
      <div>{review.date}</div>
    </div>
    <div>{review.comments}</div>
  </div>
);

export default ReviewsListItem;
