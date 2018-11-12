import React from "react";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Code from "../../sampleUI/Code";
import Description from "../../sampleUI/Description";
import * as data from "../../json/data";
import { Text } from "react-native";
import View from "../../../src/components/View/View";
import HoverView from "../../../src/components/View/HoverView";
import ScrollView from "../../../src/components/View/ScrollView";
import ExternalLinkView from "../../../src/components/View/ExternalLinkView";

let datas = [];
for (var i = 0; i < 10; i++) {
  datas.push(<Text key={i}>{data.ramData}</Text>);
}

export default props => (
  <PageContainer>
    <PageTitle title="Basic Views" />
    <Description info="Customize Default View with onPress" />
    <Example
      example={
        <View>
          <Code>{`<View onPress={()=>alert('Hello Gick')}><Text>Hello Gick</Text></View>`}</Code>
          <View onPress={() => alert("Hello Gick")}>
            <Text>Hello Gick</Text>
          </View>
        </View>
      }
    />
    <Description info="Hover View with onPress" />
    <Example
      example={
        <View>
          <Code>{`<HoverView onPress={()=>alert('Im being hovered')} hoverColor="#aaa"><Text>Hover Me !</Text></HoverView>`}</Code>
          <HoverView
            onPress={() => alert("Im being hovered")}
            hoverColor="#aaa"
          >
            <Text>Hover Me !</Text>
          </HoverView>
        </View>
      }
    />
    <Description info="Scroll View" />
    <Example
      example={
        <View>
          <Code>{`<ScrollView style={{height: 50}}>...</ScrollView>`}</Code>
          <ScrollView style={{ height: 50 }}>{datas}</ScrollView>
        </View>
      }
    />
    <Description info="Scroll View with underline" />
    <ExampleDark
      example={
        <View>
          <Code>{`<ScrollView underLine>...</ScrollView>`}</Code>
          <ScrollView style={{ height: 50 }} underLine>
            {datas}
          </ScrollView>
        </View>
      }
    />
    <Description info="URL Link" />
    <Example
      example={
        <View>
          <Code>{`<ExternalLinkView><Text>WebSite</Text></ExternalLinkView>`}</Code>
          <ExternalLinkView url="https://boardgamereview.cn/">
            <Text>WebSite</Text>
          </ExternalLinkView>
        </View>
      }
    />
  </PageContainer>
);
