import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';

class LoginScreen extends Component {

  state = {
    email: '',
    password: ''
  };

  static navigationOptions = {
    title: 'Login In',
  };

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.email}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.password}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Login In'
            buttonStyle={styles.buttonRed}
            onPress={() => alert('this will be implemented')}
            />
          <Button
            buttonStyle={styles.buttonGreen}
            title='Sign Up'
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;

var styles = StyleSheet.create({
  container: {
    marginLeft: '10%',
    marginRight: '10%'
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 0,
    height: 100,
    paddingTop: '3%'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 3,
    textAlign: 'center',
  },
  // BUTTONS //
  buttonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonRed: {
    backgroundColor: 'red',
    width: 120,
    height: 40,
    borderRadius: 20,
    marginTop: 10
  },
  buttonGreen: {
    backgroundColor: 'green',
    width: 120,
    height: 40,
    borderRadius: 20,
    marginTop: 10
  }
});