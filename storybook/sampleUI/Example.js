import React from "react";
import { AppRegistry, StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    borderColor: "#E6ECF0",
    borderWidth: 1,
    marginTop: 20,
    padding: width > 1024 ? 20 : 8,
    flexWrap: "wrap"
  },
  dark: { backgroundColor: "#2b2b2b" },
  title: {
    fontWeight: "bold",
    color: "#aaa",
    paddingVertical: 12
  }
});

const Example = props => (
  <View style={styles.content}>
    <Text style={styles.title}>Example Light Theme</Text>
    {props.example}
  </View>
);

const ExampleDark = props => (
  <View style={[styles.content, styles.dark]}>
    <Text style={styles.title}>Example Dark Theme</Text>
    {props.example}
  </View>
);

export { Example, ExampleDark };