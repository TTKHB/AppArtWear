import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text,StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import TextArea from '@freakycoder/react-native-text-area';



// user bình luận 

const ReviewModal = props => {
  const {starRating, onStarRatingPress} = props;
  return (
    <Modal isVisible={true}>
      <View
        style={{
          shadowColor: 'red',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,
          elevation: 15,
          height: 325,
          width: '90%',
          borderRadius: 16,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        }}>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Mời bạn đánh giá</Text>
          <View style={{marginRight: 8}}>
            <StarRating
              maxStars={5}
              starSize={30}
              disabled={true}
              animation="jello"
              rating={starRating}
              fullStarColor="#faec7c"
              emptyStarColor="#faec7c"
              starStyle={{marginLeft: 8}}
              selectedStar={rating => onStarRatingPress(rating)}
            />
          </View>
          <TextArea
            maxCharLimit={50}
            placeholderTextColor="black"
            exceedCharCountColor="yellow"
            placeholder={'Viết bình luận...'}
            style={{height: 150, borderRadius: 16}}
          />

          <TouchableOpacity style={styles.panelButton}>
            <Text style={styles.panelButtonTitle}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

ReviewModal.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string,
};

ReviewModal.defaultProps = {
  stars: 5,
  ratings: 'Hellooo',
};


const styles = StyleSheet.create({
  panelButton: {
    padding: 13,
    borderRadius: 10,
    width:250,
    backgroundColor: '#8D6E63',
    alignItems: 'center',
    marginVertical: 7,
},
panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
},
})



export default ReviewModal;
