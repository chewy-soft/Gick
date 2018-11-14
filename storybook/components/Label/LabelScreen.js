import React from "react";
import { View } from "react-native";
import Code from "../../sampleUI/Code";
import PageContainer from "../../sampleUI/PageContainer";
import { DividerHorizontal } from "../../sampleUI/helps";
import PageTitle from "../../sampleUI/PageTitle";
import { Example } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import Label from "../../../src/components/Label";

export default props => (
  <PageContainer>
    <PageTitle title="Label" />
    <Description info="Sizes" />
    <Example
      example={
        <View>
          <Code>{'<Label content="weight" />'}</Code>
          <View style={{ flexDirection: "row", marginRight: "auto" }}>
            <Label content="weight" size="m" />
            <DividerHorizontal />
            <Label content="weight" size="s" />
          </View>
        </View>
      }
    />
    <Description info="Themes" />
    <Example
      example={
        <View>
          <Code>{'<Label content="weight" theme="darkBlue" />'}</Code>
          <View style={{ flexDirection: "row", marginRight: "auto" }}>
            <Label content="weight" theme="darkBlue" />
            <DividerHorizontal />
            <Label content="weight" theme="orange" />
            <DividerHorizontal />
            <Label content="weight" theme="black" />
          </View>
        </View>
      }
    />
  </PageContainer>
);
