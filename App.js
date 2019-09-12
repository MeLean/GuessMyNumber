import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomViewHeader from "./components/CustomViewHeader";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameScreen from "./components/screens/GameScreen";

export default function App() {
  let content;

  const [selectedNum, setSelectedNum] = useState();

  const screenHandler = curSelectedNum => {
    //console.log("curSelectedNum " + curSelectedNum);
    setSelectedNum(curSelectedNum);
  };

  if (selectedNum) {
    content = (
      <GameScreen
        selectedNum={selectedNum}
        onGameFinished={() => {
          //console.log("GameScreen onGameFinished reached!");
          screenHandler();
        }}
      />
    );
  } else {
    content = <StartGameScreen onGameStarted={screenHandler} />;
  }

  return (
    <View style={styles.screen}>
      <CustomViewHeader title="Guess My Number Dude!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({ screen: { flex: 1 } });
