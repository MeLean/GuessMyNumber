import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = props => {
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
    backgroundColor: "#bebebe",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 26
  },
  title: {
    color: "black",
    fontSize: 18
  }
});

export default Header;
