import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity, StyleSheet } from 'react-native';
import DashboardTabNavigator from './TabNavigatorStack';
import Dashbaord from '../screens/Dashboard/Dashboard';
import CreateOrder from '../screens/order-module/CreateOrder';
import PreviewOrder from '../screens/order-module/PreviewOrder';

const Stack = createStackNavigator();

export default OrderStack = () => {

    return (
        <Stack.Navigator initialRouteName="DashboardTabNavigator" screenOptions={{
            headerStyle: {
                backgroundColor: '#05abc9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22
            }
        }}>
            <Stack.Screen name="DashboardTabNavigator" component={DashboardTabNavigator} options={({ navigation }) => ({
                title: 'Dashboard',
                headerLeft: () => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Entypo name={'menu'} size={30} color='#fff' />
                        </TouchableOpacity>)
                }
            })} />

            <Stack.Screen name="CreateOrder" component={CreateOrder} options={{ title: 'Create Order' }} />
            <Stack.Screen name="PreviewOrder" component={PreviewOrder} options={{ title: 'Preview Order' }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})