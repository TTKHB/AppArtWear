import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Dimensions, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';

const Forgotpassword = ({ forgotPass, onPress }) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.forgotPass}>{forgotPass}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    forgotPass: {
        fontSize: 18,
        color: '#000',
    },

});
export default Forgotpassword;