import {
    StyleSheet,
    Dimensions,
}
from 'react-native';
const { height, width } = Dimensions.get('window');
export const Styles = StyleSheet.create({
    Header: {
        height: '8%',
        backgroundColor: '#8D6E63',
        flexDirection: 'row',
    },
    ImageAvatar: {
        width: 25,
        height: 25,
    },
    ImageSeemore: {
        width: 30,
        height: 30,
    },
    AddFrends: {
        width: 25,
        height: 25,
    },
    ChatText: {
        fontSize: 36,
        fontFamily: 'Delight Candles',
        alignSelf: 'center',
        color: 'white',
    },
    Body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F8F8',
    },
    ImageUser: {
        width: 55,
        height: 55,
        borderRadius: 70,
    },
    TextNameUser: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    TextAddressUser: {
        fontSize: 18,
    },
    UserIcon: {
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        height: 80
    },
    TextInputBody: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    HeaderDetail: {
        width: '100%',
        height: '8%',
        backgroundColor: '#8D6E63',
        flexDirection: 'row',
    },
    backheader: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    backheader1: {
        width: 26,
        height: 26,
        marginTop: 7,
    },
    BodyDetail: {
        width: '100%',
        height: '86%',
        backgroundColor: 'white',
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    ButtonChat: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        borderTopWidth: 0.3,
        borderColor: 'gray'
    },
    messageTop: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginVertical: 5
    },
    messageImg: {
        width: 35,
        height: 35,
        marginRight: 10
    },
    messageText: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#1877f2',
        color: 'white',
        maxWidth: 300
    },
    messageBottom: {
        fontSize: 12,
        marginLeft: 10
    },
    messageTopTwo: {
        alignItems: 'flex-end',
        marginVertical: 5
    },
    messageImgTwo: {
        width: 35,
        height: 35,
    },
    messageTextTwo: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#1877f2',
        color: 'white',
        maxWidth: 300,
        marginRight: 10
    },
    messageBottomTwo: {
        fontSize: 12,
        alignItems: 'flex-end',
    },
});
