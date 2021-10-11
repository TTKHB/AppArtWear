import React from 'react';
import {StyleSheet}from 'react-native';


export const Styles = StyleSheet.create ({
    Header: {
      width: '100%',
      height: '8%',
      backgroundColor: 'white',
      flexDirection: 'row'
    },
    TextHeader: {
      fontSize: 26,
    },
    ViewHeader: {
      alignItems: 'center',
      marginTop: '5%',
      width: '80%'
    },
    IconHeader: {
   width: 25,
   height: 25
    },
    TouHeder: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
    },
    /////////////////////////////body
    Body: {
      height: '90%',
      backgroundColor: '#EEEEEE',
    },
    ImageBgr: {
      width: '100%',
      height: 170,
      marginTop: 7,
      alignItems: 'center',
    },
    TextInput: {
      width: '90%',
      height: 40,
      flexDirection: 'row',
      backgroundColor: 'white',
      marginTop: '27%',
      borderRadius: 7,
    },
    Imageserch: {
      width: 27,
      height: 27,
      marginTop: '2%',
      marginLeft: '3%',
    },
    FlatList: {
      width: '90%',
      height: 50,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 0.5,
    },
    ImgFlat: {
      width: 30,
      height: 30,
      marginLeft: 7,
      justifyContent: 'center',
    },
    TextFlat: {
      fontSize: 17,
      marginLeft: 15,
    },
    TextFlat1: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold',
    },
    BodyTheme: {
      width: '100%',
      height: 460,
      backgroundColor: 'white',
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.43,
      shadowRadius: 5.51,
  
      elevation: 2,
    },
    BodyTheme1: {
      width: '100%',
      height: 380,
      backgroundColor: 'white',
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.43,
      shadowRadius: 5.51,
  
      elevation: 2,
    },
    Touend: {
      width: 150,
      height: 40,
      backgroundColor: '#8D6E63',
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 7,
    },
    EndView: {
      alignItems: 'center',
      width: '100%',
      height: 130,
      backgroundColor: 'white',
      marginTop: 20,
    },
    textend: {
      fontSize: 18,
    },
    Hangdau: {
      width: '90%',
      flexDirection: 'row',
      marginTop: 5,
      height: 50,
      borderBottomWidth: 0.5,
      alignSelf: 'center',
    },
//---------------Drawer-------------------------------------------
Tieude: {
  fontSize: 20,
  padding: 10,
},
navigationContainer: {
  width: '100%',
  height: '100%'
},
container: {
 width: 100
},
TouDrawer: {
  width: '100%',
  height: 45,
  borderBottomWidth: 0.15,
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center'
},
TextDrawer: {
  fontSize:  20,
  marginLeft: 20,
  width: '80%'
}

  });