import React from "react";
import Button from "./Button";

export default props => {
  const { order, defaultValue } = props;
  if (order == "up")
    return (
      <Button
        size="s"
        theme="orange"
        content="升序"
        icon="sortUp"
        onPress={props.onPress}
      />
    );
  if (order == "down")
    return (
      <Button
        size="s"
        theme="darkGreen"
        content="降序"
        icon="sortDown"
        onPress={props.onPress}
      />
    );
  if (order == "unset")
    return (
      <Button
        size="s"
        theme="darkBlue"
        content={defaultValue || "综合排序"}
        icon="sort"
        onPress={props.onPress}
      />
    );
};
