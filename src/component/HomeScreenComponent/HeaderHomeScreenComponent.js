import React from 'react';
import {
  Header,
  Title,
  Left,
  Button,
  Icon,
  Right
} from "native-base";

 const headerHomeScreenComponent = props => {
    return (
      <Header headerStyle={{color: "red"}}>
        <Left>
          <Button transparent onPress={() => props.openSettings()}>
            <Icon name='menu' />
          </Button>
        </Left>

        <Title style={{ fontSize: 20, marginTop: 12 }}>Name of company</Title>

        <Right>
          <Button transparent>
          <Icon name='notifications' />
          </Button>
        </Right>
      </Header>
    );
}
export default headerHomeScreenComponent;