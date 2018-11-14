import { StyleSheet } from "react-native";
import defaultStyles from "./styles";
import _ from "lodash";

const diff = { label: { fontSize: 14 } };

export default StyleSheet.create(_.merge(defaultStyles, diff));
