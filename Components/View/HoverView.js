import React from "react";
import View from "./View";

class HoverView extends React.Component {
  state = { hover: false };
  onHover = hover => {
    this.props.onMouseOver && this.props.onMouseOver(hover);
    this.setState({ hover: true });
  };
  outHover = hover => {
    this.props.onMouseOut && this.props.onMouseOut(hover);
    this.setState({ hover: false });
  };
  render() {
    const { style, hoverColor } = this.props;
    const { hover } = this.state;
    return (
      <View
        {...this.props}
        style={[
          style,
          hover && { backgroundColor: hoverColor || "rgba(0,0,0,.2)" }
        ]}
        onMouseOver={this.onHover}
        onMouseOut={this.outHover}
      >
        {this.props.children}
      </View>
    );
  }
}
export default HoverView;
