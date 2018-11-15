import React, { Component } from "react";
import { Example, ExampleDark } from "../../sampleUI/Example";
import PageTitle from "../../sampleUI/PageTitle";
import Description from "../../sampleUI/Description";
import PageContainer from "../../sampleUI/PageContainer";
import Code from "../../sampleUI/Code";
import { View } from "react-native";
import Alert from "../../../src/components/Alert";
import Button from "../../../src/components/Buttons/Button";

export default class AlertScreen extends Component {
  state = {};
  render() {
    return (
      <PageContainer>
        <PageTitle title="Alert Component" />
        <Description info="Alert Component with animation" />
        <ExampleDark
          example={
            <View>
              <Code>
                {
                  '<Alert message="This is Alert Message" type="error" visible={true}/>'
                }
              </Code>
              <Alert
                message="This is Alert Message"
                type="error"
                visible={!this.state.example1}
              />
              <Code>
                {
                  '<Alert message="This is Alert Message.这是一条警告信息！" type="warning" hideAfter="1000" visible={true}/>'
                }
              </Code>
              <Alert
                message="This is Alert Message.这是一条警告信息！。"
                type="warning"
                visible={!this.state.example1}
                hideAfter={1000}
              />
              <Button
                onPress={() =>
                  this.setState({ example1: !this.state.example1 })
                }
                content="Toggle"
              />
            </View>
          }
        />
        <Example
          example={
            <View>
              <Code>
                {
                  '<Alert message="This is Alert Message" type="error" visible={true} />'
                }
              </Code>
              <Alert
                message="This is Alert Message"
                type="error"
                visible={!this.state.example2}
              />
              <Button
                onPress={() =>
                  this.setState({ example2: !this.state.example2 })
                }
                content="Toggle"
              />
            </View>
          }
        />
      </PageContainer>
    );
  }
}
