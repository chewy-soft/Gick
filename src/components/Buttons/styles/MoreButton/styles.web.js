import { StyleSheet } from "react-native";
import defaultStyles from "./styles.default";
import { themes } from "./styles.default";
import _ from "lodash";

const diff = {
  moreText: {
    fontSize: 12
  },
  more: {
    paddingHorizontal: 8,
    paddingVertical: 2
  }
};

export default theme => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, diff, themes[theme]);
  return StyleSheet.create(styles);
};
