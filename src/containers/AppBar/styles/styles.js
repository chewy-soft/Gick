import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";
import _ from "lodash";

const diff = {
  tabs: {
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.36)"
  }
};

export default StyleSheet.create(_.merge(defaultStyle, diff));
