import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet} from 'react-native';

class HomeScreen extends Component {

  static navigationOptions = {
    title:  'Home',
  };

  componentWillMount(){
    if (Object.keys(this.props.user).length === 0) {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.text}>Welcome: {this.props.user.first_name}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);

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