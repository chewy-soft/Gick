import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  tr: { minHeight: 46 }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
