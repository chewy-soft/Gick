import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  pageButton: {
    width: 12,
    height: 10,
    backgroundColor: "rgba(255,255,255,.2)",
    borderRadius: 3,
    marginRight: 6
  },
  highLight: { backgroundColor: "rgba(255,255,255,.4)" },
  active: {
    width: 12,
    height: 10,
    backgroundColor: "rgba(255,255,255,.6)",
    borderRadius: 4,
    marginRight: 6
  }
});

class PageButton extends React.Component {
  state = { highLight: false };
  highLight = () => {
    this.setState({ highLight: !this.state.highLight });
  };
  render() {
    const { onPress, active } = this.props;
    const { highLight } = this.state;
    const onMouse = highLight && styles.highLight;
    const button = (active && styles.active) || styles.pageButton;

    return (
      <TouchableOpacity
        style={[button, onMouse]}
        onMouseOver={() => this.highLight()}
        onMouseOut={() => this.highLight()}
        onPress={onPress}
      />
    );
  }
}

export default PageButton;
