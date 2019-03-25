import _ from "lodash";
import { StyleSheet } from "react-native";
import defaultStyles from "./styles.default";

const diff = {
  button: { width: 60, height: 24 }
};
export default StyleSheet.create(_.merge(defaultStyles, diff));
