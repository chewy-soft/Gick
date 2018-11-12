import React, { Component } from "react";
import { Example, ExampleDark } from "../../sampleUI/Example";
import PageTitle from "../../sampleUI/PageTitle";
import Description from "../../sampleUI/Description";
import PageContainer from "../../sampleUI/PageContainer";
import Code from "../../sampleUI/Code";
import { View, Text } from "react-native";
import InfinateScrollView from "../../../src/components/View/InfinateScrollView";
import Button from "../../../src/components/Buttons/Button";

export default class InfinateScrollViewScreen extends Component {
  constructor() {
    super();
    this.state = { e1: true, e2: true };
  }
  render() {
    return (
      <PageContainer>
        <PageTitle title="InfinateScrollView Component" />
        <Example
          example={
            <View>
              <View>
                <Code>
                  {`
              <InfinateScrollView
                  data={Array(8)
                    .fill()
                    .map((_, i) => i)}
                  renderItem={i => (
                    <View>
                      <Text>{i}</Text>
                    </View>
                  )}
                  loading={false}
                  onLoad={() => alert("load data here")}
                  hasMore={true}
                  itemHeight={100}
              />
                  `}
                </Code>
              </View>
              <View style={{ height: 500 }}>
                <InfinateScrollView
                  data={Array(8)
                    .fill()
                    .map((_, i) => i)}
                  renderItem={i => (
                    <View>
                      <Text>{i}</Text>
                    </View>
                  )}
                  loading={false}
                  onLoad={() => alert("load data here")}
                  hasMore={true}
                  itemHeight={100}
                />
              </View>
            </View>
          }
        />
      </PageContainer>
    );
  }
}
