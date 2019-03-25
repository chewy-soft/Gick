import { StyleSheet } from "react-native";
import _ from "lodash";
import colors from "../../../../colors";
import c from "../../../../lib/css";

const defaultStyle = {
  content: {
    ...c.flex_center,
    backgroundColor: undefined,
    height: undefined,
    width: undefined,
    borderRadius: undefined,
    paddingVertical: undefined,
    paddingHorizontal: undefined
  },
  text: { color: undefined, textAlignVertical: "center" }
};

const sizes = {
  s: {
    content: {
      height: 10,
      width: 10,
      borderRadius: 5
    }
  },
  l: {
    content: {
      height: 20,
      width: 20,
      borderRadius: 10
    }
  },
  square: {
    content: {
      height: 16,
      paddingVertical: 0,
      paddingHorizontal: 6,
      borderRadius: 2
    }
  }
};

const themes = {
  red: {
    content: { backgroundColor: "#ff0000" },
    text: { color: "#fff" }
  },
  white: {
    content: { backgroundColor: "#fff" },
    text: { color: "#2b2b2b" }
  },
  gray: {
    content: { backgroundColor: colors.normalGray },
    text: { color: "#fff" }
  },
  darkBlue: {
    content: { backgroundColor: colors.hoverDarkGreen },
    text: { color: "#fff" }
  },
  gold: {
    content: { backgroundColor: colors.gold },
    text: { color: "#fff" }
  },
  blue: {
    content: { backgroundColor: colors.lightBlue },
    text: { color: "#fff" }
  }
};

export default (theme, size) => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, themes[theme]);
  styles = _.merge(styles, sizes[size]);
  return StyleSheet.create(styles);
};
