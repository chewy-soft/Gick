import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export const styles = StyleSheet.create({
  ...defaultStyle,
  subTitle: { ...defaultStyle.subTitle, maxHeight: 32, overflow: "hidden" }
});

export const params = {
  icon: 22
};
