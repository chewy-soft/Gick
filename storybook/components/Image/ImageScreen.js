import React from "react";
import { View } from "react-native";
import Code from "../../sampleUI/Code";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import ImageBackground from "../../../src/components/Image/ImageBackground";
import Image from "../../../src/components/Image/Image";
import ImageZoom from "../../../src/components/Image/ImageZoom";
import Button from "../../../src/components/Buttons/Button";

export default class ImageScreen extends React.Component {
  state = { image: false };
  zoomImage = () => {
    this.setState({ image: !this.state.image });
  };
  render() {
    return (
      <PageContainer>
        <PageTitle title="Images" />
        <Description info="Image Progress (Loader)" />
        <Example
          example={
            <View>
              <Code>{'<Image src="..." />'}</Code>
              <Image
                size="auto"
                src="http://image.boardgamereview.cn/5a6808537948e4715f79252c?imageMogr2/auto-orient/thumbnail/400x300/interlace/1/blur/1x0/quality/100|imageslim"
                style={{ maxWidth: 400, maxHeight: 300 }}
              />
            </View>
          }
        />
        <Description info="Image Zoom Modal" />
        <Example
          example={
            <View>
              <Code>{'<ImageZoom src="http://image...." />'}</Code>
              <Button onPress={this.zoomImage} content="open image" />
              {this.state.image && (
                <ImageZoom
                  src="http://image.boardgamereview.cn/5a6808537948e4715f79252c"
                  onClose={this.zoomImage}
                />
              )}
            </View>
          }
        />
        <Description info="Background Image" />
        <Example
          example={
            <View>
              <Code>
                {'<ImageBackground style={{ height: 100 }} src="..." />'}
              </Code>
              <ImageBackground
                style={{ height: 100 }}
                src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157"
              />
            </View>
          }
        />
        <Description info="Background undefined test" />
        <Example
          example={
            <View>
              <Code>{"<ImageBackground style={{ height: 300 }} />"}</Code>
              <ImageBackground style={{ height: 300 }} />
            </View>
          }
        />
        <Description info="Background blur test" />
        <Example
          example={
            <View>
              <Code>
                {
                  '<ImageBackground blur={10} style={{ height: 100 }} src="..." />'
                }
              </Code>
              <ImageBackground
                blur={10}
                style={{ height: 100 }}
                src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157"
              />
            </View>
          }
        />
        <Description info="Image undefined test" />
        <Example
          example={
            <View>
              <Code>{"<Image />"}</Code>
              <Image />
              <Code>{'<Image src="..." />'}</Code>
              <Image src="http://image.boardgamereview.cn/5a6807b87948e4715f52f157" />
            </View>
          }
        />
        <Description info="Image Unit." />
        <Example
          example={
            <View>
              <Code>
                {`<ImageBackground blur={6} src="http://image...">
       <Image src="http://image..." />
    </ImageBackground>`}
              </Code>
              <ImageBackground
                blur={6}
                src="http://image.boardgamereview.cn/5a6808537948e4715f79252c?imageView2/2/w/270/h/280/format/jpg/interlace/1/q/100"
              >
                <Image src="http://image.boardgamereview.cn/5a6808537948e4715f79252c?imageView2/2/w/270/h/280/format/jpg/interlace/1/q/100" />
              </ImageBackground>
            </View>
          }
        />
      </PageContainer>
    );
  }
}
