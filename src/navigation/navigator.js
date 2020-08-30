import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { connect } from 'react-redux';
import Login from '../screens/Login';
import DrawerNavigator from './DrawerNavigation';

const Stack = createStackNavigator();

const Navigator = (props) => {
    console.log('props,', props.LoginReducer.isSignedIn);
    return (
        <NavigationContainer>
            {
                props.LoginReducer.isSignedIn ?
                    (
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
                        </Stack.Navigator>
                    ) :
                    (
                        <Stack.Navigator>
                            <Stack.Screen name="login" component={Login} options={{
                                headerShown: false
                            }} />
                        </Stack.Navigator>
                    )
            }
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => {
    const { LoginReducer } = state;
    return { LoginReducer }
};

export default connect(mapStateToProps)(Navigator);

