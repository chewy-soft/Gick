import defaultStyle from "./styles.default";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    minHeight: 80
  }
});
