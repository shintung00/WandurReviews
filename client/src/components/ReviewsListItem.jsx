import React from 'react';

function ReviewsListItem(props) {
    return (
        <div>
            <div>
                <img src={props.review.user_photo} alt="user_photo" />
            </div>
            <div>
                <div>{props.review.name}</div>
                <div>{props.review.date}</div>
            </div>
            <div>{props.review.comments}</div>
        </div>
    )
}

export default ReviewsListItem;