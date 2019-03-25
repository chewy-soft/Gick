import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export default StyleSheet.create({
  ...defaultStyle,
  title: {
    ...defaultStyle.title,
    height: 19,
    borderRadius: 10
  },
  sub: {
    ...defaultStyle.sub,
    height: 12,
    borderRadius: 6
  },
  subBottom: {
    ...defaultStyle.subBottom,
    height: 14,
    borderRadius: 7
  }
});
