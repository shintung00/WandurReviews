/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Div from '../styles/Div.js';
// eslint-disable-next-line object-curly-newline
import { UserPhoto, Name, Date, Comment, Breakline } from '../styles/ReviewsListItem.js';

const ReviewsListItem = ({ review }) => (
  <div>
    <Div display="flex !important">
      <Div display="block" position="relative !important">
        <UserPhoto height={48} width={48} src={review.user_photo} alt="user_photo" />
      </Div>
      <Div margin_left={16}>
        <Name>{review.name}</Name>
        <Date>{review.date}</Date>
      </Div>
    </Div>
    <Div margin_top={16}>
      <Comment>{review.comments}</Comment>
    </Div>
    <Div margin_top={24} margin_bottom={24}>
      <Breakline />
    </Div>
  </div>
);

export default ReviewsListItem;
