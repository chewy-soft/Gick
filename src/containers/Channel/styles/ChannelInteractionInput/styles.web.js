import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const diff = {
  commend: { fontSize: 18 },
  button: { boxShadow: "1px 2px 4px rgba(0,0,0,.4)" },
  content: { paddingHorizontal: 8 },
  comment: { paddingHorizontal: 4 }
};

export default StyleSheet.create(_.merge(defaultStyle, diff));
