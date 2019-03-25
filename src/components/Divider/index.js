import React from "react";
import { StyleSheet, Text } from "react-native";
import View from "../View/View";
import _ from "lodash";
import c from "../../lib/css";

const _styles = {
  container: {
    ...c.flex_row,
    ...c.flex_center,
    height: 16,
    flex: 1
  },
  divider: {
    height: 1,
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: undefined
  },
  date: {
    ...c.flex_center,
    paddingHorizontal: 6,
    color: undefined,
    fontSize: 12
  }
};

const types = {
  new: {
    divider: { backgroundColor: "#DCBC19" },
    date: { color: "#DCBC19", fontSize: 14 }
  },
  light: { divider: { backgroundColor: "#aaa" }, date: { color: "#aaa" } },
  transparent: {
    divider: {
      backgroundColor: "transparent"
    },
    date: { color: "#aaa" }
  },
  dark: {
    divider: { backgroundColor: "rgba(255,255,255,.8)" },
    date: { color: "rgba(255,255,255,.8)" }
  }
};

export default props => {
  const { type, text } = props;
  let styles = {};
  styles = StyleSheet.create(_.merge(styles, _styles, types[type || "dark"]));

  return (
    <View style={styles.container}>
      <Text style={styles.divider} />
      <Text style={styles.date}>{text}</Text>
      <Text style={styles.divider} />
    </View>
  );
};
