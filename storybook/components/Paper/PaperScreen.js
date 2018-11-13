import React from "react";
import { View } from "react-native";
import Code from "../../sampleUI/Code";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import FlatTabBackground from "../../../src/components/Paper/FlatTabBackground";
import LinearGradientBackground from "../../../src/components/Paper/LinearGradientBackground";
import BasicBacground from "../../../src/components/Paper/BasicBackground";
import Image from "../../../src/components/Image/Image";

const image = (
  <Image src="http://image.boardgamereview.cn/5a6808537948e4715f79252c?imageView2/2/w/270/h/280/format/jpg/interlace/1/q/100" />
);

export default props => (
  <PageContainer>
    <PageTitle title="Paper" />
    <Description info="LinearGradient Background." />
    <Example
      example={
        <View>
          <Code>
            {`<LinearGradientBackground theme='blue'><Image src="http://image..." /></LinearGradientBackground>`}
          </Code>
          <LinearGradientBackground theme="blue">
            {image}
          </LinearGradientBackground>
          <Code>{`<LinearGradientBackground theme='black'><Image ...`}</Code>
          <LinearGradientBackground theme="black">
            {image}
          </LinearGradientBackground>
        </View>
      }
    />
    <Description info="Basic Background." />
    <Example
      example={
        <View>
          <Code>
            {`<BasicBacground theme='basic'><Image src="http://image..." /></BasicBacground>`}
          </Code>
          <BasicBacground theme="basic">{image}</BasicBacground>
          <Code>{`<BasicBacground theme='black'><Image...`}</Code>
          <BasicBacground theme="black">{image}</BasicBacground>
          <Code>{`<BasicBacground theme='blue'><Image...`}</Code>
          <BasicBacground theme="blue">{image}</BasicBacground>
        </View>
      }
    />
    <Description info="Flat Tab Background." />
    <Example
      example={
        <View>
          <Code>
            {`<FlatTabBackground><Image src="http://image..." /></FlatTabBackground>`}
          </Code>
          <FlatTabBackground>{image}</FlatTabBackground>
        </View>
      }
    />
  </PageContainer>
);
