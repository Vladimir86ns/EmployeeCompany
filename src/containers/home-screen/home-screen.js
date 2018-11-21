import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Card,
  Title,
  Left,
  Button,
  Icon,
  Right,
  CardItem,
  Text,
  Body,
  Footer,
  FooterTab,
  View
} from "native-base";

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

    return (
      <Container>
        <Header headerStyle={{color: "red"}}>
          <Left>
            <Button transparent onPress={() => alert('opaa')}>
              <Icon name='menu' />
            </Button>
          </Left>

          <Title style={{ fontSize: 20, marginTop: 12 }}>Company Name</Title>

          <Right>
            <Button transparent>
            <Icon name='notifications' />
            </Button>
          </Right>
        </Header>

        <Content padder>

          <Card>
            <CardItem header bordered>
              <Text
              style={{ fontSize: 30 }}
              >Login time {currentDate.getHours()}:{currentDate.getMinutes()}h </Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  First Name:  {this.props.user.first_name}
                </Text>
                <Text>
                  Last Name:  {this.props.user.last_name}
                </Text>
                <Text>
                  Employee ID:  {this.props.user.last_name}
                </Text>
                <View style={{flexDirection: "row", marginTop: 10}}>
                  <Button rounded success>
                    <Text>Accept</Text>
                  </Button>
                  <Button rounded warning style={{ marginLeft: 30 }}>
                    <Text>Make Notice</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
              style={{ fontSize: 30 }}
              >Orders</Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  Today: 0
                </Text>
                <Text>
                  In your shift: 0
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="document" />
              <Text>Tasks</Text>
            </Button>
            <Button vertical>
              <Icon name="list-box" />
              <Text>Order List</Text>
            </Button>
            <Button vertical>
              <Icon active name="cart" />
              <Text>Need to buy</Text>
            </Button>
            <Button vertical>
              <Icon name="megaphone" />
              <Text>Note</Text>
            </Button>
          </FooterTab>
        </Footer>

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