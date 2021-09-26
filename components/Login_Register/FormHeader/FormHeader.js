import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, Image } from 'react-native';
const FormHeader = ({ Heading, subHeading }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>{Heading}</Text>
            </View>
            <Text style={styles.subheading}>{subHeading}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#8B4C39',
    },
    subheading: {
        fontSize: 28,
        color: '#1b1b33',
        textAlign: 'center',
        marginTop: -30,
        paddingVertical: 28,
    },
});
export default FormHeader;