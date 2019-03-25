import React from "react";
import { AndroidBackHandler } from "react-navigation-backhandler";
export default props => (
  <AndroidBackHandler onBackPress={props.onPress}>
    {props.children}
  </AndroidBackHandler>
);
