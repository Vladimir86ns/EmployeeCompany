import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    // TODO implement logic to know is user logged in, for now always redirect on login page.
    if (true) {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    );
  }
}

export default HomeScreen;

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