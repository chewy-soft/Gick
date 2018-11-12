import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../colors";

export default props => (
  <View
    style={[
      props.style,
      {
        backgroundImage: `linear-gradient(${(props.theme == "topToBottom" &&
          "to bottom") ||
          "to bottom right"}, ${props.start},${props.end})`
      }
    ]}
  >
    {props.children}
  </View>
);
