import React from "react";
import { View } from "react-native";
import { DividerHorizontal } from "../../../sampleUI/helps";
import RoundButton from "../../../../src/components/Buttons/RoundButton";

export default (RoundSizeExample = () => (
  <View style={{ flexDirection: "row" }}>
    <RoundButton theme="qq" size="xl" icon="qq" />
    <DividerHorizontal />
    <RoundButton theme="qq" size="l" icon="qq" />
    <DividerHorizontal />
    <RoundButton theme="qq" size="m" icon="qq" />
    <DividerHorizontal />
    <RoundButton theme="qq" size="s" icon="qq" />
    <DividerHorizontal />
    <RoundButton theme="qq" size="xs" icon="qq" />
  </View>
));
