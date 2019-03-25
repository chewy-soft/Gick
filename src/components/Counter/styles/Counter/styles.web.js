import _ from "lodash";
import { StyleSheet } from "react-native";
import defaultStyles from "./styles.defualt";

const diff = {
  container: {
    borderRadius: 6,
    padding: 22,
    boxShadow: "0 0 10px #000000",
    minHeight: 150
  },
  info: { fontSize: 24 },
  count: { fontSize: 60 },
  suffix: { paddingBottom: 12, fontSize: 16, marginLeft: 6 }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
