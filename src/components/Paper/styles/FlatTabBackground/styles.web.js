import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export default StyleSheet.create({
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    width: 800,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    ...defaultStyle.title,
    marginBottom: 30,
    textTransform: "uppercase"
  }
});
