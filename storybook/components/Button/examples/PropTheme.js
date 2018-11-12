import React from "react";
import { View, Dimensions } from "react-native";
import { DividerHorizontal, DividerVertical } from "../../../sampleUI/helps";
import Button from "../../../../src/components/Buttons/Button";

const { width } = Dimensions.get("window");

export default ButtonThemeExample = () => (
  <View style={{ flexDirection: width > 1024 ? "row" : "column" }}>
    <Button
      theme="blue"
      content="blue"
      icon="qq"
      onPress={() => console.log("blue")}
    />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="darkGreen" content="darkGreen" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="darkBlue" content="darkBlue" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="red" content="red" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="orange" content="orange" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="moss" content="moss" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="yellow" content="yellow" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="transparent" content="transparent" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="lightGray" content="lightGray" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="noStyle" content="noStyle" />
  </View>
);
