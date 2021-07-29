import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import FormContainer from '../FormContainer/FormContainer';

const FormInput = (props) => {
    const {placeholder,label,error}=props
    return (
        <>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5,}}>
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        {error? (
        <Text style={{color:'red'}}>{error}</Text> 
         ) : null}
        </View>
            <TextInput
                {...props}
                placeholder={placeholder}
                style={styles.input} />
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#1b1b33',
        height: 40,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 20,
    }
});

export default FormInput;