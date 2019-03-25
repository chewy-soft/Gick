import { StyleSheet } from "react-native";
import _ from "lodash";
import defaultStyle from "./styles.default";

const diff = {
  panelTitle: { fontSize: 14 },
  add: { marginBottom: 12, marginRight: 12, width: "50%" },
  sub: { marginBottom: 10 },
};

export default StyleSheet.create(_.merge(defaultStyle, diff));

export const params = {
  delete: 36
};
