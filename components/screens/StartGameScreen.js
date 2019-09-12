import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Keyboard, Alert } from "react-native";
import CustomViewCard from "../CustomViewCard";
import colors from "../../constants/colors";
import CustomViewInput from "../CustomViewInput";
import CustomViewVisibility from "../CustomViewVisibility";
import CustomViewButtonArea from "../CustomViewButtonArea";

const StartGameScreen = props => {
  const [enteredNum, setEnteredNum] = useState("");
  const [chosenNum, setChosenNum] = useState("");
  const [numberHolderVisible, setNumberHolderVisible] = useState(false);

  const enteredNumHandler = inputNum => {
    setEnteredNum(inputNum.replace(/[^0-9]/g, ""));
  };

  const confirmEnteredNumHandler = () => {
    var theNum = parseInt(enteredNum);
    if (isNaN(theNum) || theNum <= 0 || theNum > 99) {
      if (enteredNum === "") {
        theNum = "The input";
      }

      Alert.alert(
        "Invalid Input!",
        theNum + " is not valid value between 1 and 99!",
        [{ text: "Close", style: "destructive" }]
      );
      return;
    }
    Keyboard.dismiss();
    setChosenNum(theNum);
    setEnteredNum("");
    setNumberHolderVisible(true);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Let The Game Begin</Text>
      <CustomViewCard style={styles.inputArea}>
        <CustomViewInput
          style={{ borderBottomColor: colors.placeholder }}
          placeholderTextColor={colors.placeholder}
          placeholder="Enter a number!"
          keyboardType="number-pad"
          maxLength={2}
          maxLines={1}
          onChangeText={enteredNumHandler}
          value={enteredNum}
        />
        <CustomViewButtonArea
          leftBtnTitle="Confirm"
          leftBtnColour="green"
          leftBtnOnPress={confirmEnteredNumHandler}
          rightBtnTitle="Reset"
          rightBtnColour="red"
          rightBtnOnPress={() => {
            setEnteredNum("");
          }}
        />
      </CustomViewCard>
      <CustomViewVisibility visible={numberHolderVisible}>
        <CustomViewCard style={styles.numberHolder}>
          <Text>{"Entered Number: " + chosenNum}</Text>
          <View style={styles.playButton}>
            <Button
              title="START TO PLAY"
              onPress={() => props.onGameStarted(chosenNum)}
            />
          </View>
        </CustomViewCard>
      </CustomViewVisibility>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignContent: "center",
    alignItems: "center"
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginVertical: 10
  },
  inputArea: { width: "90%" },
  numberHolder: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "space-between",
    alignItems: "center",
    borderColor: colors.accent,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    height: 100
  },
  playButton: {
    marginTop: 10,
    flex: 1,
    padding: 10
  }
});

export default StartGameScreen;
