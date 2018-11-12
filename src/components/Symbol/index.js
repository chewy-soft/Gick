import React from "react";
import { Text } from "react-native";
import Icon from "./parts/Icon";
import mapping from "./mappings";

export default props => (
  <Text style={{ textAlignVertical: "middle" }}>
    <Icon
      icon={(name !== undefined && mapping[props.name]) || "link"}
      {...props}
    />
  </Text>
);
