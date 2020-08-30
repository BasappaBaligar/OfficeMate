import { Alert } from 'react-native';
import { store } from '../../App';

import NetInfo from "@react-native-community/netinfo";

export default Logout = (props) => {

    return Alert.alert(
        'Logout!',
        'Are you sure? You want to logout?',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('logout cancel pressed'),
                style: 'cancel'
            },
            {
                text: 'Yes', onPress: () => {
                    //Reset the token on logout and change the login reducer flag
                    store.dispatch({ type: 'CHANGE_FLAG' });
                }
            }
        ],
        { cancelable: false }
    )
}



