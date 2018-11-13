import React from "react";
import View from "../View/View";
import colors from "../../colors";

export default props => {
  const { theme } = props;
  switch (theme) {
    case "blue":
      color = "#2f3136";
      break;
    case "black":
      color = colors.basic;
      break;
    case "basic":
    default:
      color = colors.background;
      break;
  }
  return (
    <View style={[{ flex: 1, backgroundColor: color }, props.style]}>
      {props.children}
    </View>
  );
};
