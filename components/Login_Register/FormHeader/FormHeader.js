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
        paddingTop: 120
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1b1b33',
    },
    subheading: {
        fontSize: 18,
        color: '#1b1b33',
        textAlign: 'center',
    },
});

export default FormHeader;