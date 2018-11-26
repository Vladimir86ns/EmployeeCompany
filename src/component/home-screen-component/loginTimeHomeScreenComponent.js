import React from 'react';
import {
  Card,
  Button,
  CardItem,
  Text,
  Body,
  View
} from "native-base";

 const loginTimeHomeScreenComponent = props => {
  let currentDate = new Date();
    return (
      <Card>
      <CardItem header bordered>
        <Text
        style={{ fontSize: 30, color: props.clockClass ? 'green' : 'red' }}
        >Login time {currentDate.getHours().toString().length < 1 ? '0' + currentDate.getHours() : currentDate.getHours()}:{currentDate.getMinutes()}h </Text>
      </CardItem>

      <CardItem>
        <Body>
          <Text>
            First Name:  {props.user.first_name}
          </Text>
          <Text>
            Last Name:  {props.user.last_name}
          </Text>
          <Text>
            Employee ID:  {props.user.employee_id}
          </Text>
          <View style={{flexDirection: "row", marginTop: 10}}>
            <Button
              rounded
              success
              onPress={ () => props.onAccept() }
              >
              <Text>Accept</Text>
            </Button>
            <Button
              rounded
              warning
              onPress={ () => props.makeNotice() }
              style={{ marginLeft: 30 }}
              >
              <Text>Make Notice</Text>
            </Button>
          </View>
        </Body>
      </CardItem>
      <CardItem >
        <Text style={{color: 'red'}}>If you do not accept, or make a notice, in the next 3 min, it will be automatically accepted!</Text>
      </CardItem>
    </Card>
    );
}
export default loginTimeHomeScreenComponent;