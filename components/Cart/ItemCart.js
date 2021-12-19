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
    height: 116,
  },
  itemCart: {
    marginLeft: 10,
  },
  textItemName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textpain: {
    fontSize: 18,
    marginRight: 15
  },
  textsize: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textItemPrice: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  itemSizeColor: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
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
    marginTop: 5,
    elevation: 5,
  },
  textItemAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnDeleteCart: {
    marginTop: 75,
    height: 45,
    width: 45,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  viewSpQuanTam: {
    marginTop: 10,
  },
  boxSpQuanTam: {
    width: 150,
    height: 220,
    backgroundColor: 'white',
    marginLeft: 5,
  },
  imageSpQuanTam: {
    width: 150,
    height: 160,
  },
  priceSp: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'red',
  },
  priceSale: {
    textDecorationLine: 'line-through',
  },
  Container: {
    backgroundColor: '#ffffff',
  },
  rightComponent: {
    flexDirection: 'row',
    marginRight: 3,
  },
  IconFavorite: {
    marginRight: 3,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  headerBottomSheet: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',

  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
  },
  panelButton: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    marginTop:8
  },
  panelButtonCancel: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#B80000',
    alignItems: 'center',
    marginTop:8
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  bannerGif: {
    justifyContent: 'center',
  },
  viewImageFilter: {
    margin: 4,
    borderColor: 'gray',
    borderWidth: 0.5
  },
  viewImageRong: {
    margin: 4,
  },
  viewRong: {
    height: 180,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRong: {
    fontSize: 14
  },
  sizesContainer: {
    flexDirection: 'row',
  },
});