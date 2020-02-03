/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
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
  }

  render() {
    const { changePage, pages, currentPage } = this.props;
    return (
      <div>
        <Div display="inline-block !important">
          <Div margin_bottom={32}>
            <Div display="flex !important" align_itmes="center !important" justify_content="flex-start !important">
              <Ulist>
                {pages.map((page, index) => (
                  <PaginationItem
                    key={index}
                    page={page}
                    currentPage={currentPage}
                    changePage={changePage}
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
