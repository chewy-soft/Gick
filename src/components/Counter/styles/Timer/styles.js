import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const diff = {
  space: { width: 6 },
  days: { fontSize: 10, paddingHorizontal: 4, paddingTop: 3 }
};

const sizes = {
  xs: {
    time: { fontSize: 10 },
    colon: {
      fontSize: 9,
      marginHorizontal: 2,
      marginRight: 4,
      marginBottom: "auto"
    }
  },
  s: {
    suffix: { fontSize: 8 },
    time: { fontSize: 14 },
    colon: {
      fontSize: 12,
      marginHorizontal: 3,
      marginRight: 6,
      marginBottom: "auto"
    }
  },
  m: {
    suffix: { fontSize: 9 },
    time: { fontSize: 15 },
    colon: {
      fontSize: 14,
      marginHorizontal: 4,
      marginRight: 4,
      paddingBottom: 2
    }
  },
  l: {
    suffix: { fontSize: 10 },
    time: { fontSize: 18, letterSpacing: 4 },
    colon: {
      fontSize: 20,
      marginHorizontal: 6,
      marginRight: 6,
      paddingBottom: 2
    }
  }
};

export const getStyles = size => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, sizes[size]);
  return StyleSheet.create(styles);
};
