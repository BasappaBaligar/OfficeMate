import {StyleSheet} from 'react-native';

export const loginStyle = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     marginHorizontal:20
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '90%',
        marginBottom: 1,
        borderRadius: 5,
    },
    btnText: {
      color: 'black',
      fontSize: 20,
    }
  });