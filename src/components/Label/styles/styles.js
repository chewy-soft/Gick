import { StyleSheet } from "react-native";
import defaultStyle, { themes } from "./styles.default";
import _ from "lodash";

const diff = {
  label: {
    paddingHorizontal: 8
  }
};

const sizes = {
  m: { label: { height: 16, fontSize: 10, borderRadius: 8 } },
  s: { label: { height: 14, fontSize: 10, borderRadius: 4 } }
};

export const getStyles = (theme, size) => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, themes[theme]);
  styles = _.merge(styles, sizes[size]);
  return StyleSheet.create(styles);
};
