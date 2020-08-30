import React from 'react';
import { connect } from 'react-redux';
import { View, Alert, Image, Text, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
    };
  }

  /**
   * 
   */
  mobileInputHandler = (value) => {
    this.setState({ phone: value })
  }

  passwordInputHandler = (value) => {
    this.setState({ password: value })
  }

  render() {
    return <View style={{ backgroundColor: '#af3489', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <InputField
        value={this.state.phone}
        onChangeText={this.mobileInputHandler}
        keyboardType='numeric'
        fieldName='Mobile'
        iconName="mobile"
        placeholder="Enter Mobile" />

      <InputField
        value={this.state.password}
        onChangeText={this.passwordInputHandler}
        keyboardType='numeric'
        fieldName='Password'
        placeholder="Enter Password" />

      <TouchableOpacity style={{ marginTop: 25, backgroundColor: '#fff', height: 50, width: '70%', borderColor: 'green', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }} onPress={() => {
        this.props.onLogInSuccess();
      }}>
        <Text style={{ fontSize: 22 }}>Login</Text>
      </TouchableOpacity>
    </View>;
  }
}


const mapStateToProps = (state) => {
  const { LoginReducer } = state;
  return { LoginReducer }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogInSuccess: () => dispatch({ type: 'CHANGE_FLAG' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
