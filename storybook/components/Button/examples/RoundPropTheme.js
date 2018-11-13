import React from "react";
import { View } from "react-native";
import { DividerHorizontal } from "../../../sampleUI/helps";
import RoundButton from "../../../../src/components/Buttons/RoundButton";

export default props => (
  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
    <RoundButton
      theme="qq"
      icon="qq"
      onPress={() => console.log("round button")}
    />
    <DividerHorizontal />
    <RoundButton theme="lightBlue" icon="add" />
    <DividerHorizontal />
    <RoundButton theme="darkBlue" icon="good" />
    <DividerHorizontal />
    <RoundButton theme="red" icon="report" />
    <DividerHorizontal />
    <RoundButton theme="orange" icon="marked" />
    <DividerHorizontal />
    <RoundButton theme="moss" icon="bad" />
    <DividerHorizontal />
    <RoundButton theme="black" icon="emoji" />
    <DividerHorizontal />
    <RoundButton theme="wechat" icon="wechat" />
    <DividerHorizontal />
    <RoundButton theme="weibo" icon="weibo" />
    <DividerHorizontal />
    <RoundButton theme="white" icon="edit" />
    <DividerHorizontal />
    <RoundButton theme="transparent" icon="close" />
    <DividerHorizontal />
    <RoundButton theme="disable" icon="close" />
  </View>
);
