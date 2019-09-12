import React from "react";
import { View, Button, StyleSheet } from "react-native";

const CustomViewButtonArea = props => {
  return (
    <View style={styles.buttonArea}>
      <View style={styles.button}>
        <Button
          title={props.leftBtnTitle}
          color={props.leftBtnColour}
          onPress={props.leftBtnOnPress}
        />
      </View>
      <View style={styles.button}>
        <Button
          title={props.rightBtnTitle}
          color={props.rightBtnColour}
          onPress={props.rightBtnOnPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  },
  button: {
    flex: 1,
    padding: 10
  }
});
export default CustomViewButtonArea;
