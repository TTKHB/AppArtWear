import React from 'react';
import { StyleSheet, View, Text, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

const FormContainer = ({ children }) => {
    return (
        <KeyboardAvoidingView
            enabled behavior={Platform.OS === 'ios' ? "padding" : null}
            style={styles.container}>
            {children}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        backgroundColor: '#F4EEEA'

    }
});

export default FormContainer;