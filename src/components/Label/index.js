import React from "react";
import { Text } from "react-native";
import { getStyles } from "./styles/styles";

export default props => {
  const { content, theme, size } = props;
  const styles = getStyles(theme || "black", size || "m");

  return <Text style={styles.label}>{content || ""}</Text>;
};
