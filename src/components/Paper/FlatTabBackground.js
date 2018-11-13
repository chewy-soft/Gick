import React from "react";
import { Text } from "react-native";
import View from "../View/View";
import Symbol from "../Symbol";
import styles from "./styles/FlatTabBackground/styles";

export default props => (
  <View style={[styles.container, props.style]}>
    <View style={styles.backContainer}>
      <View style={[styles.background, styles.bottomLeft]}>
        <Symbol name="monster" size={192} />
      </View>
      <View style={[styles.background, styles.bottomRight]}>
        <Symbol name="monster" size={192} />
      </View>
      <View style={[styles.background, styles.top]}>
        <Symbol name="monster" size={128} />
      </View>
    </View>
    <Text style={styles.title}>{props.title}</Text>
    {props.children}
  </View>
);
