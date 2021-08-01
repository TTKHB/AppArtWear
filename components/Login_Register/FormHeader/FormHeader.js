import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';


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
        paddingTop: 50,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8B4C39',
    },
    subheading: {
        fontSize: 18,
        color: '#1b1b33',
        textAlign: 'center',
        marginTop:-30,
        paddingVertical:30
    },
});
export default FormHeader;