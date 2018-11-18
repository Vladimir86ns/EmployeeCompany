import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'react-native-elements';
import axios from '../../../axios';
import validate from '../../utility/validation';
import styles from './sign-up-screen-style';
import CustomInputText from '../../component/custom_input/custom-input-text';
import { View, Text, Picker } from 'react-native';

import {
  saveUser
} from "../../store/user/user-action/userActionIndex";

class SignUpScreen extends Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  state = {
    controls: {
      first_name: {
        label: 'First Name',
        value: '',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          minLength: 3
        }
      },
      last_name: {
        label: 'Last Name',
        value: '',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          minLength: 3
        }
      },
      email: {
        label: 'Email',
        value: '',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          isEmail: true
        }
      },
      password: {
        label: 'Password',
        value: '',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          minLength: 3
        }
      },
      password_confirm: {
        label: 'Password Confirm',
        value: '',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          minLength: 3
        }
      },
      company_id: {
        label: 'Company',
        value: '',
        valid: true,
        validationMessage: '',
        validationRules: {
          required: true,
          isInteger: true
        }
      }
    },
    formValid: true,
    companies: []
  };

  componentWillMount() {
    this.fetchCompanies();
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
   * Register employee
   */
  registerUser = () => {
    let {first_name, last_name, email, password, password_confirm, company_id} = this.state.controls;

    axios.post('/employee/register-employee', {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
      password_confirm: password_confirm.value,
      company_id: company_id.value
    })
    .then(suc =>{
        this.props.saveUser(suc.data)
        this.props.navigation.navigate('Home')
      }
    )
    .catch(err => {
      this.updateValidationMessages(err.response.data);
    })
  }

  /**
   * Fetch companies from server.
   */
  fetchCompanies = () => {
    axios.get('/company/all')
    .then(success => {
      this.setState({
        companies: success.data.data
      })
    })
    .catch(error => {
      alert(error)
    });
  }

  /**
   * Check state has companies and display it.
   */
  getCompanies = () => {
    let companies;
    if (this.state.companies.length === 0) {
      companies = <Text style={styles.text}>Loading Companies...</Text>
    } else {
      companies =
      <View>
        {
          this.state.controls.company_id.valid ?
          <Text style={styles.text}>{this.state.controls.company_id.label}</Text> :
          <Text style={styles.textWarning}>Company is required!</Text>
        }
          <Picker
          selectedValue={this.state.controls.company_id.value}
          style={{ height: 50, width: 200 }}
          onValueChange={(val) => this.updateState('company_id', val)}>
          <Picker.Item key={0} label="Choose company" value={0} />
          {
            this.state.companies.map(company => {
              return <Picker.Item key={company.id} label={company.name + ` (${company.city})`} value={company.id} />
            })
          }
        </Picker>
      </View>
    }

    return companies;
  }

  render() {

    return (
      <View  style={styles.container}>
        <CustomInputText
          labelName={this.state.controls.first_name.label}
          fieldName='first_name'
          isValid={this.state.controls.first_name.valid}
          validationMessage={this.state.controls.first_name.validationMessage}
          value={this.state.controls.first_name.value}
          onChangeText={(val) => this.updateState('first_name', val)}
          onEndEditing={() => this.validateForm('first_name')}
          />
        <CustomInputText
          labelName={this.state.controls.last_name.label}
          fieldName='last_name'
          isValid={this.state.controls.last_name.valid}
          validationMessage={this.state.controls.last_name.validationMessage}
          value={this.state.controls.last_name.value}
          onChangeText={(val) => this.updateState('last_name', val)}
          onEndEditing={() => this.validateForm('last_name')}
          />
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
          onChangeText={(val) => this.updateState('password', val)}
          onEndEditing={() => this.validateForm('password')}
          />
        <CustomInputText
          labelName={this.state.controls.password_confirm.label}
          fieldName='password_confirm'
          isValid={this.state.controls.password_confirm.valid}
          validationMessage={this.state.controls.password_confirm.validationMessage}
          value={this.state.controls.password_confirm.value}
          onChangeText={(val) => this.updateState('password_confirm', val)}
          onEndEditing={() => this.validateForm('password_confirm')}
          />
        {this.getCompanies()}
        <View style={styles.buttonContainer}>
          <Button
            title='Login In'
            buttonStyle={styles.buttonRed}
            onPress={() => this.props.navigation.navigate('Login')}
            />
          <Button
            buttonStyle={styles.buttonGreen}
            title='Register'
            onPress={() => this.registerUser()}
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
