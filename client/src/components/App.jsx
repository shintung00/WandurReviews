import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import ReviewsListItem from './ReviewsListItem.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        this.getReviews();
    }
    
    getReviews() {
        axios.get('/api/0')
          .then((response) => {
              console.log(response);
              this.setState({reviews: response.data});
          })
          .catch((error) => {
              console.log('Failed to get reviews from server', error);
          });
    }


    render() {
        return (
            <div>
                <h1>Reviews</h1>
                <ReviewsList reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default App;