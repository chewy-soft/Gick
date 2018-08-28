import React from "react";
import MateIcon from "react-native-vector-icons/MaterialCommunityIcons";
import mapping from "./mappings";

export default props => {
  const { name } = props;
  return (
    <MateIcon name={mapping[name] || "link"} size={size || 30} color={color || "#fff"} />
  );
};
