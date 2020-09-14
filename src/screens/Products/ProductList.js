import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  FlatList,
  Button,
} from "react-native";

import { SearchBar } from "react-native-elements";

const ProductsData = require("../../jsonData/product.json");

export default function ProductList(props) {
  const { index, isEditable } = props;

  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(ProductsData);
  const [count, setCount] = useState([]);

  const arrayHolder = ProductsData;

  const addToCart = (index) => {
    console.log("Add: ", data[index]);
    count[index] = data[index].AddedToCart + 1;
    data[index].AddedToCart = data[index].AddedToCart + 1;
  };

  const onClickMinus = (index) => {
    // console.log("BeforeMinus: ", count[index]);
    // console.log("AfterMinus: ", count[index] - 1);
    count[index] = data[index].AddedToCart - 1;
    data[index].AddedToCart = data[index].AddedToCart - 1;
  };

  const onClickPlus = (index) => {
    count[index] = data[index].AddedToCart + 1;
    console.log("Count:", count);
    data[index].AddedToCart = data[index].AddedToCart + 1;
  };

  const renderListItem = ({ item, index }) => {
    count[index] = item.AddedToCart;
    return (
      <View style={styles.container}>
        <Image style={styles.productImage} source={{ uri: item.Image }} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.ProductName}</Text>
          <Text style={styles.brandName}>{item.Brand}</Text>
          <Text style={styles.price}>₹ {item.ProductPrice}</Text>
        </View>
        <View style={styles.addView}>
          <Text style={styles.inStock}>In stock</Text>
          <View>
            {count[index] > 0 ? (
              <View style={{ flexDirection: "row" }}>
                <Button title="-" onPress={() => onClickMinus(index)}></Button>
                <Text style={{ marginLeft: 8, marginRight: 8, fontSize: 16 }}>
                  {count[index]}
                </Text>
                <Button title="+" onPress={() => onClickPlus(index)}></Button>
              </View>
            ) : (
              <Button title="+ Add" onPress={() => addToCart(index)}></Button>
            )}

            {/* <Button title="+ Added"></Button> */}
          </View>
        </View>
      </View>
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  const renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search for product.."
        lightTheme
        round
        onChangeText={(text) => searchFilterFunction(text)}
        autoCorrect={false}
        value={searchValue}
      />
    );
    // return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  const searchFilterFunction = (text) => {
    setSearchValue(text);

    const newData = arrayHolder.filter((item) => {
      const itemData = `${item.ProductName.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item) => item.Id}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    margin: 5,
    marginTop: 15,
  },
  productInfo: {
    flex: 2,
    justifyContent: "center",
    marginLeft: 20,
    color: "black",
  },
  productName: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
  },
  brandName: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    marginBottom: 5,
  },
  addView: {
    flex: 1,
    justifyContent: "center",
    marginRight: 10,
    color: "black",
  },
  inStock: {
    marginTop: 20,
    marginBottom: 20,
    color: "green",
    marginLeft: 10,
  },
});
