import React, { Component } from "react";
import { View, Text } from "react-native";
import Modal from "../../../../src/components/Modal";
import Code from "../../../sampleUI/Code";
import Button from "../../../../src/components/Buttons/Button";
import Gallery from "../../../../src/components/Gallery";

export default class Basic extends Component {
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
          backgroundColor: colors[(page-1) % 3],
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
      <View>
        <Code
        >{`<Gallery interval={2000} fadeIn={2000} onLoad={this.onLoad} />`}</Code>
        <Gallery interval={4000} fadeIn={2000} onLoad={this.onLoad} />
        <Code
        >{`<Gallery interval={1000}  fadeIn={500} onLoad={this.onLoad} />`}</Code>
        <Gallery interval={1000} fadeIn={500} onLoad={this.onLoad} />
      </View>
    );
  }
}
