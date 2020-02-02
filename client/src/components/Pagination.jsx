/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import PaginationItem from './PaginationItem.jsx';
import { Ulist } from '../styles/Pagination.js';
import Div from '../styles/Div.js';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.reviewsArray = this.reviewsArray.bind(this);
  }

  // assign 7 comments to each button
  reviewsArray() {
    const { reviews } = this.props;
    const result = [];
    for (let i = 0; i < reviews.length; i += 7) {
      result.push(reviews.slice(i, i + 7));
    }
    return result;
  }

  render() {
    const { getPageReviews } = this.props;
    return (
      <div>
        <Div display="inline-block !important">
          <Div margin_bottom={32}>
            <Div display="flex !important" align_itmes="center !important" justify_content="flex-start !important">
              <Ulist>
                
                {this.reviewsArray().map((review, index) => (
                  <PaginationItem
                    key={index}
                    page={index + 1}
                    review={review}
                    getPageReviews={getPageReviews}
                  />
                ))}
              </Ulist>
            </Div>
          </Div>
        </Div>
      </div>
    );
  }
}

export default Pagination;
