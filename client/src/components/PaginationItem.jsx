/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Page, Button, List, Page2, Svg, Path1, Path2, Period } from '../styles/PaginationItem.js';
import Div from '../styles/Div.js';

class PaginationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { changePage, currentPage } = this.props;
    e.preventDefault();
    let clickedPage = e.currentTarget.name;
    if (clickedPage === 'next') {
      clickedPage = Number(currentPage) + 1;
    } else if (clickedPage === 'previous') {
      clickedPage = Number(currentPage) - 1;
    } else {
      clickedPage = Number(clickedPage);
    }
    changePage(clickedPage);
  }

  render() {
    const { page, currentPage } = this.props;
    let pageItem;
    if (typeof (page) === 'number') {
      if (page !== currentPage) {
        // page button styling
        pageItem = (
          <List margin_left={8} margin_right={8}>
            <Button type="button" onClick={this.handleClick} color="rgb(0, 132, 137)" name={page}>
              <Page>{page}</Page>
            </Button>
          </List>
        );
      } else {
        // current page button styling
        pageItem = (
          <List margin_left={8} margin_right={8}>
            <Button type="type" onClick={this.handleClick} color="rgb(255, 255, 255)" name={page}>
              <Page background_color="rgb(0, 132, 137) !important" color="rgb(255, 255, 255) !important">{page}</Page>
            </Button>
          </List>
        );
      }
    }

    if (page === 'previous') {
      // previous button
      pageItem = (
        <List margin_left={0} margin_right={8}>
          <Button type="button" onClick={this.handleClick} color="rgb(0, 132, 137)" name={page}>
            <Page2>
              <Svg viewBox="0 0 18 18" role="img" aria-label="Previous">
                <Path1 />
              </Svg>
            </Page2>
          </Button>
        </List>
      );
    }

    if (page === 'next') {
      // next button
      pageItem = (
        <List margin_left={8} margin_right={0}>
          <Button type="button" onClick={this.handleClick} color="rgb(0, 132, 137)" name={page}>
            <Page2>
              <Svg viewBox="0 0 18 18" role="img" aria-label="Next">
                <Path2 />
              </Svg>
            </Page2>
          </Button>
        </List>
      );
    }

    if (page === 'period') {
      // period button
      pageItem = (
        <List margin_left={8} margin_right={8}>
          <Div user_select="none !important" transform="translateY(-0.35em) !important">
            <Period>...</Period>
          </Div>
        </List>
      );
    }

    return (
      pageItem
      // current page button
    );
  }
}

export default PaginationItem;
