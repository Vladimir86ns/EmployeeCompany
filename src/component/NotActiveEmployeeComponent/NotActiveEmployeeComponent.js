import React, { Component } from 'react';
import { connect } from "react-redux";

import {
  Content,
  Container,
  Text,
  Header,
  Title,
  Footer,
  FooterTab,
  Button,
  Icon
} from "native-base";

class NotActiveEmployeeComponent extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>

      <Header headerStyle={{color: "red"}}>
        <Title style={{ fontSize: 20, marginTop: 12 }}>Name of company</Title>
      </Header>

        <Content>
          <Text>
            You are not active on this company. You have to wait until company supervisor activated you!
          </Text>
        </Content>

        <Footer>
        <FooterTab>
        <Button
        vertical
        onPress={() => this.props.navigation.navigate('Login')}
        >
            <Icon name="ios-log-out" />
            <Text>Log Out</Text>
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

export default connect(mapStateToProps, null)(NotActiveEmployeeComponent);
