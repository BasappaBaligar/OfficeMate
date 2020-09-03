import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function LoginField(props) {
  return (
    <View style={styles.container}>
      <Feather name={props.iconName} color="#bfbfbf" size={24} />
      <TextInput
        {...props}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        style={[
          styles.textInput,
          {
            color: "white",
          },
        ]}
        autoCapitalize="none"
        onChangeText={(val) => props.onChangeText(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    fontSize: 20,
  },
});
