import React, { useState } from "react";
import { AppLoading } from "expo";
import { StyleSheet, View } from "react-native";
import CustomViewHeader from "./components/CustomViewHeader";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameScreen from "./components/screens/GameScreen";
import * as Font from "expo-font";

const loadFonts = () => {
  return Font.loadAsync({
    "open-sans-reg": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [selectedNum, setSelectedNum] = useState();
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setDataIsLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  let content;
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
