import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const actives = {
  active: {
    tab: {
      color: "#fff",
      paddingBottom: 3
    },
    content: {
      borderBottomWidth: 3
    },
    bottomText: { color: "#fff" }
  },
  default: {
    tab: {
      color: "#aaa",
      paddingBottom: 11
    },
    content: {
      paddingTop: 3
    },
    bottomText: { color: "#aaa" }
  }
};

const diff = {
  notice: { right: 0, top: 1 }
};

export const getStyles = active => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, actives[active]);
  return StyleSheet.create(styles);
};
