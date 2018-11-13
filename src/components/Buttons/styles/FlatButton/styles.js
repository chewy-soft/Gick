import { StyleSheet } from "react-native";
import defaultStyle, { themes } from "./styles.default";
import _ from "lodash";

const diff = {
  content: {
    fontSize: 15
  },
  button: {
    paddingHorizontal: 6
  }
};

const sizes = {
  xl: { button: { height: 87, borderRadius: 6 } },
  l: { button: { height: 60, borderRadius: 6 } },
  s: { button: { height: 48, borderRadius: 3 } },
  xs: { button: { height: 40, borderRadius: 3 }, content: { fontSize: 14 } }
};

export const getStyles = (theme, size) => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, themes[theme]);
  styles = _.merge(styles, sizes[size]);
  return StyleSheet.create(styles);
};
