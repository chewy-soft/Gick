import React from "react";
import { Text, StyleSheet } from "react-native";
import View from "../../components/View/View";

const styles = StyleSheet.create({
  typeContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 2
  },
  typing: { paddingTop: 2, color: "#bbb", fontSize: 12 },
  suffix: { paddingLeft: 4, fontSize: 12, color: "#aaa" }
});

export default props => (
  <View style={styles.typeContent}>
    <Text style={styles.typing}>
      {props.userComponent}
    </Text>
    <Text style={styles.suffix}>正在输入...</Text>
  </View>
);
