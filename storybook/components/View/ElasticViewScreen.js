import React, { Component } from "react";
import { Example, ExampleDark } from "../../sampleUI/Example";
import PageTitle from "../../sampleUI/PageTitle";
import Description from "../../sampleUI/Description";
import PageContainer from "../../sampleUI/PageContainer";
import Code from "../../sampleUI/Code";
import { View, Text } from "react-native";
import ElasticView from "../../../src/components/View/ElasticView";
import Button from "../../../src/components/Buttons/Button";
import Loader from "../../../src/components/Loader";

export default class AlertScreen extends Component {
  state = { example1: 0.1, example2: 0.5 };
  render() {
    return (
      <PageContainer>
        <PageTitle title="ElasticView Component" />
        <ExampleDark
          example={
            <View>
              <Code>{"<ElasticView progress={0.1} duration={1000} />"}</Code>
              <ElasticView duration={1000} progress={this.state.example1}>
                <View
                  style={{ flex: 1, height: 200, backgroundColor: "red" }}
                />
              </ElasticView>
              <Button
                onPress={() =>
                  this.setState({ example1: this.state.example1 + 0.1 })
                }
                content="+"
              />
              <Button
                onPress={() =>
                  this.setState({ example1: this.state.example1 - 0.1 })
                }
                content="-"
              />
            </View>
          }
        />
        <ExampleDark
          example={
            <View>
              <Code>
                {
                  "<ElasticView progress={1} duration={1000} direction='vertical' />"
                }
              </Code>
              <View style={{ flex: 1, height: 200 }}>
                <ElasticView duration={1000} progress={this.state.example2} direction="vertical">
                  <View
                    style={{ flex: 1, height: 200, backgroundColor: "red" }}
                  >
                    <Loader style={{ width: 200, height: 200 }} />
                  </View>
                </ElasticView>
              </View>
              <Button
                onPress={() =>
                  this.setState({ example2: this.state.example2 + 0.1 })
                }
                content="+"
              />
              <Button
                onPress={() =>
                  this.setState({ example2: this.state.example2 - 0.1 })
                }
                content="-"
              />
            </View>
          }
        />
      </PageContainer>
    );
  }
}
