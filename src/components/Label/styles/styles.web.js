import { StyleSheet } from "react-native";
import defaultStyle, { themes } from "./styles.default";
import _ from "lodash";

const diff = {
  label: {
    paddingHorizontal: 12
  }
};

const sizes = {
  m: { label: { height: 18, fontSize: 14, borderRadius: 9 } },
  s: { label: { height: 16, fontSize: 12, borderRadius: 6 } }
};

export const getStyles = (theme, size) => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, themes[theme]);
  styles = _.merge(styles, sizes[size]);
  return StyleSheet.create(styles);
};
