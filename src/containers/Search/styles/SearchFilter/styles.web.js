import { StyleSheet } from "react-native";
import defaultStyles from "./styles.default";
import _ from "lodash";

const diff = {
  tagTitle: { fontSize: 14 },
  itemTitle: { fontSize: 14 },
  components: {
    paddingVertical: 20,
    paddingHorizontal: 12
  },
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
