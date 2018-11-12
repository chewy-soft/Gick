import React from "react";
import { StyleSheet, Text } from "react-native";
import View from "../View/View";

const styles = StyleSheet.create({
  div: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 16,
    flex: 1
  },
  divider: {
    height: 1,
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: "rgba(255,255,255,.8)"
  },
  newDivider: {
    backgroundColor: "#DCBC19"
  },
  date: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
    color: "rgba(255,255,255,.8)",
    fontSize: 12
  },
  new: {
    color: "#DCBC19",
    fontSize: 14
  }
});

export default props => (
  <View style={styles.div}>
    <Text
      style={
        props.type == "new"
          ? [styles.divider, styles.newDivider]
          : styles.divider
      }
    />
    <Text style={props.type == "new" ? [styles.date, styles.new] : styles.date}>
      {props.text}
    </Text>
    <Text
      style={
        props.type == "new"
          ? [styles.divider, styles.newDivider]
          : styles.divider
      }
    />
  </View>
);
