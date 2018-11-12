import React from "react";
import { TouchableOpacity } from "react-native";
import Symbol from "../../Symbol";
import { styles, params } from "./styles/Arrow/styles";

class Arrow extends React.Component {
  state = { highLight: false };
  highLight = () => {
    this.setState({ highLight: !this.state.highLight });
  };
  render() {
    const { onPress, side } = this.props;
    const { highLight } = this.state;
    const arrow = highLight && styles.highLight;

    return (
      <TouchableOpacity
        style={[styles.arrow, arrow]}
        onMouseOver={() => this.highLight()}
        onMouseOut={() => this.highLight()}
        onPress={onPress}
      >
        <Symbol
          name={side == "left" ? "arrowLeft" : "arrowRight"}
          size={params.icon}
        />
      </TouchableOpacity>
    );
  }
}

export default Arrow;
