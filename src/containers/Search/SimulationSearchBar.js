import React from "react";
import colors from "../../colors";
import Text from "../../components/Text/Text"; import { StyleSheet } from "react-native";
import View from "../../components/View/View";
import Symbol from "../../components/Symbol";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    height: 40,
    justifyContent: "center",
    backgroundColor: colors.background,
    paddingHorizontal: 8
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 4
  },
  bar: {
    borderColor: "rgb(170, 170, 170)",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 6,
    height: 28,
    padding: 5
  }
});

export default props => {
  const { placeholder, onPress } = props;
  return (
    <View style={styles.container} onPress={onPress} activeOpacity={1}>
      <View style={styles.bar}>
        <Text style={{ color: "rgb(170, 170, 170)" }}>
          {placeholder || "找到喜欢的桌游，找到喜爱的朋友"}
        </Text>
        <Text style={styles.icon}>
          <Symbol name="search" color="#aaa" size={16} />
        </Text>
      </View>
    </View>
  );
};
