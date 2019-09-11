import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Keyboard } from "react-native";
import CustomViewCard from "../CustomViewCard";
import colors from "../../constants/colors";
import CustomViewInput from "../CustomViewInput";

const StartGameScreen = props => {
  const [enteredNum, setEnteredNum] = useState("");

  const enteredNumHandler = inputNum => {
    setEnteredNum(inputNum.replace(/[^0-9]/g, ""));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Started</Text>
      <CustomViewCard style={styles.inputArea}>
        <CustomViewInput
          style={{ borderBottomColor: colors.placeholder }}
          placeholderTextColor={colors.placeholder}
          placeholder="Enter a number!"
          keyboardType="number-pad"
          maxLength={3}
          maxLines={1}
          onChangeText={enteredNumHandler}
          value={enteredNum}
        />
        <View style={styles.buttonArea}>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Confirm"
              color="green"
              onPress={() => {
                //TODO send value
                Keyboard.dismiss();
                setEnteredNum("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Reset"
              color="red"
              onPress={() => {
                setEnteredNum("");
              }}
            />
          </View>
        </View>
      </CustomViewCard>
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
  buttonArea: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  },
  button: {
    flex: 1,
    padding: 10
  },
  inputArea: { width: "90%" }
});

export default StartGameScreen;
