import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const diff = {
  space: { width: 8 },
  days: { fontSize: 11, paddingHorizontal: 6, paddingTop: 4 }
};

const sizes = {
  xs: {
    time: { fontSize: 12 },
    colon: {
      fontSize: 10,
      marginHorizontal: 2,
      marginRight: 4,
      marginBottom: "auto"
    }
  },
  s: {
    suffix: { fontSize: 8 },
    time: { fontSize: 16 },
    colon: {
      fontSize: 14,
      marginHorizontal: 3,
      marginRight: 6,
      marginBottom: "auto"
    }
  },
  m: {
    suffix: { fontSize: 10 },
    time: { fontSize: 17 },
    colon: {
      fontSize: 16,
      marginHorizontal: 4,
      marginRight: 4,
      paddingBottom: 2
    }
  },
  l: {
    suffix: { fontSize: 12 },
    time: { fontSize: 30, letterSpacing: 4 },
    colon: {
      fontSize: 28,
      marginLeft: 6,
      marginRight: 6,
      paddingBottom: 8
    }
  }
};

export const getStyles = size => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, sizes[size]);
  return StyleSheet.create(styles);
};
