import React from "react";
import { View } from "react-native";
import Code from "../../sampleUI/Code";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import Divider from "../../../src/components/Divider";

export default props => (
  <PageContainer>
    <PageTitle title="Divider" />
    <Description info="Types" />
    <ExampleDark
      example={
        <View>
          <Code>{'<Divider type="new" text="新しいメッセージ" />'}</Code>
          <Divider type="new" text="新しいメッセージ" />
        </View>
      }
    />
    <ExampleDark
      example={
        <View>
          <Code>{'<Divider text="2018.04.30" type="dark" />'}</Code>
          <Divider text="2018.04.30" />
        </View>
      }
    />
    <Example
      example={
        <View>
          <Code>{'<Divider text="2018.04.30" type="light"/>'}</Code>
          <Divider text="2018.04.30" type="light" />
        </View>
      }
    />
  </PageContainer>
);
