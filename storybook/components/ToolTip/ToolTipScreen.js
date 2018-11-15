import React, { Component } from "react";
import { Example } from "../../sampleUI/Example";
import PageTitle from "../../sampleUI/PageTitle";
import PageContainer from "../../sampleUI/PageContainer";
import Code from "../../sampleUI/Code";
import { View } from "react-native";
import Button from "../../../src/components/Buttons/Button";
import ToolTip from "../../../src/components/ToolTip";

export default class AlertScreen extends Component {
  state = {};
  render() {
    const datas = [];
    datas.push(
      {
        key: 1,
        state: this.state.example1,
        top: -28,
        content: "Tool Tip Message on Top",
        onPress: () => this.setState({ example1: !this.state.example1 })
      },
      {
        key: 2,
        state: this.state.example2,
        bottom: -28,
        content: "Tool Tip Message on Bottom",
        onPress: () => this.setState({ example2: !this.state.example2 })
      },
      {
        key: 3,
        state: this.state.example3,
        left: -190,
        content: "Tool Tip Message on Left",
        onPress: () => this.setState({ example3: !this.state.example3 })
      },
      {
        key: 4,
        state: this.state.example4,
        right: -194,
        content: "Tool Tip Message on Right",
        onPress: () => this.setState({ example4: !this.state.example4 })
      }
    );
    return (
      <PageContainer>
        <PageTitle title="Tool Tip Component" />
        <Code>
          {
            '<ToolTip top={number} right={number} bottom={number} left={number} content="Tool Tip Message !" show={this.state.tip}/>'
          }
        </Code>
        <Example
          example={_.map(datas, data => (
            <View style={{ margin: "auto", marginVertical: 40 }} key={data.key}>
              {data.state && (
                <ToolTip
                  top={data.top}
                  bottom={data.bottom}
                  left={data.left}
                  right={data.right}
                  content={data.content}
                  show={data.state}
                />
              )}
              <Button onPress={data.onPress} content={data.content} />
            </View>
          ))}
        />
      </PageContainer>
    );
  }
}
