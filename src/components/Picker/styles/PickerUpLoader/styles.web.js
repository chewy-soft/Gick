import { StyleSheet } from "react-native";
import _ from "lodash";
import defaultStyles from "./styles.default";

const diff = {
  container: { maxWidth: 536 },
  margin: { marginBottom: 12 },
  failed: {
    height: 15,
    width: 15,
    borderRadius: 10,
    left: -22,
    top: 6
  }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));

export const params = {
  files: 6
};
