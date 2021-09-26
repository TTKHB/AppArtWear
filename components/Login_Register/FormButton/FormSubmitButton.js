import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const FormSubmitButton = ({ title, submitting, onPress }) => {

    //Nếu chưa nhập dữ liệu vào text inpput thì nút submit có màu xám nhạt
    //Khi nhập dữ liệu vào text input thì nút submit đổi màu nâu đậm
    const backgroundColor = submitting ? 'rgba(27,27,51,0.4)' : 'black'

    return (
        <TouchableOpacity
            onPress={!submitting ? onPress : null}
            style={[styles.container,
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
        marginVertical: 10
    }

});

export default FormSubmitButton;