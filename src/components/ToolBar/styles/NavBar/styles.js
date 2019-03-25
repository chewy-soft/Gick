import { StyleSheet } from "react-native";
import defaultStyles, { types } from "./styles.default";
import _ from "lodash";

const diff = {
  container: {
    ...defaultStyles.container,
    height: 44
  },
  left: {
    paddingHorizontal: 4,
    paddingRight: 8
  }
};

export const getStyles = type => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, diff, types[type]);
  return StyleSheet.create(styles);
};
