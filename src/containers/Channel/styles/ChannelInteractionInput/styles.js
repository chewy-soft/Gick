import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const diff = {
  commend: {
    fontSize: 14
  },
  button: { marginRight: 4 },
  content: {
    marginVertical: 6,
    marginBottom: 30,
    paddingHorizontal: 6
  },
  comment: { paddingHorizontal: 2 }
};

export default StyleSheet.create(_.merge(defaultStyle, diff));
