import defaultStyle from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {};

export default StyleSheet.create(_.merge(defaultStyle, diff));
