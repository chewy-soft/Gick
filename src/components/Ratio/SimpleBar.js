import React from "react";
import { StyleSheet } from "react-native";
import View from "../View/View";

const styles = StyleSheet.create({
  progress: {
    paddingBottom: 3,
    paddingTop: 2,
    paddingHorizontal: 4,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 4,
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,.1)",
    borderTopWidth: 1,
    borderEndWidth: 0,
    borderStartWidth: 0
  },
  progressBar: {
    borderRadius: 4
  }
});

export default props => {
  const { progress, size } = props;
  let color;
  const percent = progress;
  if (percent < 0.05) color = "#f63a0f";
  if (percent >= 0.05 && percent < 0.25) color = "#f63a0f";
  if (percent >= 0.25 && percent < 0.5) color = "#f27011";
  if (percent >= 0.5 && percent < 0.75) color = "#f2b01e";
  if (percent >= 0.75 && percent < 0.95) color = "#f2d31b";
  if (percent >= 0.95) color = "#86e01e";

  const ratio = { height: size == "s" ? 6 : 16 };
  const bar = StyleSheet.flatten([
    styles.progressBar,
    ratio,
    { backgroundColor: color }
  ]);

  return (
    <View style={styles.progress}>
      <View style={[bar, { width: `${percent * 100}%` }]} />
    </View>
  );
};
