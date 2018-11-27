import React, { Component } from 'react';
import { connect } from "react-redux";
import styles from './LoginScreenStyle';
import { View } from 'react-native';
import validate from '../../utility/validation';
import CustomInputText from '../../component/CustomInputComponent/CustomInputTextComponent';

import { Button } from 'react-native-elements';

import {
  Header,
  Title,
} from "native-base";

import {
  loginUser
} from "../../store/indexReducerData";

class LoginScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    controls: {
      email: {
        label: 'Email',
        value: 'DejanNikolicEmployee@gmail.com',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          isEmail: true
        }
      },
      password: {
        label: 'Password',
        value: 'test123',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          minLength: 3
        }
      },
    },
    formValid: true
  };

  componentWillMount(){
    if (Object.keys(this.props.user).length === 0) {
      this.props.navigation.navigate('Login')
    }
  }

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

  componentWillReceiveProps(nextProps) {
    if (this.props.navigator.componentName !== nextProps.navigator.componentName) {
      this.props.navigation.navigate(nextProps.navigator.componentName);
    }

    if (this.props.formValidation.errorMessages !== nextProps.formValidation.errorMessages) {
      this.updateValidationMessages(nextProps.formValidation.errorMessages);
    }
  }

  /**
   * Login employee
   */
  loginUser = () => {
    this.props.loginUser(this.state.controls);
  }

  render() {
    return (
    <View>
      <View>
        <Header>
          <Title style={{ fontSize: 20, marginTop: 12 }}>Login In</Title>
        </Header>
      </View>

      <View  style={styles.container}>
        <CustomInputText
          labelName={this.state.controls.email.label}
          fieldName='email'
          isValid={this.state.controls.email.valid}
          validationMessage={this.state.controls.email.validationMessage}
          value={this.state.controls.email.value}
          onChangeText={(val) => this.updateState('email', val)}
          onEndEditing={() => this.validateForm('email')}
          />
        <CustomInputText
          labelName={this.state.controls.password.label}
          fieldName='password'
          isValid={this.state.controls.password.valid}
          validationMessage={this.state.controls.password.validationMessage}
          value={this.state.controls.password.value}
          secureTextEntry={true}
          onChangeText={(val) => this.updateState('password', val)}
          onEndEditing={() => this.validateForm('password')}
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
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    navigator: state.navigator,
    formValidation: state.formValidation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
