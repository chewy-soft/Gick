import { StyleSheet } from "react-native";
import defaultStyles from "./styles.default";
import _ from "lodash";

const diff = {
  light: {
    borderBottomWidth: 0,
    borderRadius: 4
  },
  gray: {
    borderBottomWidth: 0
  },
  grayOnFocus: {},
  search: {
    paddingVertical: 0,
    borderRadius: 4
  },
  searchOnFocus: {
    borderBottomWidth: 0
  }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
