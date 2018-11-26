import React, { Component } from 'react';
import { connect } from "react-redux";
import HeaderComponent from '../../component/home-screen-component/headerHomeScreenComponent';
import LoginTimeComponent from '../../component/home-screen-component/loginTimeHomeScreenComponent';
import OrderComponent from '../../component/home-screen-component/orderHomeScreenComponent';
import FooterComponent from '../../component/home-screen-component/footerHomeScreenComponent';
import { getCurrentDate } from '../../utility/timeHelper';

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

  /**
   * Check first does employee has schedule for given day, and then,
   * compare employee time for login from schedule, with current time.
   *
   * @returns {mix} return Alert, of boolean.
   */
  isLoggedOnTime = () => {
    let { from_date, to_date, from_time } = this.props.user.schedule;

    if (getCurrentDate() <= from_date && getCurrentDate() >= to_date) {
      alert('you do not have schedule for today!');
    }

    return getCurrentDate() <= from_time;
  }

  render() {
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
            clockClass={this.isLoggedOnTime()}
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