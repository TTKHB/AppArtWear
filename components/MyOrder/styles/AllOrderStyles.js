import {
    StyleSheet,
    Dimensions,
}
from 'react-native';
const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    images: {
      width: 100,
      height: 100,
    },
    container1: {
      width: '100%',
      height: 190,
      backgroundColor: 'white',
      marginTop: 10,
      alignItems: 'center'
    },
    container2: {
      width: '93%',
      height: '18%',
      borderBottomWidth: 0.3,
      flexDirection: 'row'
    },
    container3: {
      width: '93%',
      height: '50%',
      flexDirection: 'row'
    },
    container4: {
      width: '93%',
      height: '25%',
      flexDirection: 'row',
      alignItems: 'center', justifyContent: 'center'
    },
    imageFlat: {
      width: '80%',
      height: '80%'
    },
    textSoLuong: {
      fontSize: 14,
      marginTop: 5,
      color: 'black'
    },
    textFlat: {
      fontSize: 16,
      marginTop: 5,
      color: 'red',
      fontWeight: 'bold'
    },
    marginLeft: {
      marginLeft: 10
    },
    Tou: {
      width: '47%',
      height: 40,
      borderRadius: 7,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    texttou: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold'
    },
    ViewRong: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    images: {
      width: 100,
      height: 100,
    },
    textGiaoHang:{
        fontSize: 18, 
        fontWeight: '300', 
        marginTop: 5 
    },
    badge:{
        height: 15, 
        width: 15, 
        borderRadius: 15
    },
    viewImage:{
        width: '30%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    viewItem:{
        width: '70%'
    },
    textName:{
        fontSize: 18, 
        marginTop: '2%', 
        fontWeight: 'bold'
    }
  });