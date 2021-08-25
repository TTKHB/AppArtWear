import React,{Component } from "react";
import COLORS from '../../assets/data/colors';
import StarRating from 'react-native-star-rating';

// Ngôi sao trong phần đánh giá

class Star extends Component {
  // Hiện sẵn đánh giá trang thái
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <StarRating 
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor = {COLORS.yellow } 
        starSize={30}
      />
    );
  }
}
export default Star;