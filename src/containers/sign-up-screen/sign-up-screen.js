import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'react-native-elements';
import { TextInput, View, Text, StyleSheet } from 'react-native';

import {
  saveUser,
  loginUser
} from "../../store/user/user-action/userActionIndex";

class SignUpScreen extends Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  state = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  };

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.text}>First name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.firstName}
        />
        <Text style={styles.text}>Last name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(lastName) => this.setState({lastName})}
          value={this.state.lastName}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text style={styles.text}>Confirm email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(confirmEmail) => this.setState({confirmEmail})}
          value={this.state.confirmEmail}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Text style={styles.text}>Confirm password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Login In'
            buttonStyle={styles.buttonRed}
            onPress={() => alert('this will be implemented')}
            />
          <Button
            buttonStyle={styles.buttonGreen}
            title='Register'
            onPress={() => alert('this will be implemented')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: (user) => dispatch(saveUser(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

var styles = StyleSheet.create({
  container: {
    marginLeft: '10%',
    marginRight: '10%'
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 0,
    height: 60,
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