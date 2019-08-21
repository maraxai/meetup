import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Screen1 extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hi Baby! I have to tell you something!</Text>
      <Button
        title="click"
        onPress={() => this.props.navigation.navigate('Screen2')}
      />
    </View>
    )
  }
}
