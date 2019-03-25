import { StyleSheet } from "react-native";
import _ from "lodash";
import defaultStyle from "./styles.default";

const diff = {
  type_title: { fontSize: 16, marginBottom: 12 },
  card_content: { marginBottom: 12, marginRight: 12 },
};

export default StyleSheet.create(_.merge(defaultStyle, diff));

export const params = {
  delete: 36
};
