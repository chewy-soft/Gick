import React from "react";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
  state = {
    color: this.props.color || {
      r: "43",
      g: "43",
      b: "43",
      a: "43"
    }
  };
  onChange = color => {
    this.props.onChange && this.props.onChange(color.rgb);
    this.setState({ color: color.rgb });
  };
  render() {
    return <SketchPicker {...this.props} color={this.state.color} onChange={this.onChange} />;
  }
}
export default ColorPicker;
