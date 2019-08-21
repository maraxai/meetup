import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' }
  }
  render() {
    return (
      <View style={styles.container}>
      <TextInput style={styles.input}/>
      <Button
        title="click"
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
        placeholder='Enter your name...'
        onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name })}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 20,
    width: 200,
  }
});
