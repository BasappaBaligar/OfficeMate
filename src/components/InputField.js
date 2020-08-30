import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default InputField = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.fieldName}>{props.fieldName}</Text>
            <View style={styles.fieldContainer}>
                <TextInput {...props}
                    style={styles.textfield}
                    placeholderTextColor="#171717"
                    placeholder={props.placeholder} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '70%'
    },
    fieldName: {
        alignSelf: 'flex-start',
        color: '#ddd',
        marginBottom: 10
    },
    textfield: {
        color: '#171717',
        width: '100%',
        fontSize: 18,
        paddingLeft: 15
    },
    fieldContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 45,
        borderRadius: 25,
        width: '100%',
    }
})