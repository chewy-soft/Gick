import { StyleSheet } from "react-native";
import { defaultStyles, themes } from "./styles.default";
import _ from "lodash";

const diff = {
  tabContainer: {
    padding: 4,
    marginHorizontal: 4
  },
  title: {
    fontSize: 16,
    marginTop: 8
  },
  info: {
    padding: 0,
    marginTop: 8
  },
  button: {
    height: 40,
    minWidth: "100%",
    marginTop: "auto"
  },
  icon: {
    paddingVertical: 8
  }
};

export const getStyles = theme => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, diff, themes[theme]);
  return StyleSheet.create(styles);
};

export const params = {
  svg: 68
};
