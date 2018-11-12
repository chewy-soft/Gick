import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  container: { maxWidth: 320 },
  inside: { maxWidth: 316, padding: 4 },
  content: { maxWidth: 232 }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
