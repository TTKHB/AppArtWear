import {
    StyleSheet,
    Dimensions,
}
    from 'react-native';
const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: '7%',
        flexDirection: 'row',
    },
    Shadow: {
        shadowColor: '#000',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    ImageHeader: {
        width: 20,
        height: 20,
    },
    Text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    TouHeader: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //----------------------------------------------------
    Body: {
        width: '100%',
        height: '93%',
        backgroundColor: 'white',
    },
    View1: {
        width: '100%',
        height: 50,
        backgroundColor: '#FDF5CA',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    View2: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
    },
    View3: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: 'white',
    },
    ImageBody: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    TextBody: {
        fontSize: 16,
        marginLeft: 7,
    },
    Rating: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 7,
        marginLeft: -20,
    },
    ImageRating: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        marginLeft: 10,
    },
    TextIp: {
        width: '95%',
        textAlignVertical: 'top',
        height: 200,
        backgroundColor: 'white',
        borderWidth: 0.3,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 7,
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
    },
    headerDialog:{
        borderRadius: 10,
        borderColor: 'white',
        width: width / 1.09,
    },
    viewRating:{
        borderWidth: 0.5,
        height: 410,
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
    },
    imageRating:{
        width: '100%',
        height: '100%',
        marginLeft: 10,
    },
    btnDanhGia:{
        width: '95%',
        height: 30,
        backgroundColor: '#3DB2FF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
    }
});