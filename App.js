import React from "react";
import { StyleSheet, View } from "react-native";
import CustomViewHeader from "./components/CustomViewHeader";
import StartGameScreen from "./components/screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <CustomViewHeader title="Guess My Number Dude!" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({ screen: { flex: 1 } });
