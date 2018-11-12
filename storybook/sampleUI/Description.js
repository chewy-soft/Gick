import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  content: {
    marginTop: 16
  },
  text: {
    fontSize: 16
  }
});

const Description = props => (
  <View style={styles.content}>
    <Text style={styles.text}>{props.info}</Text>
  </View>
);

export default Description;
