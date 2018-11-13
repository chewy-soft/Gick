import React from "react";
import { View } from "react-native";
import Avatar from "../../../../src/components/Avatar";
import { DividerHorizontal } from "../../../sampleUI/helps";

export default props => (
  <View style={{ flexDirection: "row" }}>
    <Avatar
      src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157?imageView2/1/w/50/h/50/format/jpg/q/100"
      size="l"
      theme={props.theme}
      online="online"
    />
    <DividerHorizontal />
    <Avatar
      size="l"
      theme={props.theme}
      src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157?imageView2/1/w/50/h/50/format/jpg/q/100"
      online="offline"
    />
    <DividerHorizontal />
    <Avatar
      size="l"
      src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157?imageView2/1/w/50/h/50/format/jpg/q/100"
      online="unknown"
    />
  </View>
);
