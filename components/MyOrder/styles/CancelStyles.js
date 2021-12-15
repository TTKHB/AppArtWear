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
    container2: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        marginTop: 10,
    },
    view1: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    view2: {
        backgroundColor: 'white',
        width: '96%',
        height: '40%',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
    },
    view3: {
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        borderBottomColor: 'gray',
    },
    view4: {
        width: '96%',
        height: '20%',
        flexDirection: 'row',
    },
    view21: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view22: {
        width: '75%',
        height: '100%',
        marginTop: 2,
    },
    view31: {
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    view32: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        paddingHorizontal: 15
    },
    view321: {
        width: '45%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    textSize: {
        fontSize: 16,
        fontWeight:'bold'
    },
    color: {
        color: 'red',
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
    viewFooter:{
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent:'space-between',
        paddingHorizontal: 15,
        marginVertical:10
    },
    HeaderItem:{
        width: 100,
        height: 23,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    ArtWearMall:{
        fontWeight: 'bold', 
        color: 'white' 
    },
    textTitleHeader:{
        color: 'black',
        marginRight:50, 
        fontSize: 16,
        fontWeight:'bold'
    },
    textCancel:{
        fontSize: 17, 
        fontWeight: 'bold', 
        color: 'red' 
    },
    styleImage:{
        width: '85%', 
        height: '85%'
    },
    btnMuaLai:{
        height:35,
        width:100,
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});