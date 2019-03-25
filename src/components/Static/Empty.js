import React from "react";
import Text from "../Text/Text";
import Symbol from "../Symbol";
import { getStyles, getParams } from "./styles/styles";
import View from "../View/View";

export default props => {
  const { theme, size } = props;
  const styles = getStyles(size || "m", theme || "dark");
  const params = getParams(size || "m", theme || "dark");
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <Symbol name="emptyBox" size={params.icon} color={params.color} />
      </View>
      <Text style={styles.text}>咦？这里什么都没有呀！</Text>
    </View>
  );
};
