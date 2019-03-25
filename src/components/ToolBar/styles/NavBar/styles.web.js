import { StyleSheet } from "react-native";
import defaultStyles, { types } from "./styles.default";
import _ from "lodash";

const diff = {
  container: {
    height: 40
  },
  left: {
    paddingHorizontal: 12
  }
};

export const getStyles = type => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, diff, types[type]);
  return StyleSheet.create(styles);
};
