import { StyleSheet } from "react-native";
import { defaultStyles, themes } from "./styles.default";
import _ from "lodash";

const diff = {
  tabContainer: {
    padding: 10
  },
  title: {
    fontSize: 18,
    marginTop: 20
  },
  info: {
    marginTop: 16
  },
  button: {
    width: "100%"
  },
  icon: {
    paddingVertical: 26
  }
};

export const getStyles = theme => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, diff, themes[theme]);
  return StyleSheet.create(styles);
};

export const params = {
  svg: 78
};
