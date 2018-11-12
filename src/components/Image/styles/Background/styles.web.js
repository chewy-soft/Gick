import colors from "../../../../colors";
import { StyleSheet } from "react-native";
import defaultStyles from "./styles.default";

export default StyleSheet.create({
  ...defaultStyles,
  backgroundBlur: {
    width: "110%",
    height: "110%",
    top: "-5%",
    left: "-5%",
    filter: "blur(20px)"
  }
});
