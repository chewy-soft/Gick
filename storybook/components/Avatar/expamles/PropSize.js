import React from "react";
import { View } from "react-native";
import Avatar from "../../../../src/components/Avatar";
import { DividerHorizontal } from "../../../sampleUI/helps";

export default props => (
  <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
    <Avatar
      src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157?imageView2/1/w/50/h/50/format/jpg/q/100"
      size="xs"
    />
    <DividerHorizontal />
    <Avatar
      size="s"
      src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157?imageView2/1/w/50/h/50/format/jpg/q/100"
    />
    <DividerHorizontal />
    <Avatar
      size="m"
      src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157?imageView2/1/w/50/h/50/format/jpg/q/100"
    />
    <DividerHorizontal />
    <Avatar
      size="l"
      src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157?imageView2/1/w/50/h/50/format/jpg/q/100"
    />
    <DividerHorizontal />
    <Avatar
      size="xl"
      src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157?imageView2/1/w/50/h/50/format/jpg/q/100"
    />
    <DividerHorizontal />
  </View>
);
