import { StyleSheet } from "react-native";
import defaultStyle, { themes } from "./styles.default";
import _ from "lodash";

const diff = {
  empty: {
    paddingVertical: 8
  },
  info: { width: "90%" },
  panelTab: {
    paddingBottom: 12,
    fontSize: 17
  },
  subInfo: {
    paddingVertical: 16,
    paddingHorizontal: 4,
    fontSize: 14
  },
  dividerText: {
    paddingHorizontal: 10,
    fontSize: 24
  }
};

export default theme => {
  let styles = {};
  styles = _.merge(styles, defaultStyle, diff, themes[theme]);
  return StyleSheet.create(styles);
};
