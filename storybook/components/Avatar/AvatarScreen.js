import React from "react";
import { View } from "react-native";
import Code from "../../sampleUI/Code";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import PropSize from "./expamles/PropSize";
import PropOnline from "./expamles/PropOnline";

export default props => (
  <PageContainer>
    <PageTitle title="Avatar Component" />
    <Description info="Sizes" />
    <ExampleDark
      example={
        <View>
          <Code>{"<Avatar src='...' size='xs'/>"}</Code>
          <PropSize />
        </View>
      }
    />
    <Description info="Online State" />
    <Example
      example={
        <View>
          <Code>
            {"<Avatar src='...' size='l' online='online' theme='light'/>"}
          </Code>
          <PropOnline theme="light" />
        </View>
      }
    />
    <ExampleDark example={<PropOnline theme="dark" />} />
  </PageContainer>
);
