import React from "react";
import { View, StyleSheet } from "react-native";

const CustomViewCard = props => {
  return (
    <View {...props} style={{ ...styles.defStyle, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  defStyle: {
    width: "80%",
    alignContent: "center",
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 2,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: "white"
  }
});

export default CustomViewCard;
