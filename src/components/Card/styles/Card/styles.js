import defaultStyle from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  container: {
    flex: 1,
    width: "100%"
  },
  users: {
    height: 22
  },
  arrow: {
    width: 16,
    height: 16,
    top: 3,
    right: -8
  },
  name: { height: 30 },
  nameText: {
    fontSize: 12,
    paddingLeft: 4,
    paddingVertical: 2
  },
  userText: {
    fontSize: 12
  },
  infoContent: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    height: 34
  }
};

const sizes = {
  s: {
    image: { height: 88 }
  },
  m: {
    image: { height: 128 }
  },
  l: {
    image: { height: 214 }
  }
};

export const getStyle = size => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, sizes[size]);
  return StyleSheet.create(styles);
};

