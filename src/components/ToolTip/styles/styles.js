import defaultStyle from "./styles.default";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ...defaultStyle,
  content: {
    ...defaultStyle.content,
    fontSize: 10
  }
});
