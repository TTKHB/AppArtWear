import {
    StyleSheet,
    Dimensions,
}
    from 'react-native';
const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    //Header
    wrapper: {
      height: 300,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    image: {
      height: 300,
      width: width,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    //Body
    detailsContainer: {
      flex: 1,
      padding: 10,
      paddingTop: 30,
      backgroundColor: "white",
      borderTopColor: "black",
    },
    nameText: {
      fontWeight: 'bold',
      fontSize: 28,
    },
    priceText: {
      fontSize: 28,
      color: 'red',
    },
    rate: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingBottom: 2,
    },
    contentship: {
      backgroundColor: '#fff',
      marginTop: 15,
      borderWidth: 0.5,
      borderColor: '#E0E0E0',
      flex: 1,
    },
    flashing: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
    },
  
    colorContainer: {
      flexDirection: 'row',
    },
    sizesContainer: {
      flexDirection: 'row',
    },
    score: {
      fontSize: 13,
      marginLeft: 20,
    },
    mota: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 5,
    },
    //Footer
    footerContainer: {
      padding: 10,
      flexDirection: 'row',
      backgroundColor: "white",
    },
    btnContainer: {
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#8D6E63',
    },
    btnText: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'white',
    },
  
    paginationStyle: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    paginationText: {
      color: 'orange',
      fontSize: 28,
    },
    // Style bình luận
    container1: {
      paddingRight: 16,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    content: {
      marginLeft: 16,
      flex: 1,
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6,
    },
    bodyContainer: {
      flex: 1,
    },
    separator: {
      height: 1,
      backgroundColor: '#CCCCCC',
    },
    image_user: {
      width: 45,
      height: 45,
      borderRadius: 20,
      marginLeft: 20,
    },
    time: {
      fontSize: 11,
      color: '#808080',
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    rate: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingBottom: 2,
    },
  });