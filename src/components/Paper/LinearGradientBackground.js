import React from "react";
import LinearGradientView from "../View/LinearGradientView";

export default props => {
  const { theme, style } = props;
  switch (theme) {
    case "blue":
      start = "#484C50";
      end = "#040B11";
      break;
    case "black":
    default:
      start = "#4d4d4d";
      end = "#000";
      break;
  }
  return (
    <LinearGradientView start={start} end={end} style={[style, { flex: 1 }]}>
      {props.children}
    </LinearGradientView>
  );
};
