import React from "react";
import View from "../View/View";
import styles from "./styles/ColorPicker/styles";

class ColorPickerButton extends React.Component {
  render() {
    const { onPress } = this.props;
    const color = this.props.color || {};
    const r = color.r || 0;
    const g = color.g || 0;
    const b = color.b || 0;
    const a = color.a || 1;
    return (
      <View style={styles.button}>
        <View
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`
          }}
        />
      </View>
    );
  }
}
export default ColorPickerButton;
