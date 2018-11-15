import React from "react";
import Symbol from "../Symbol";
import styles from "./styles";
import FadeView from "../View/FadeView";
import { Text, StyleSheet } from "react-native";

export default props => {
  const { type, hideAfter, message, visible } = props;
  if (!visible) return null;
  const fadeOut = hideAfter || 3000;
  switch (type) {
    case "warning":
      var themes = styles.warning;
      var svg = "warning";
      break;
    case "success":
      var themes = styles.success;
      var svg = "checked";
      break;
    case "error":
    default:
      var themes = styles.error;
      var svg = "error";
      break;
  }

  return (
    <FadeView
      fadeOut={fadeOut}
      visible={visible}
      style={StyleSheet.flatten([styles.container, themes])}
      unmount={true}
    >
      <Symbol size={28} name={svg} />
      <Text style={styles.content}>{message}</Text>
    </FadeView>
  );
};
