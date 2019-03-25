import colors from "../../../../colors";
import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export default StyleSheet.create({
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    width: 52,
    height: 52,
    minWidth: 52,
    minHeight: 52
  },
  text: { ...defaultStyle.text, fontSize: 19 }
});
