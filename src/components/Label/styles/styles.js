import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const diff = {
  text: {
    paddingHorizontal: 8
  }
};

const sizes = {
  l: {
    label: { height: 22, fontSize: 12, borderRadius: 4 },
    close: {
      height: 22,
      paddingRight: 4,
      lineHeight: 22
    },
    stand: { fontSize: 12, marginRight: 2 }
  },
  m: {
    label: { height: 16, fontSize: 10, borderRadius: 8 },
    close: {
      height: 16,
      paddingRight: 4
    },
    stand: { fontSize: 10 }
  },
  s: {
    label: { height: 14, fontSize: 10, borderRadius: 4 },
    close: {
      height: 14,
      paddingRight: 2
    },
    stand: { fontSize: 10 }
  }
};

export const getStyles = size => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, sizes[size]);
  return StyleSheet.create(styles);
};

const params = {
  m: { icon: 9 },
  s: { icon: 9 }
};
export const getParams = size => _.merge(params[size]);
