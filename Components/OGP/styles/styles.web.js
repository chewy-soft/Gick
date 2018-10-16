import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  container: { maxWidth: 520 },
  inside: { maxWidth: 516, padding: 8 },
  content: { maxWidth: 432, paddingRight: 8 },
  margin: { marginTop: 4 }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
