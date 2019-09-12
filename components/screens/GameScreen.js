import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import CustomViewButtonArea from "../CustomViewButtonArea";
import CustomViewCard from "../CustomViewCard";
import CustomViewListItem from "../CustomViewListItem";

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
  const initialGuess = generateRandomIntBetween(minNum, maxNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [passedGuesses, setPassedGuesses] = useState([initialGuess]);
  const curMin = useRef(minNum);
  const curMax = useRef(maxNum);

  //console.log("GameScreen rendered!");

  if (props.selectedNum === currentGuess) {
    Alert.alert(
      "Game Over!",
      "Well done! Computer guessed your number in " +
        passedGuesses.length +
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
      curMin.current = currentGuess + 1; //to insure unique guesses
      //console.log("greater min: " + curMin.current);
    } else {
      curMax.current = currentGuess;
      //console.log("lower max:" + curMax.current);
    }

    const guess = generateRandomIntBetween(
      curMin.current,
      curMax.current,
      currentGuess
    );

    // console.log(
    //   "currentGuess: " + guess + " passedGuesses: " + passedGuesses.current
    // );
    setCurrentGuess(guess);
    setPassedGuesses([guess, ...passedGuesses]);
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
      {/* <ScrollView style={{marginTop: 14}}>
        {passedGuesses.current.map(guess => (
          <CustomViewListItem value={guess} />
        ))}
      </ScrollView> */}
      <FlatList
        style={{ marginTop: 14 }}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.toString()}
        data={passedGuesses.reverse()}
        renderItem={renderItem} //.bind(this, passedGuesses.length)
      />
    </View>
  );
};

const renderItem = itemData => {
  //console.log("item " + itemData.item);
  return (
    <CustomViewListItem
      value={"№" + (itemData.index + 1) + " - " + itemData.item}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  list: { justifyContent: "flex-end" }
});

export default GameScreen;
