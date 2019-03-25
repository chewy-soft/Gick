import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  descriptionValue: { paddingTop: 12, lineHeight: 20 }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
