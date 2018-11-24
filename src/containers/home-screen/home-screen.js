import React, { Component } from 'react';
import { connect } from "react-redux";
import HeaderComponent from '../../component/home-screen-component/headerHomeScreenComponent';
import LoginTimeComponent from '../../component/home-screen-component/loginTimeHomeScreenComponent';
import OrderComponent from '../../component/home-screen-component/orderHomeScreenComponent';
import FooterComponent from '../../component/home-screen-component/footerHomeScreenComponent';

import {
  Container,
  Content,
  Text,
  Drawer,
  List,
  ListItem
} from "native-base";

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
    header: null,
  };

  componentWillMount(){
    if (Object.keys(this.props.user).length === 0) {
      this.props.navigation.navigate('Login');
    }
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  onAccept = () => {
    alert('onAccept');
  }

  makeNotice = () => {
    alert('makeNotice');
  }

  render() {
    let currentDate = new Date();

    return (
      <Drawer
        type='displace'
        tweenDuration={500}
        tweenEasing='linear'
        ref={(ref) => { this.drawer = ref; }}
        content={
        <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
      }
      onClose={() => this.closeDrawer()} >
      <Container>
        <HeaderComponent
         openSettings={() => this.openDrawer()}/>
        <Content padder>
          <LoginTimeComponent
            user={this.props.user}
            onAccept={() => this.onAccept()}
            makeNotice={() => this.makeNotice()}
            />
          <OrderComponent/>
        </Content>
        <FooterComponent/>
      </Container>
    </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);