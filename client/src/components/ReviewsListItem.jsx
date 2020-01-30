/* eslint-disable react/prop-types */
import React from 'react';
import { UserInfo1, UserInfo2, UserInfo3, UserPhoto, Margin1,
  Name, Date, Margin2, Comment, Margin3, Breakline } from '../styles/ReviewsListItem.js';

const ReviewsListItem = ({ review }) => (
  <div>
    <UserInfo1>
      <UserInfo2>
        <UserInfo3>
          <UserPhoto src={review.user_photo} alt="user_photo" />
        </UserInfo3>
        <Margin1>
          <Name>{review.name}</Name>
          <Date>{review.date}</Date>
        </Margin1>
      </UserInfo2>
    </UserInfo1>
    <Margin2>
      <Comment>{review.comments}</Comment>
    </Margin2>
    <Margin3>
      <Breakline />
    </Margin3>
  </div>
);

export default ReviewsListItem;


// const ReviewsListItem = ({ review }) => {
//   return (
//     <div>
//       <div className="_zjunba">
//         <div className="_jro6t0">
//           <UserPhoto src={review.user_photo} alt="user_photo" />
//           <div className="_zjunbb">
//             <div>
//               <Name>{review.name}</Name>
//             </div>
//             <div>
//               <Date>{review.date}</Date>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Comment>{review.comments}</Comment>
//     </div>
//   );
// };