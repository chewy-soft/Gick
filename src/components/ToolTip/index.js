import React from "react";
import { Text } from "react-native";
import FadeView from "../View/FadeView";
import styles from "./styles/styles";

export default props => {
  const { content, show, top, right, bottom, left } = props;
  return (
    <FadeView
      visible={show}
      fadeIn={200}
      style={[
        styles.container,
        { left: left, right: right, top: top, bottom: bottom }
      ]}
    >
      <Text style={styles.content}>{content}</Text>
    </FadeView>
  );
};
