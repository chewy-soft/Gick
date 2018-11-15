import defaultStyle from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  container: {
    boxShadow: "0 0 5px #000000",
    width: 334
  },
  users: {
    boxShadow: "1px 1px 3px rgba(0,0,0,.4)",
    height: 30
  },
  name: { height: 40 },
  nameText: {
    fontSize: 16,
    paddingLeft: 6,
    paddingVertical: 2
  },
  infoContent: { padding: 5, height: 44 }
};

const sizes = {
  s: {
    image: { height: 150 }
  },
  m: {
    image: { height: 180 }
  },
  l: {
    image: { height: 280 }
  }
};
export const getStyle = size => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, sizes[size]);
  return StyleSheet.create(styles);
};
