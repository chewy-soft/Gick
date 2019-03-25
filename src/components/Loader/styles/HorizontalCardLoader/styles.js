import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export default StyleSheet.create({
  ...defaultStyle,
  title: {
    ...defaultStyle.title,
    height: 14,
    borderRadius: 8
  },
  sub: {
    ...defaultStyle.sub,
    height: 10,
    borderRadius: 5
  },
  subBottom: {
    ...defaultStyle.subBottom,
    height: 12,
    borderRadius: 6
  }
});
