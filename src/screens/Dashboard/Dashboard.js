import React, { useState } from "react";
import {
  View,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

export default function Dashboard({ navigation }) {
  const [category, setCategory] = useState([
    {
      key: "One",
      value: "Office Supplies",
      image: require("../../assets/files-logo.jpg"),
    },
    {
      key: "Two",
      value: "School Supplies",
      image: require("../../assets/schoolSupplies.jpg"),
    },
    {
      key: "Three",
      value: "Paper Products",
      image: require("../../assets/paperProduct.jpg"),
    },
    {
      key: "Four",
      value: "Printing Service",
      image: require("../../assets/printingService.jpg"),
    },
    {
      key: "Five",
      value: "Cleaning Products",
      image: require("../../assets/cleaning.jpg"),
    },
  ]);

  const GetGridViewItem = (item) => {
    Alert.alert(item);
  };

  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <View style={styles.GridViewBlockStyle}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductList")}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image source={item.image} style={styles.imageView} />
                <Text style={styles.GridViewInsideTextItemStyle}>
                  {" "}
                  {item.value}{" "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  GridViewBlockStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 190,
    margin: 5,
    backgroundColor: "#30a8b3",
  },
  GridViewInsideTextItemStyle: {
    color: "#fff",
    padding: 10,
    fontSize: 18,
    justifyContent: "center",
  },
  imageView: {
    width: "50%",
    height: 100,
    margin: 7,
    borderRadius: 7,
  },
});
