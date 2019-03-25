import { StyleSheet } from "react-native";
import _ from "lodash";
import defaultStyle from "./styles.default";

const diff = {
  roundCover: { paddingLeft: 20, paddingTop: 8 }
};

export default StyleSheet.create(_.merge(defaultStyle, diff));

export const params = {
  round: 140,
  square: 210
};
