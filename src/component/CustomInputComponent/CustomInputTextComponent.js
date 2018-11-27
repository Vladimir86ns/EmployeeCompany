import React from "react";
import styles from './CustomInputTextStyleComponent';
import { View, TextInput, Text } from "react-native";

const customInputTextComponent = props => {
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
      onEndEditing={() => props.onEndEditing()}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
    </View>
  );
}

export default customInputTextComponent;