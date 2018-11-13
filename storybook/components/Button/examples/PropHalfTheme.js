import React from "react";
import { View, Dimensions } from "react-native";
import { DividerHorizontal, DividerVertical } from "../../../sampleUI/helps";
import Button from "../../../../src/components/Buttons/Button";

const { width } = Dimensions.get("window");

export default props => (
  <View style={{ flexDirection: width > 1024 ? "row" : "column" }}>
    <Button theme="halfBlue" content="blue" icon="qq" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="halfDarkGreen" content="darkGreen" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="halfDarkBlue" content="darkBlue" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="halfRed" content="red" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="halfOrange" content="orange" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="halfMoss" content="moss" />
    <DividerHorizontal />
    <DividerVertical />
    <Button theme="halfYellow" content="yellow" />
  </View>
);
