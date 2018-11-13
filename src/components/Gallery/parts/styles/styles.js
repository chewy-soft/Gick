import { StyleSheet } from "react-native";
import defaultStyles from "./styles.default";
import _ from "lodash";

const diff = {
  arrow: {
    width: 48,
    height: 30
  }
};
export const styles = StyleSheet.create(_.merge(defaultStyles, diff));

export const params = {
  iconSize: 14
};
