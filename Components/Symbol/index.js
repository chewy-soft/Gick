import React from "react";
import { Text } from "react-native";
import Svg from "./parts/Svg";
import Icon from "./parts/Icon";
import mapping from "./mappings";

export default props => {
  const { name } = props;
  if (mapping[name]) {
    return (
      <Text style={{ textAlignVertical: "middle" }}>
        <Icon
          icon={(name !== undefined && mapping[name]) || "link"}
          {...props}
        />
      </Text>
    );
  }

  return (
    <Text style={{ textAlignVertical: "middle" }}>
      <Svg svg={(name !== undefined && name) || "monster"} {...props} />
    </Text>
  );
};
