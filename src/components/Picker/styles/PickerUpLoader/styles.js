import { StyleSheet } from "react-native";
import _ from "lodash";
import defaultStyles from "./styles.default";

const diff = {};

export default StyleSheet.create(_.merge(defaultStyles, diff));

export const params = {
    files: 3
  };
  