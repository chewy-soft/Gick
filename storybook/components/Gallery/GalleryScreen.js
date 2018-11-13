import React, { Component } from "react";
import { View, Text } from "react-native";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import Description from "../../sampleUI/Description";
import { ExampleDark } from "../../sampleUI/Example";
import Code from "../../sampleUI/Code";
import Gallery from "../../../src/components/Gallery";

export default class GalleryScreen extends Component {
  constructor() {
    super();
    this.onLoad = this.onLoad.bind(this);
    this.current = 0;
  }

  onLoad(page) {
    const colors = ["red", "yellow", "blue"];
    return (
      <View
        style={{
          backgroundColor: colors[(page - 1) % 3],
          width: 400,
          height: 200
        }}
      >
        <Text>{`This is page ${page}`} </Text>
      </View>
    );
  }

  render() {
    return (
      <PageContainer>
        <PageTitle title="Gallery Component" />
        <Description info="Basic Example" />
        <ExampleDark
          example={
            <View>
              <Code>{`<Gallery interval={2000} fadeIn={2000} onLoad={this.onLoad} />`}</Code>
              <Gallery interval={4000} fadeIn={2000} onLoad={this.onLoad} />
              <Code>{`<Gallery interval={1000}  fadeIn={500} onLoad={this.onLoad} />`}</Code>
              <Gallery interval={1000} fadeIn={500} onLoad={this.onLoad} />
            </View>
          }
        />
      </PageContainer>
    );
  }
}
