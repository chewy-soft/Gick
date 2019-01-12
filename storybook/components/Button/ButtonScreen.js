import React from "react";
import { View } from "react-native";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Code from "../../sampleUI/Code";
import Description from "../../sampleUI/Description";
import PropTheme from "./examples/PropTheme";
import PropHalfTheme from "./examples/PropHalfTheme";
import PropSize from "./examples/PropSize";
import OrderButton from "../../../src/components/Buttons/OrderButton";
import Button from "../../../src/components/Buttons/Button";

export default props => (
  <PageContainer>
    <PageTitle title="Buttons" />
    <Description info="Button Colors" />
    <ExampleDark
      example={
        <View>
          <Code>
            {"<Button theme='orange' content='orange' onPress='...' />"}
          </Code>
          <PropTheme />
        </View>
      }
    />
    <Example
      example={
        <View>
          <Code>
            {"<Button theme='halfOrange' content='orange' onPress='...' />"}
          </Code>
          <PropHalfTheme />
        </View>
      }
    />
    <Description info="Button Size S" />
    <Example
      example={
        <View>
          <Code>
            {"<Button theme='darkBlue' content='...' onPress='...' />"}
          </Code>
          <PropSize />
        </View>
      }
    />
    <Description info="Button disabled,Boolean。" />
    <ExampleDark
      example={
        <View>
          <Code>{'<Button disabled content="Disabled button" />'}</Code>
          <Button disabled content="Disabled button" />
        </View>
      }
    />
    <Description info="Example Order Button" />
    <ExampleDark
      example={
        <View>
          <Code>{'<OrderButton order="unset" />'}</Code>
          <OrderButton order="unset" />
          <Code>{'<OrderButton order="up" />'}</Code>
          <OrderButton order="up" />
          <Code>{'<OrderButton order="down" />'}</Code>
          <OrderButton order="down" />
        </View>
      }
    />
  </PageContainer>
);
