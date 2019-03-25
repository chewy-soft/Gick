import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  frame: {
    width: 80,
    height: 80,
    borderRadius: 4,
    borderStyle: "dashed",
    margin: 8
  }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
