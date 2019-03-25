import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  frame: {
    width: 60,
    height: 60,
    borderRadius: 3,
    margin: 4
  }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
