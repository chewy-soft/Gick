import defaultStyles from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  shadow: { boxShadow: "0 4px 4px rgba(0,0,0,.4)" }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
