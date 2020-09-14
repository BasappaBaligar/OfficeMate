import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { version } from "../../package.json";
import DashboardTabNavigator from "./TabNavigatorStack";
import OrderStack from "./OrderStack";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar } from "react-native-elements";

import { StyleSheet, Text, View, Dimensions } from "react-native";
import Logout from "../screens/Logout";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="OrderStack"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "#dff8ff",
        width: 0.85 * Dimensions.get("window").width,
        marginTop: -5,
      }}
      drawerContentOptions={{
        labelStyle: {
          fontSize: 18,
          fontWeight: "600",
          color: "#171717",
          width: "100%",
        },
      }}
    >
      <Drawer.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          drawerLabel: "Dashboard",
          drawerIcon: () => {
            return <FontAwesome5 name="seedling" size={24} color="black" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar
                rounded
                size={100}
                source={{
                  uri:
                    "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg",
                }}
              />
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Text style={styles.menuItemLabel}>User</Text>
                <Text style={styles.menuItemLabel}>phone number</Text>
              </View>
            </View>
          </View>

          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        style={{ marginTop: 10, borderTopColor: "#009ebe", borderTopWidth: 5 }}
        label={() => {
          return (
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", width: "50%" }}>
                <AntDesign name="logout" size={24} color="black" />
                <Text style={styles.menuItemLabel}>Logout</Text>
              </View>
              <Text
                style={{
                  ...styles.menuItemLabel,
                  width: "50%",
                  textAlign: "right",
                  paddingRight: 20,
                }}
              >
                Version {version}{" "}
              </Text>
            </View>
          );
        }}
        onPress={() => {
          Logout();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemLabel: {
    color: "#171717",
    fontSize: 18,
    marginLeft: 30,
    fontWeight: "600",
  },
  DRTopcontainer: {
    justifyContent: "space-evenly",
    alignItems: "stretch",
    backgroundColor: "#04aac8",
    flex: 1,
    height: 150,
    flexDirection: "row",
    width: "100%",
    margin: 0,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  drawerContent: {
    flex: 1,
    margin: 0,
  },
  userInfoSection: {
    paddingLeft: 20,
    height: 150,
    margin: 0,
    backgroundColor: "#04aac8",
    width: "100%",
  },
});

export default DrawerNavigator;
