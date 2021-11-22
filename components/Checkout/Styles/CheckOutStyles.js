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
    backgroundColor: '#fff',
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    flex: 1,
  },
  sanpham: {
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  money: {
    backgroundColor: '#fff',
    paddingHorizontal: 10
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
    fontSize: 16,
  },
  tongprice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnItemOne: {
    backgroundColor: '#8D6E63',
    borderRadius: 15,
    width: 200,
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
    fontSize: 16,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    height: 400,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 0,
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
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    color: 'gray',
  },
  panelSubtitle: {
    fontSize: 18,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#8D6E63',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonCancel: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DC143C',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomPayment: {
    alignItems: 'center'
  },
  viewRadio: {
    marginTop: 10
  },
  btnOne: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  theTinDung: {
    marginLeft: 8
  },
  btnTwo: {
    marginLeft: 38,
    flexDirection: 'row'
  },
  imageRadioTwo: {
    width: 24,
    height: 24
  },
  viewImageRadioTwo: {
    marginLeft: 10
  },
  textRadio: {
    fontSize: 16
  },
  viewDieuKhoan: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textDkOne: {
    fontSize: 16
  },
  chinhSach: {
    flexDirection: 'row'
  },
  textDichVu: {
    fontSize: 16,
    color: '#1E90FF'
  },
  textChinhSachOne: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10
  },
  textChinhSachTwo: {
    fontSize: 16,
    color: '#1E90FF',
    marginLeft: 10
  },
  viewArtWear: {
    flexDirection: 'row'
  },
  textArtWearOne: {
    fontSize: 18,
    color: '#000'
  },
  textArtWear: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  Container: {
    backgroundColor: '#ffffff',
  },
  textInput: {
    color: '#05375a',
    height: 40,
    paddingHorizontal: 20
  },
  viewNote: {
    paddingHorizontal: 20
  },
  textNote: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});