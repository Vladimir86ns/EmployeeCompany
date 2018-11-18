import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from '../../../axios';
import styles from './login-screen-style';
import { TextInput, View, Text } from 'react-native';
import validate from '../../utility/validation';

import { Button } from 'react-native-elements';

import {
  loginUser
} from "../../store/user/user-action/userActionIndex";

class LoginScreen extends Component {

  state = {
    controls: {
      email: {
        value: '',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          isEmail: true
        }
      },
      password: {
        value: '',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          minLength: 3
        }
      },
    }
  };

  static navigationOptions = {
    title: 'Login In',
  };

  /**
   * Update state for given field on text change event.
   * @param {string} key field name which value need to be updated
   * @param {mix} val value for given field name
   */
  updateState = (key, val) => {
    this.setState(prevState => {
      return {
        controls: {
        ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: val
        }}}
    });
  }

  /**
   * Validate each field onEditEnd.
   * @param {string} field field names which should be validate
   */
  validateForm = (field) => {
    this.setState(prevState => {
      const validation = validate(
          field,
          this.state.controls[field].value,
          this.state.controls[field].validationRules
        )

      return {
        formValid: validation.valid,
        controls: {
        ...prevState.controls,
          [field]: {
            ...prevState.controls[field],
            valid: validation.valid,
            validationMessage: validation.message
        }}}
    });
  }

  /**
   * On request failed, update validation message for each field.
   * @param {object} data request failed object with errors
   */
  updateValidationMessages = (data) => {
    let keys = Object.keys(data);
    keys.forEach(field => {
      this.setState(prevState => {
        return {
          controls: {
          ...prevState.controls,
            [field]: {
              ...prevState.controls[field],
              valid: false,
              validationMessage: data[field]
          }}}
      });
    });

    this.resetValidationMessages(keys, 5000);
  }

  /**
   * Reset validation messages.
   * @param {array} keys field names which should show message
   * @param {number} time after how long to remove validation messages
   */
  resetValidationMessages = (keys, time) => {
    setTimeout(() => {
      keys.forEach(field => {
        this.setState(prevState => {
          return {
            controls: {
            ...prevState.controls,
              [field]: {
                ...prevState.controls[field],
                valid: true,
                validationMessage: ''
            }}}
        });
      });
    }, time);
  }

  /**
   * Login employee
   */
  loginUser = () => {
    let {email, password} = this.state.controls;

    axios.get(`/employee/login-employee?email=${email.value}&password=${password.value}`)
    .then(suc =>{
        this.props.loginUser(suc.data)
        this.props.navigation.navigate('Home')
      }
    )
    .catch(err => {
      this.updateValidationMessages(err.response.data);
    })
  }

  render() {
    return (
      <View  style={styles.container}>
        {
         this.state.controls.email.valid ?
          <Text style={styles.text}>Email</Text> :
          <Text style={styles.textWarning}>{this.state.controls.email.validationMessage}</Text>
        }
        <TextInput
          style={styles.textInput}
          onChangeText={(val) => this.updateState('email', val)}
          onEndEditing={() => this.validateForm('email')}
          value={this.state.email}
        />
        {
         this.state.controls.password.valid ?
          <Text style={styles.text}>Password</Text> :
          <Text style={styles.textWarning}>{this.state.controls.password.validationMessage}</Text>
        }
        <TextInput
          style={styles.textInput}
          onChangeText={(val) => this.updateState('password', val)}
          onEndEditing={() => this.validateForm('password')}
          value={this.state.password}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Login In'
            buttonStyle={styles.buttonRed}
            onPress={() => this.loginUser()}
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

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user) => dispatch(loginUser(user))
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
