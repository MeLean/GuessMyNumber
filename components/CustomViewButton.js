import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const CustomViewButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  buttonText: {
    color: colors.accent,
    fontFamily: "open-sans-bold"
  }
});

export default CustomViewButton;
