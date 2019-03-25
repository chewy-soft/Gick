import { StyleSheet } from "react-native";
import defaultStyles from "./styles.default";
import _ from "lodash";

const diff = {
  itemTitle: { fontSize: 10 },
  tagTitle: { fontSize: 10 },
  components: {
    paddingVertical: 10,
    paddingHorizontal: 6
  },
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
