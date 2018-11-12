import React from "react";
import { View } from "react-native";
import Button from "../../../../src/components/Buttons/Button";
import { DividerHorizontal } from "../../../sampleUI/helps";

export default (ButtonIconExample = () => (
  <View style={{ flexDirection: "row" }}>
    <Button icon="good" size="s" theme="darkBlue" content="好评" />
    <DividerHorizontal />
    <Button icon="bad" size="s" theme="darkBlue" content="差评" />
  </View>
));
