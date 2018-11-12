import React from "react";
import { Text } from "react-native";
import getStyles from "./styles/MoreButton/styles";
import { hoverColor } from "./styles/MoreButton/styles.default";
import HoverView from "../View/HoverView";

export default class GalleryTitle extends React.Component {
  state = { hover: false };
  onHover = () => {
    this.setState({ hover: true });
  };
  onHovered = () => {
    this.setState({ hover: false });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.hover !== nextState.hover;
  }
  render() {
    const { onPress, theme, content } = this.props;
    const { hover } = this.state;
    const styles = getStyles(theme || "dark");
    return (
      <HoverView
        style={styles.more}
        hoverColor={hoverColor(theme || "dark")}
        onPress={onPress}
        onMouseOver={this.onHover}
        onMouseOut={this.onHovered}
      >
        <Text
          style={
            (hover && [styles.moreText, styles.textHover]) || styles.moreText
          }
        >
          {content || "查看列表"}
        </Text>
      </HoverView>
    );
  }
}
