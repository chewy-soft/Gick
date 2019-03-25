import colors from "../../../../colors";
import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export default StyleSheet.create({
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    width: 42,
    height: 42,
    minWidth: 42,
    minHeight: 42
  },
  text: { ...defaultStyle.text, fontSize: 14 }
});
