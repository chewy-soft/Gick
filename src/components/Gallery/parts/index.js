import React from "react";
import Symbol from "../../Symbol";
import { styles, params } from "./styles/styles";
import HoverView from "../../View/HoverView";

export const Arrow = props => {
  const { onPress, side } = props;
  return (
    <HoverView
      style={styles.arrow}
      hoverColor="rgba(255,255,255,.4)"
      onPress={onPress}
    >
      <Symbol
        name={side == "left" ? "arrowLeft" : "arrowRight"}
        size={params.iconSize}
      />
    </HoverView>
  );
};

export const PageButton = props => {
  const { onPress, active } = props;
  const button =
    (active && [styles.pageButton, styles.active]) || styles.pageButton;

  return (
    <HoverView
      style={button}
      hoverColor="rgba(255,255,255,.4)"
      onPress={onPress}
    />
  );
};
