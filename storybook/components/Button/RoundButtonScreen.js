import React from "react";
import { View } from "react-native";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Code from "../../sampleUI/Code";
import Description from "../../sampleUI/Description";
import RoundPropTheme from "./examples/RoundPropTheme";
import RoundPropSize from "./examples/RoundPropSize";

export default props => (
  <PageContainer>
    <PageTitle title="Round Button Component" />
    <Description info="Themes" />
    <Example
      example={
        <View>
          <Code>
            {"<RoundButton theme='lightBlue' icon='add' onPress={...} />"}
          </Code>
          <RoundPropTheme />
        </View>
      }
    />
    <ExampleDark
      example={
        <View>
          <Code>{"<RoundButton theme='moss' icon='bad' />"}</Code>
          <RoundPropTheme />
        </View>
      }
    />
    <Description info="Sizes" />
    <Example
      example={
        <View>
          <Code>{"<RoundButton theme='qq' size='xl' icon='qq' />"}</Code>
          <RoundPropSize />
        </View>
      }
    />
  </PageContainer>
);
