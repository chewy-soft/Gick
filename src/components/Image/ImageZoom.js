import React from "react";
import { StyleSheet } from "react-native";
import View from "../View/View";
import Image from "./Image";
import RoundButton from "../Buttons/RoundButton";

const styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(0,0,0,.4)",
    flex: 1,
    minWidth: "100%",
    minHeight: "100%",
    padding: 12
  },
  image: { maxWidth: "100%", maxHeight: "100%", margin: "auto" },
  close: { marginLeft: "auto" }
});

export default props => {
  const { src, onClose } = props;
  return (
    <View style={styles.content}>
      <View style={styles.close}>
        <RoundButton theme="black" icon="close" onPress={onClose} />
      </View>
      <Image size="auto" src={src} style={styles.image} />
    </View>
  );
};
