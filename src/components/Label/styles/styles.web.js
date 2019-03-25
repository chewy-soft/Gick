import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const diff = {
  text: {
    paddingHorizontal: 12
  }
};

const sizes = {
  l: {
    label: { height: 22, lineHeight: 22, fontSize: 12, borderRadius: 4 },
    close: {
      height: 22,
      paddingRight: 4
    },
    stand: { fontSize: 12, marginRight: 2 }
  },
  m: {
    label: {
      height: 18,
      fontSize: 12,
      borderRadius: 9,
    },
    close: {
      height: 18,
      paddingRight: 4
    },
    stand: { fontSize: 12 }
  },
  s: {
    label: { height: 16, fontSize: 12, borderRadius: 6 },
    close: {
      height: 16,
      paddingRight: 2
    },
    stand: { fontSize: 12 }
  }
};

export const getStyles = size => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, sizes[size]);
  return StyleSheet.create(styles);
};

const params = {
  l: { icon: 16 },
  m: { icon: 16 },
  s: { icon: 14 }
};
export const getParams = size => _.merge(params[size]);
