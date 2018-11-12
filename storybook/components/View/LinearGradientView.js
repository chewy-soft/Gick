import React from "react";
import { View, Text } from "react-native";
import { ExampleDark } from "../../sampleUI/Example";
import PageTitle from "../../sampleUI/PageTitle";
import Description from "../../sampleUI/Description";
import PageContainer from "../../sampleUI/PageContainer";
import Code from "../../sampleUI/Code";
import LinearGradientView from "../../../src/components/View/LinearGradientView";

export default props => (
  <PageContainer>
    <PageTitle title="ElasticView" />
    <ExampleDark
      example={
        <View>
          <Code>
            {
              "<LinearGradientView style={{height: 400}} start='#4d4d4d' end='#000' />"
            }
          </Code>
          <LinearGradientView
            style={{ height: 400 }}
            start="#4d4d4d"
            end="#000"
          />
          <Code>
            {
              "<LinearGradientView style={{height: 400}} start='#445060' end='#2A2E34' theme='topToBottom' />"
            }
          </Code>
          <LinearGradientView
            style={{ height: 400 }}
            start="#445060"
            end="#2A2E34"
            theme="topToBottom"
          />
        </View>
      }
    />
  </PageContainer>
);
