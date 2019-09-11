import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignContent: "flex-start",
    alignItems: "flex-start"
  }
});

export default StartGameScreen;
