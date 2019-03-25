import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    marginBottom: 20
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#fff'
  }
});

const PageTitle = props => (
  <View style={styles.content}>
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

export default PageTitle;
