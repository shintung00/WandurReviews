import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ReviewsList from './ReviewsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line comma-dangle
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/0')
      .then((response) => {
        console.log(response);
        this.setState({ reviews: response.data });
      })
      .catch((error) => {
        console.log('Failed to get reviews from server', error);
      });
  }


  render() {
    const { reviews } = this.state;
    return (
      <div>
        <h1>Reviews</h1>
        <ReviewsList reviews={reviews} />
      </div>
    );
  }
}

export default App;
