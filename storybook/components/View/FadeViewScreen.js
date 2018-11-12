import React, { Component } from "react";
import { ExampleDark } from "../../sampleUI/Example";
import PageTitle from "../../sampleUI/PageTitle";
import PageContainer from "../../sampleUI/PageContainer";
import Code from "../../sampleUI/Code";
import { View, Text } from "react-native";
import FadeView from "../../../src/components/View/FadeView";
import Button from "../../../src/components/Buttons/Button";

export default class Fade extends Component {
  state = { e1: true, e2: true };
  render() {
    return (
      <PageContainer>
        <PageTitle title="FadeView Component" />
        <ExampleDark
          example={
            <View>
              <Code>
                {
                  "<FadeView visible={this.state.1} fadeIn={3000} fadeOut={1000} />"
                }
              </Code>
              <FadeView
                fadeIn={3000}
                fadeOut={1000}
                visible={this.state.e1}
                style={{ flex: 1, height: 200, backgroundColor: "red" }}
              >
                <Text>This is content</Text>
              </FadeView>
              <Button
                onPress={() => this.setState({ e1: !this.state.e1 })}
                content="Toggle"
              />
            </View>
          }
        />
        <ExampleDark
          example={
            <View>
              <Code>
                {
                  "<FadeView visible={this.state.visible} fadeIn={3000} fadeOut={1000} unmount={true} />"
                }
              </Code>
              <FadeView
                unmount={true}
                fadeIn={3000}
                fadeOut={1000}
                visible={this.state.e2}
                style={{ flex: 1, height: 200, backgroundColor: "blue" }}
              >
                <Text>This is content</Text>
              </FadeView>
              <Button
                onPress={() => this.setState({ e2: !this.state.e2 })}
                content="Toggle"
              />
            </View>
          }
        />
      </PageContainer>
    );
  }
}
