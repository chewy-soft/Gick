import { StyleSheet } from "react-native";
import stylesDefault from "./styles.default";

export const styles = StyleSheet.create({
  ...stylesDefault,
  arrow: {
    ...stylesDefault.arrow,
    width: 80,
    height: 30
  }
});

export const params = {
  icon: 20
};