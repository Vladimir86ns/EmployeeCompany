import React from "react";
import styles from '../../containers/sign-up-screen/sign-up-screen-style';
import { View, TextInput, Text } from "react-native";

const customInputText = props => {
  return (
    <View>
    {
      props.isValid ?
      <Text style={styles.text}>{props.labelName}</Text> :
      <Text style={styles.textWarning}>{props.validationMessage}</Text>
    }
    <TextInput
      placeholder={props.labelName}
      style={styles.textInput}
      onChangeText={(val) => props.onChangeText(val)}
      onEndEditing={() => props.onEndEditing}
      value={props.value}
    />
    </View>
  );
}

export default customInputText;