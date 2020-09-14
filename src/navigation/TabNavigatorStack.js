import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashbaord from "../screens/Dashboard/Dashboard";
import Settings from "../screens/Dashboard/Settings";
import SearchProduct from "../screens/Dashboard/SearchProduct";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
function DashboardTabNavigator() {
  return <View></View>;
  // <Tab.Navigator
  //   tabBarOptions={{
  //     labelStyle: { fontSize: 16, fontWeight: "700" },
  //     activeTintColor: "#fff",
  //     inactiveTintColor: "#9fd8e1",
  //     style: { backgroundColor: "#05abc9" },
  //     indicatorStyle: {
  //       borderBottomColor: "#F8B317",
  //       borderBottomWidth: 5,
  //     },
  //   }}
  // >
  //   <Tab.Screen name="Dashbaord" component={Dashbaord} />
  //   <Tab.Screen name="SearchProduct" component={SearchProduct} />
  //   <Tab.Screen name="Settings" component={Settings} />
  // </Tab.Navigator>
  // );
}
export default DashboardTabNavigator;
