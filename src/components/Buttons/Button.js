import React from "react";
import { Text } from "react-native";
import Symbol from "../Symbol";
import View from "../View/View";
import { getStyles, getParams } from "./styles/Button/styles";
import { getColors } from "./styles/Button/styles.default";
import HoverView from "../View/HoverView";

export default props => {
  const {
    theme,
    onPress,
    content,
    disabled,
    icon,
    size,
    iconColor,
    style
  } = props;
  const defaultTheme = disabled ? "disabledTheme" : "blue";
  const styles = getStyles(theme || defaultTheme, size || "m");
  const params = getParams(size || "m");
  const colors = getColors(theme || defaultTheme);

  return (
    <HoverView
      onPress={onPress}
      disabled={disabled}
      style={[styles.content, style]}
      hoverColor={colors}
    >
      {icon && (
        <View style={styles.icon}>
          <Symbol
            name={icon}
            color={iconColor || "#fff"}
            size={params.iconSize}
          />
        </View>
      )}
      <Text style={styles.text}>{content}</Text>
    </HoverView>
  );
};
