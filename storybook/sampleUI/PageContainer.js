import React from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    margin: 0
  },
  scrollViewStyle: {
    height: height,
    marginBottom: 10,
    paddingHorizontal: "10%"
  },
  scrollViewContentContainerStyle: {
    padding: 10
  }
});

export default props => (
  <View style={styles.scrollViewContainer}>
    <ScrollView
      contentContainerStyle={styles.scrollViewContentContainerStyle}
      keyboardDismissMode="on-drag"
      // ref={scrollview => {
      //   this.scrollview = scrollview;
      // }}
      style={styles.scrollViewStyle}
    >
      {props.children}
    </ScrollView>
  </View>
);
