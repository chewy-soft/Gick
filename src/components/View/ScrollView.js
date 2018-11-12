import React from "react";
import { ScrollView } from "react-native";
import ScrollFooter from "./parts/ScrollFooter";

export default props => {
  const { style, taps, horizontal, underLine } = props;
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps={taps || "never"}
      style={style}
      horizontal={horizontal}
      contentContainerStyle={style}
      {...props}
    >
      {props.children}
      {underLine && <ScrollFooter />}
    </ScrollView>
  );
};
