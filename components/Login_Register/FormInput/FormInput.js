import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, Image } from 'react-native';
import FormContainer from '../FormContainer/FormContainer';

const FormInput = (props) => {
    const { placeholder, label, error, source } = props
    return (
        <>   
            {/* View style header  */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
            }}>
                <Text style={{ }}>{label}</Text>
                {error ? (
                    <Text style={{ color: 'red' }}>{error}</Text>
                ) : null}
            </View>

            {/* View style textInput , icon, ... */}
            <View style={styles.inputView}>
                <Image
                    resizeMode="contain"
                    style={styles.icon} 
                    source={source} 
                    />
                <TextInput
                    {...props}
                    placeholder={placeholder}
                    style={styles.input} 
                    />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        tintColor: '#003f5c'
    },
    image: {
        marginTop: 25,
        marginBottom: 60,
        width: 120,
        height: 120,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 5,
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    TextInput: {
        height: 50,
        flex: 1,
    },
});

export default FormInput;