import React from "react";
import { Image } from "react-native";
import sources from "./source";

class Svg extends React.Component {
  render() {
    const { size, svg, height, width, name } = this.props;
    const svg_name = sources[svg] || name || "monster";
    return (
      <Image
        style={{ height: height || size, width: width || size }}
        source={{ uri: `${svg_name}` }}
        resizeMode={"contain"}
      />
    );
  }
}

export default Svg;
