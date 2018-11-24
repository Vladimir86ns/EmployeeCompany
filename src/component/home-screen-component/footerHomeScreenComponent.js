import React from 'react';
import {
  Button,
  Icon,
  Text,
  Footer,
  FooterTab
} from "native-base";

 const footerHomeScreenComponent = props => {
    return (
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
    );
}
export default footerHomeScreenComponent;