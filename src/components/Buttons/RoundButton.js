import React from "react";
import { Text } from "react-native";
import { getParams, getStyles, hoverColor } from "./styles/RoundButton/styles";
import HoverView from "../View/HoverView";
import Symbol from "../Symbol";

class RoundButton extends React.Component {
  state = { hover: false };
  highlight = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { icon, size, theme, onPress, content, opacity } = this.props;
    const { hover } = this.state;
    const params = getParams(theme || "blue", size || "m");
    const styles = getStyles(theme || "blue", size || "m");

    const css_color = hover ? params.hover : params.color;
    return (
      <HoverView
        onPress={onPress}
        style={styles.button}
        hoverColor={hoverColor(theme || "blue")}
        onMouseOver={this.highlight}
        onMouseOut={this.highlight}
        activeOpacity={opacity || 0.2}
      >
        {icon && <Symbol name={icon} color={css_color} size={params.icon} />}
        {content && <Text style={styles.content}>{content}</Text>}
      </HoverView>
    );
  }
}
export default RoundButton;
