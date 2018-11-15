import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export const styles = StyleSheet.create({
  ...defaultStyle,
  rightContainer: {
    ...defaultStyle.rightContainer,
    padding: 2
  }
});

export const params = {
  icon: 18
};
