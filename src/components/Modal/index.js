import React from "react";
import View from "../View/View";
import { StyleSheet } from "react-native";
import NativeModal from "react-native-modal";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginHorizontal: 0,
    marginVertical: 0,
    overflow: "hidden"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  close: {
    alignItems: "flex-end"
  }
});

class Modal extends React.Component {
  render() {
    return (
      <NativeModal isVisible={true}>
        <View style={styles.modal}>
          <View style={styles.content}>{this.props.children}</View>
        </View>
      </NativeModal>
    );
  }
}

export default Modal;
