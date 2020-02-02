/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import Pagination from './Pagination.jsx';
import { Body } from '../styles/App.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line comma-dangle
      reviewsByPage: [],
      totalReviews: [],
    };
    this.getPageReviews = this.getPageReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/0')
      .then((response) => {
        // shows first 7 comments by default
        console.log(response.data);
        this.setState({
          reviewsByPage: response.data.slice(0, 7),
          totalReviews: response.data,
        });
      })
      .catch((error) => {
        console.log('Failed to get reviews from server', error);
      });
  }

  getPageReviews(reviews) {
    this.setState({ reviewsByPage: reviews });
  }

  render() {
    const { reviewsByPage, totalReviews } = this.state;
    return (
      <div>
        <Body>
          <h1>Reviews</h1>
          <ReviewsList reviews={reviewsByPage} />
          <Pagination reviews={totalReviews} getPageReviews={this.getPageReviews} />
        </Body>
      </div>
    );
  }
}

export default App;
