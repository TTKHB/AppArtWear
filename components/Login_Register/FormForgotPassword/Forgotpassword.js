import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';

const Forgotpassword = ({ forgotPass }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.forgotPass }>{forgotPass}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    forgotPass : {
        fontSize: 18,
        color: '#000',
    },

});
export default Forgotpassword;