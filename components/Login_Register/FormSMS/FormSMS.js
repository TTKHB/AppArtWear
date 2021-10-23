import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity
}
from 'react-native';

const FormSMS = ({ SMS, about, onPress }) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.SMS}>{SMS}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.about}>{about}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //Cho container nằm bên phải màn hình
        justifyContent: 'flex-end',
        marginTop: -24,
    },
    SMS: {
        fontSize: 18,
        color: '#000',
    },
    about: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },

});
export default FormSMS;