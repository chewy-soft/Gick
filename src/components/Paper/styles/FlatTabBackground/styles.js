import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
export default StyleSheet.create({
  ...defaultStyle,
  title: {
    ...defaultStyle.title,
    marginBottom: 10
  }
});
