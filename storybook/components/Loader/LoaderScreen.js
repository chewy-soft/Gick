import React from "react";
import { Example, ExampleDark } from "../../sampleUI/Example";
import PageTitle from "../../sampleUI/PageTitle";
import Description from "../../sampleUI/Description";
import PageContainer from "../../sampleUI/PageContainer";
import Code from "../../sampleUI/Code";
import Loader from "../../../src/components/Loader";
import { View } from "react-native";
import TypeLoader from "../../../src/components/Loader/TypeLoader";

export default props => (
  <PageContainer>
    <PageTitle title="Loader Component" />
    <Description info="Simple Input Component (DONT USE THIS COMPONENT DIRECTORY) " />
    <ExampleDark
      example={
        <View>
          <Code>{"<Loader />"}</Code>
          <Loader />
        </View>
      }
    />
    <Example
      example={
        <View>
          <Code>{"<Loader />"}</Code>
          <Loader />
        </View>
      }
    />

    <Description info="Type Loader" />
    <ExampleDark
      example={
        <View>
          <Code>{"TypeLoader />"}</Code>
          <TypeLoader />
        </View>
      }
    />
  </PageContainer>
);
