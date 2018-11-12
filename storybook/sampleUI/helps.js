import React from 'react';
import { StyleSheet, View } from 'react-native';

const DividerHorizontal = () => <View style={styles.horizontalDivider} />;
const DividerVertical = () => <View style={styles.verticalDivider} />;

const styles = StyleSheet.create({
  horizontalDivider: {
    width: 8
  },
  verticalDivider: {
    height: 20
  }
});

export { DividerHorizontal, DividerVertical };
