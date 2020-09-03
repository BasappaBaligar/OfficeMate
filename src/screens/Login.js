import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LoginField from "../components/loginField";

const imageSource = require("../assets/background.png");
const logo = require("../assets/Logo.png");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
    };
  }

  mobileInputHandler = (value) => {
    this.setState({ phone: value });
  };

  passwordInputHandler = (value) => {
    this.setState({ password: value });
  };

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={imageSource}>
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View style={{ marginTop: 50 }}>
            <LoginField
              value={this.state.phone}
              onChangeText={this.mobileInputHandler}
              keyboardType="numeric"
              iconName="user"
              placeholder="Enter your mobile Number"
            />

            <LoginField
              value={this.state.password}
              onChangeText={this.passwordInputHandler}
              iconName="lock"
              placeholder="Enter password"
              secureTextEntry={true}
            />

            <View>
              <TouchableOpacity>
                <Text style={{ color: "#f2f7f4", marginTop: 20, fontSize: 18 }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  this.props.onLogInSuccess();
                }}
              >
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "#fff",
                      },
                    ]}
                  >
                    Sign In
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  color: "#baf7d2",
                  marginTop: 20,
                  fontSize: 18,
                  textAlign: "right",
                }}
              >
                Don't have an account? SignUp
              </Text>
            </View>

            {/* <InputField
            value={this.state.password}
            onChangeText={this.passwordInputHandler}
            keyboardType="numeric"
            fieldName="Password"
            placeholder="Enter Password"
          /> */}

            {/* <TouchableOpacity
            style={{
              marginTop: 25,
              backgroundColor: "#fff",
              height: 50,
              borderColor: "green",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
            }}
            onPress={() => {
              this.props.onLogInSuccess();
            }}
          >
            <Text style={{ fontSize: 22 }}>Sign In</Text>
          </TouchableOpacity> */}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  const { LoginReducer } = state;
  return { LoginReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogInSuccess: () => dispatch({ type: "CHANGE_FLAG" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const { height } = Dimensions.get("screen");
const height_logo = height * 0.18;

const styles = StyleSheet.create({
  container: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  logoView: {
    marginTop: 60,
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
