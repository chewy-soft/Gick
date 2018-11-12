import { StyleSheet } from "react-native";
import defaultStyles, { themes, sizes } from "./styles.default";
import _ from "lodash";

export const getStyles = (theme, size) => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, themes[theme]);
  styles = _.merge(styles, sizes[size]);
  return StyleSheet.create(styles);
};

const params = {
  s: { iconSize: 13 },
  m: { iconSize: 18 }
};

export const getParams = size => {
  return params[size];
};
