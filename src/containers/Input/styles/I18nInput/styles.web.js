import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  minmax: { height: 68 },
  numberInput: { height: 68, marginTop: "auto" },
  onCommentContent: {
    maxWidth: 600
  }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
