import React from "react";
import View from "../View/View";
import styles from "./styles/HorizontalCardLoader/styles";

export default props => (
  <View style={styles.content}>
    <View style={styles.left}>
      <View style={styles.image} />
    </View>
    <View style={styles.right}>
      <View style={styles.title} />
      <View style={styles.sub} />
      <View style={styles.subBottom} />
    </View>
  </View>
);
