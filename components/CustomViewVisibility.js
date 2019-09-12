import React from "react";
import { View } from "react-native";

const CustomViewVisibility = props => {
  if (!props.visible) {
    return null;
  }

  return (
    <View {...this.props} style={props.style}>
      {props.children}
    </View>
  );
};

export default CustomViewVisibility;
