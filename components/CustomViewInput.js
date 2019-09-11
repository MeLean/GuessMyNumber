import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomViewInput = props => {
  return (
    <TextInput {...props} style={{ ...styles.defStyle, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  defStyle: {
    height: 32,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 10,
    textAlign: "center",
    textAlignVertical: "center"
  }
});

export default CustomViewInput;
