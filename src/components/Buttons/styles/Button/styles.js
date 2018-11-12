import { StyleSheet } from "react-native";
import defaultStyles, { themes, sizes } from "./styles.default";
import _ from "lodash";

const sizes_diff = {
  s: {
    content: {
      height: 17,
      paddingBottom: 2
    },
    text: { fontSize: 12 }
  },
  m: {
    content: {
      height: 26
    },
    text: { fontSize: 14 }
  }
};

const sizes_mobile = _.merge(sizes, sizes_diff);

export const getStyles = (theme, size) => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, themes[theme]);
  styles = _.merge(styles, defaultStyles, sizes_mobile[size]);
  return StyleSheet.create(styles);
};

const params = {
  s: { iconSize: 10 },
  m: { iconSize: 16 }
};

export const getParams = size => {
  return params[size];
};
