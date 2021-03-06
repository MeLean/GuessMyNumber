import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const CustomViewHeader = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 26
  },
  title: {
    color: "black",
    fontSize: 18
  }
});

export default CustomViewHeader;
