import React from "react";
import { View, Text } from "react-native";

const CustomViewListItem = props => {
  return (
    <View
      key={props.value}
      style={{
        marginTop: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 30,
        paddingVertical: 10
      }}
    >
      <Text style={{ textAlign: "center" }}>{props.value}</Text>
    </View>
  );
};

export default CustomViewListItem;
