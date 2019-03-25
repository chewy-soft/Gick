import { StyleSheet } from "react-native";
import defaultStyle, { themes, theme_params } from "./styles.default";
import _ from "lodash";

const diff = {
  error: { marginLeft: 16 },
  text: { marginTop: 40 },
  subtext: { marginTop: 8 }
};

const sizes = {
  m: { error: { fontSize: 60 }, text: { fontSize: 16 }, subtext: { fontSize: 16 } },
  l: { error: { fontSize: 100 }, text: { fontSize: 19 }, subtext: { fontSize: 19 } }
};

export const getStyles = (size, theme) => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, sizes[size]);
  styles = _.merge(styles, themes[theme]);
  return StyleSheet.create(styles);
};

const size_params = {
  m: { icon: 160 },
  l: { icon: 192 }
};

export const getParams = (size, theme) =>
  _.merge(size_params[size], theme_params[theme]);
