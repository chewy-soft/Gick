import { StyleSheet } from "react-native";
import defaultStyle, { themes, theme_params } from "./styles.default";
import _ from "lodash";

const diff = {
  error: { marginLeft: 8 },
  text: { marginTop: 100 },
  subtext: { marginTop: 4 }
};

const sizes = {
  m: { error: { fontSize: 80 }, text: { fontSize: 14 }, subtext: { fontSize: 14 } },
  l: { error: { fontSize: 100 }, text: { fontSize: 16 }, subtext: { fontSize: 16 } }
};

export const getStyles = (size, theme) => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, sizes[size]);
  styles = _.merge(styles, themes[theme]);
  return StyleSheet.create(styles);
};

const size_params = {
  m: { icon: 120 },
  l: { icon: 130 }
};

export const getParams = (size, theme) =>
  _.merge(size_params[size], theme_params[theme]);
