import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Header, Content, Card, Title, Left, Button, Icon, Right, CardItem, Text, Body } from "native-base";

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
    header: null,
  };

  componentWillMount(){
    if (Object.keys(this.props.user).length === 0) {
      this.props.navigation.navigate('Login')
    }
  }

  render() {

    let currentDate = new Date();
    let finishHours = new Date().setHours(8);

    return (
      <Container>
        <Header headerStyle={{color: "red"}}>
          <Left>
            <Button transparent onPress={() => alert('opaa')}>
            <Icon name='menu' />
            </Button>
          </Left>
          <Title style={{ fontSize: 20, marginTop: 12 }}>Welcome {this.props.user.first_name}</Title>
          <Right>
            <Button transparent>
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text
              style={{ fontSize: 30 }}
              >Your login time {currentDate.getHours()}:{currentDate.getMinutes()}h </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Welcome to your company!
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);