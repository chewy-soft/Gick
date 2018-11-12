import React from "react";
import { View } from "react-native";
import Button from "./Button";

export default props => (
  <View>
    {props.order == "up" && (
      <Button
        size="s"
        theme="orange"
        content="升序"
        icon="sortUp"
        onPress={props.onPress}
      />
    )}
    {props.order == "down" && (
      <Button
        size="s"
        theme="darkGreen"
        content="降序"
        icon="sortDown"
        onPress={props.onPress}
      />
    )}
    {props.order == "unset" && (
      <Button
        size="s"
        theme="darkBlue"
        content="综合排序"
        icon="sort"
        onPress={props.onPress}
      />
    )}
  </View>
);
