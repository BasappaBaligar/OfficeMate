import React from 'react';
import { View, Alert, Image, Text, TouchableOpacity } from 'react-native';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      name: '',
    };
  }

  render() {
    return <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>


      <TouchableOpacity style={{ marginTop: 25, backgroundColor: '#fff', height: 50, width: '70%', borderColor: 'green', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }} onPress={() => {

      }}>
        <Text style={{ fontSize: 22 }}>dasboard</Text>
      </TouchableOpacity>
    </View>;
  }
}

