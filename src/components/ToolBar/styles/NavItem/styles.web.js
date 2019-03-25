import colors from "../../../../colors";
import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import c from "../../../../lib/css";

export default StyleSheet.create({
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    ...c.flex_row,
    paddingHorizontal: 12
  },
  badge: {
    ...defaultStyle.badge,
    right: -8,
    top: -4,
    zIndex: 99
  },
  smallBadge: {
    ...defaultStyle.smallBadge,
    top: 0,
    right: -6
  },
  tips: {
    ...c.absolute,
    zIndex: 99,
    top: 40,
    left: -18,
    right: 0
  },
  title: { ...defaultStyle.title, fontSize: 18, paddingLeft: 16 },
  label: {
    ...defaultStyle.label,
    top: 0,
    right: -12
  }
});
