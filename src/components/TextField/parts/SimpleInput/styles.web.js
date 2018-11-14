import { StyleSheet } from "react-native";
import defaultStyles from "./styles.default";
import _ from "lodash";

const diff = {
  darkOnFocus: {
    outline: "none",
    borderBottomWidth: 2
  },
  dark: {
    borderBottomWidth: 1
  },
  lightOnFocus: {
    outline: "none",
    borderBottomWidth: 0
  },
  light: {
    borderRadius: 6
  },
  gray: {
    borderBottomWidth: 0
  },
  grayOnFocus: {
    outline: "none"
  },
  search: {
    borderRadius: 6
  },
  searchOnFocus: {
    outline: "none"
  },
  transparentOnFocus: {
    outline: "none"
  }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
