import React from "react";
import { View } from "react-native";
import Avatar from "../../../../src/components/Avatar";
import { DividerHorizontal } from "../../../sampleUI/helps";

export default props => (
  <View style={{ flexDirection: "row" }}>
    <Avatar
      src="http://image.boardgamereview.cn/5a6807e37948e4715f123d51?imageView2/1/w/50/h/50/format/jpg/q/100"
      size="l"
      online="online"
      userBadge="reviewer"
    />
    <DividerHorizontal />
    <Avatar size="l" online="online" userBadge="curator" />
    <DividerHorizontal />
    <Avatar svg="apologize" size="l" />
    <DividerHorizontal />
  </View>
);
