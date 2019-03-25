import colors from "../../../../../colors";
import { StyleSheet } from "react-native";
import defaultStyle from "./styles.default";

export const styles = StyleSheet.create({
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    paddingVertical: 12
  }
});
export const params = { icon: 50 };
