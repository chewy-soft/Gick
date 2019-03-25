import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {};
export default StyleSheet.create(_.merge(defaultStyles, diff));

export const params = {
    width: "100%",
    icon: 32
  };