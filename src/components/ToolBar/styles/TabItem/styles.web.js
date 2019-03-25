import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const actives = {
  active: {
    tab: { color: "#fff" },
    content: { borderBottomWidth: 3 },
    bottomText: { color: "#fff" }
  },
  default: {
    tab: {
      color: "#aaa"
    },
    bottomText: { color: "#aaa" }
  }
};

const diff = {
  notice: { right: 16, top: 8 },
  content: { marginHorizontal: "5%", paddingTop: 11 },
  tab: { fontSize: 14 }
};

export const getStyles = active => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, actives[active]);
  return StyleSheet.create(styles);
};
