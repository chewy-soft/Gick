import _ from "lodash";
import { StyleSheet } from "react-native";
import defaultStyles from "./styles.defualt";

const diff = {};

export default StyleSheet.create(_.merge(defaultStyles, diff));
