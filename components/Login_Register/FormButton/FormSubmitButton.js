import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const FormSubmitButton = ({ title, submitting, onPress }) => {

    //Neu chua Nhap du lieu se co mau xam(khi nhap du lieu text input click chuot se doi mau)
    const backgroundColor = submitting ? 'rgba(27,27,51,0.4)' : 'rgba(27,27,51,1)'

    return (
        <TouchableOpacity
            onPress= {!submitting ? onPress : null}
            style= {[styles.container, 
            { backgroundColor }]}
            >
            <Text style={{ fontSize: 18, color: '#fff' }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default FormSubmitButton;