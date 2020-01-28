import React from 'react';
import ReviewsListItem from './ReviewsListItem.jsx';

function ReviewsList(props) {
    return (
        <div>
            {props.reviews.map((review, i) => 
            <ReviewsListItem key={i} review={review} />)}
        </div>
    )
}

export default ReviewsList;