import React from 'react';
import {
  Card,
  CardItem,
  Text,
  Body
} from "native-base";

 const orderHomeScreenComponent = props => {
    return (
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
    );
}
export default orderHomeScreenComponent;