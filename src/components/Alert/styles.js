import defaultStyle from "./styles.default";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    minHeight: 50
  },
  content: {
    ...defaultStyle.content,
    marginRight: 8
  }
});
