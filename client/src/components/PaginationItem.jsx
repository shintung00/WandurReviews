/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Page, Button, List, Page2, Svg, Path1, Path2, Period } from '../styles/PaginationItem.js';

class PaginationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { getPageReviews, review } = this.props;
    getPageReviews(review);
  }

  render() {
    const { page } = this.props;
    return (
      // page button
      <List margin_left={8} margin_right={8}>
        <Button type="button" onClick={this.handleClick} color="rgb(0, 132, 137)">
          <Page>{page}</Page>
        </Button>
      </List>

      // current page button

      
      
      // previous button
      // <List margin_left={0} margin_right={8}>
      //   <Button type="button" onClick={this.handleClick} color="rgb(0, 132, 137)">
      //     <Page2>
      //       <Svg viewBox="0 0 18 18" role="img" aria-label="Previous">
      //         <Path1 />
      //       </Svg>
      //     </Page2>
      //   </Button>
      // </List>

      // next button
      // <List margin_left={8} margin_right={0}>
      //   <Button type="button" onClick={this.handleClick} color="rgb(0, 132, 137)">
      //     <Page2>
      //       <Svg viewBox="0 0 18 18" role="img" aria-label="Next">
      //         <Path2 />
      //       </Svg>
      //     </Page2>
      //   </Button>
      // </List>

      // period symbol
      // <List margin_left={8} margin_right={8}>
      //   <div user-select="none !important" transform="translateY(-0.35em) !important">
      //     <Period>...</Period>
      //   </div>
      // </List>
    );
  }
}

export default PaginationItem;
