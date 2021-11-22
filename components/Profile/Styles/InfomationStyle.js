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
    headerWrapper: {
        backgroundColor: '#FFFCF2',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    splash: {
        paddingTop: 40,
        paddingBottom: 100,
    },
    content: {
        marginHorizontal: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: -60,
        borderWidth: 0.5,
        borderColor: '#E0E0E0',
        elevation: 2
    },
    InfomationUser: {
        marginHorizontal: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: '#E0E0E0',
        elevation: 2
    },
    divider: {
        height: 1,
        backgroundColor: '#E8E8E8',
        marginLeft: 1,
        margin: 5
    },
    userInfoSection: {
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#8D6E63',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 15,
        paddingHorizontal: 15,
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
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 14,
        borderRadius: 10,
        backgroundColor: '#8D6E63',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 5,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        alignItems: 'center',
    },
    actionDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 5,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        alignItems: 'center'
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 5,
        paddingLeft: 10,
        color: '#05375a',
        height: 40,
    },
    footer: {
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnItemOne: {
        backgroundColor: '#8D6E63',
        borderRadius: 15,
        width: width / 1.1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textItemOne: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
    },
});