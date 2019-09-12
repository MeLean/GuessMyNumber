import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomViewButtonArea from "../CustomViewButtonArea";
import CustomViewCard from "../CustomViewCard";

const generateRandomIntBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randInt = Math.floor(Math.random() * (max - min)) + min;
  if (randInt !== exclude) {
    return randInt;
  } else {
    return generateRandomIntBetween(min, max, exclude);
  }
};

const GameScreen = props => {
  const minNum = 1;
  const maxNum = 100;

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomIntBetween(minNum, maxNum)
  );

  const curMin = useRef(minNum);
  const curMax = useRef(maxNum);
  const rounds = useRef(0);

  if (props.selectedNum === currentGuess) {
    Alert.alert(
      "Game Over!",
      "Well done! Computer guessed your number in " +
        rounds.current +
        " rounds",
      [{ text: "Super!", onPress: () => onFinishGameAlertHandler() }]
    );
  }

  function onFinishGameAlertHandler() {
    //console.log("onFinishGameAlertHandler called!");
    props.onGameFinished(undefined);
  }

  const GuessesHandler = isLowerNum => {
    var isCorrectGuessOk = isLowerNum
      ? currentGuess < props.selectedNum
      : currentGuess > props.selectedNum;

    if (!isCorrectGuessOk) {
      Alert.alert(
        "Cheating detected!",
        "Please, don't cheat. Give appropriate directions!",
        [{ text: "Sorry, my bad!" }]
      );

      return;
    }

    if (isLowerNum) {
      curMin.current = currentGuess;
      //console.log("greater min: " + curMin.current);
    } else {
      curMax.current = currentGuess;
      //console.log("lower max:" + curMax.current);
    }

    setCurrentGuess(
      generateRandomIntBetween(curMin.current, curMax.current, currentGuess)
    );
    rounds.current = rounds.current + 1;
  };

  return (
    <View style={styles.screen}>
      <CustomViewCard style={{ marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 18 }}>
          {"Current guess: " +
            currentGuess +
            " the num is: " +
            props.selectedNum}
        </Text>
        <CustomViewButtonArea
          leftBtnTitle="Greater"
          leftBtnColour="blue"
          leftBtnOnPress={GuessesHandler.bind(this, false)}
          rightBtnTitle="Smaller"
          rightBtnColour="purple"
          rightBtnOnPress={GuessesHandler.bind(this, true)}
        />
      </CustomViewCard>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default GameScreen;
