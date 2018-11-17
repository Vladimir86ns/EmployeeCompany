import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet} from 'react-native';

class HomeScreen extends Component {

  static navigationOptions = {
    title:  'Home',
  };

  componentDidMount() {
    // TODO implement logic to know is user logged in, for now always redirect on login page.
    if (true) {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    if (this.props.user.first_name) {
      alert(this.props.user.first_name);
    }
    return (
      <View  style={styles.container}>
        <Text style={styles.text}>Home</Text>
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
      //
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

var styles = StyleSheet.create({
  container: {
    marginLeft: '10%',
    marginRight: '10%'
  },
  text: {
    fontSize: 20,
    marginTop: 3,
    textAlign: 'center'
  },
});