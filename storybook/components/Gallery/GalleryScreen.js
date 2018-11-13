import React, { Component } from "react";
import { View } from "react-native";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import Description from "../../sampleUI/Description";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Basic from "./examples/Basic";

export default props => (
  <PageContainer>
    <PageTitle title="Gallery Component" />
    <Description info="Basic Example" />
    <ExampleDark example={<Basic />} />
  </PageContainer>
);
