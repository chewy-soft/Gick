import React from "react";
import { View } from "react-native";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { ExampleDark } from "../../sampleUI/Example";
import Code from "../../sampleUI/Code";
import Description from "../../sampleUI/Description";
import FlatButton from "../../../src/components/Buttons/FlatButton";

export default props => (
  <PageContainer>
    <PageTitle title="Flat Button Component" />
    <Description info="Themes" />
    <ExampleDark
      example={
        <View>
          <Code>
            {
              '<FlatButton icon="home" content="首页" theme="blue" size="s" onPress={onPress} />'
            }
          </Code>
          <FlatButton icon="home" content="首页" theme="blue" size="s" />
          <Code>
            {
              '<FlatButton icon="home" content="首页" theme="lightBlue" size="s" />'
            }
          </Code>
          <FlatButton icon="home" content="首页" theme="lightBlue" size="s" />
          <Code>
            {
              '<FlatButton icon="arrowLeft" content="返回" theme="lightGreen" size="s" />'
            }
          </Code>
          <FlatButton
            icon="arrowLeft"
            content="返回"
            theme="lightGreen"
            size="s"
          />
          <Code>
            {
              '<FlatButton icon="arrowLeft" content="返回" theme="green" size="s" />'
            }
          </Code>
          <FlatButton icon="arrowLeft" content="返回" theme="green" size="s" />
          <Code>
            {
              '<FlatButton icon="arrowLeft" content="返回" theme="orange" size="s" />'
            }
          </Code>
          <FlatButton icon="arrowLeft" content="返回" theme="orange" size="s" />
          <Code>
            {
              '<FlatButton icon="arrowLeft" content="返回" theme="gold" size="s" />'
            }
          </Code>
          <FlatButton icon="arrowLeft" content="返回" theme="gold" size="s" />
        </View>
      }
    />
    <Description info="Sizes" />
    <ExampleDark
      example={
        <View>
          <Code>
            {'<FlatButton icon="home" content="首页" theme="blue" size="xs" />'}
          </Code>
          <FlatButton icon="home" content="首页" theme="blue" size="xs" />
          <Code>
            {
              '<FlatButton icon="arrowLeft" content="返回" theme="blue" size="s" />'
            }
          </Code>
          <FlatButton icon="arrowLeft" content="返回" theme="blue" size="s" />
          <Code>
            {
              '<FlatButton icon="arrowLeft" content="返回" theme="blue" size="l" />'
            }
          </Code>
          <FlatButton icon="arrowLeft" content="返回" theme="blue" size="l" />
          <Code>
            {
              '<FlatButton icon="arrowLeft" content="返回" theme="blue" size="xl" />'
            }
          </Code>
          <FlatButton icon="arrowLeft" content="返回" theme="blue" size="xl" />
        </View>
      }
    />
    <Description info="Disable" />
    <ExampleDark
      example={
        <View>
          <Code>
            {
              '<FlatButton icon="close" content="I am not readay !" theme="disable" size="s" />'
            }
          </Code>
          <FlatButton
            icon="close"
            content="I am not readay !"
            theme="disable"
            size="s"
          />
        </View>
      }
    />
    <Description info="Shape Square" />
    <ExampleDark
      example={
        <View>
          <Code>{'<FlatButton icon="home" shape="square" size="s" />'}</Code>
          <FlatButton icon="home" shape="square" size="s" />
        </View>
      }
    />
  </PageContainer>
);
