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
    divider: {
      height: 5,
      marginTop: 10,
    },
    content: {
      backgroundColor: '#f7f7f7',
      marginTop: 15,
      borderWidth: 0.5,
      borderColor: '#E0E0E0',
      flex: 1,
    },
    sanpham: {
      backgroundColor: '#fff',
      marginLeft: 20,
    },
    money: {
      backgroundColor: '#fff',
      marginLeft: 20,
    },
    //Line gạch ngang
    divider: {
      height: 1,
      backgroundColor: '#E8E8E8',
      marginLeft: 1,
      margin: 5,
    },
    footer: {
      padding: 15,
      backgroundColor: '#FFFCF2',
    },
    texttong: {
      fontSize: 18,
    },
    tongprice: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    btnItemOne: {
      backgroundColor: '#8D6E63',
      borderRadius: 15,
      width: 170,
      height: 60,
      marginLeft: 20,
      marginTop: -27,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textItemOne: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 18,
    },
    viewCartEmpty: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    imageCartEmpty: {
      height: 150,
      width: 150,
    },
    textCartEmptyOne: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 8,
    },
    textCartEmptyTwo: {
      fontSize: 18,
      color: '#505050',
      marginTop: 2,
    },
    viewShoppingNow: {
      height: 50,
      width: 150,
      borderColor: 'red',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    textShoppingNow: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'red',
    },
    FlatListStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      marginBottom: 16,
      padding: 8,
      borderRadius: 8,
      elevation: 2,
      width: width / 1.05,
    },
    viewCart: {
      flexDirection: 'row',
    },
    imageCart: {
      width: 100,
      height: 100,
    },
    itemCart: {
      marginLeft: 10,
    },
    textItemName: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    textItemPrice: {
      fontSize: 18,
      color: 'red',
      fontWeight: 'bold',
    },
    itemAmount: {
      width: 95,
      height: 30,
      borderRadius: 20,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      marginTop: 10,
      elevation: 5,
    },
    textItemAmount: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    btnDeleteCart: {
      marginTop: 50,
      height: 45,
      width: 45,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    viewSpQuanTam:{
      marginTop: 10,
    },
    boxSpQuanTam:{
      width: 150,
      height: 220,
      backgroundColor: 'white',
      marginLeft: 5,
    },
    imageSpQuanTam:{
      width: 150,
      height: 160,
    },
    priceSp:{
      fontSize: 16,
      marginTop: 5,
      fontWeight: 'bold',
      color: 'red',
    },
    priceSale:{
      textDecorationLine: 'line-through',
    },
    Container:{
      backgroundColor: '#ffffff',
    },
    rightComponent:{
      flexDirection: 'row',
      marginRight: 3,
    },
    IconFavorite:{
      marginRight: 3,
    }

  });