import colors from "../../../../colors";
import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export default StyleSheet.create({
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    flexDirection: "column"
  },
  badge: {
    ...defaultStyle.badge,
    right: -8,
    top: 0
  },
  title: { ...defaultStyle.title, fontSize: 10, paddingLeft: 0 },
  icon: {
    ...defaultStyle.icon
  },
  smallBadge: {
    ...defaultStyle.smallBadge,
    top: 0,
    right: 2
  }
});
