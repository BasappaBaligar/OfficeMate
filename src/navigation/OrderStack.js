import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Entypo from "react-native-vector-icons/Entypo";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import DashboardTabNavigator from "./TabNavigatorStack";
import Dashbaord from "../screens/Dashboard/Dashboard";
import CreateOrder from "../screens/order-module/CreateOrder";
import PreviewOrder from "../screens/order-module/PreviewOrder";
import ProductList from "../screens/Products/ProductList";

const Stack = createStackNavigator();

export default OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashbaord"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#30a8b3",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 22,
        },
      }}
    >
      <Stack.Screen
        name="DashboardTabNavigator"
        component={Dashbaord}
        options={({ navigation }) => ({
          title: "Office Mate",
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Entypo name={"menu"} size={40} color="#fff" />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => {
                  Alert("Cart");
                }}
              >
                <Entypo name={"shopping-cart"} size={30} color="#fff" />
                {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
              </TouchableOpacity>
            );
          },
        })}
      />

      {/* <Stack.Screen
        name="CreateOrder"
        component={CreateOrder}
        options={{ title: "Create Order" }}
      />
      <Stack.Screen
        name="PreviewOrder"
        component={PreviewOrder}
        options={{ title: "Preview Order" }}
      /> */}
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={({ navigation }) => ({
          title: "Office Mate",
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Entypo name={"menu"} size={40} color="#fff" />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => {
                  Alert("Cart");
                }}
              >
                <Entypo name={"shopping-cart"} size={30} color="#fff" />
                {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
              </TouchableOpacity>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
