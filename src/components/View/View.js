import React from "react";
import { View, Platform, TouchableOpacity } from "react-native";

export default props => {
  const {
    onMouseOut,
    onMouseOver,
    activeOpacity,
    disabled,
    style,
    onPress
  } = props;
  if (onPress) {
    return (
      (Platform.OS == "web" && (
        <TouchableOpacity
          onPress={onPress}
          style={style}
          disabled={disabled}
          activeOpacity={activeOpacity}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          {props.children}
        </TouchableOpacity>
      )) || (
        <TouchableOpacity
          onPress={onPress}
          style={style}
          disabled={disabled}
          activeOpacity={activeOpacity}
        >
          {props.children}
        </TouchableOpacity>
      )
    );
  }
  return <View {...props}>{props.children}</View>;
};
