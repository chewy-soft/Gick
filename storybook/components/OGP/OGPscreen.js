import React from "react";
import { View, Text } from "react-native";
import Code from "../../sampleUI/Code";
import PageTitle from "../../sampleUI/PageTitle";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import PageContainer from "../../sampleUI/PageContainer";
import OGP from "../../../src/components/OGP/index";

export default props => (
  <PageContainer>
    <PageTitle title="OGP" />
    <Description info="External Link" />
    <Code>{`<OGP type='external'
      og={{
        site_name: 'Yahoo!',
        url: 'https://news.yahoo.co.jp/',
        image: 'https://s.yimg.jp/images/top/ogp/fb_y_1500px.png',
        title: 'Yahoo! JAPAN',
        description: '日本最大級のポータルサイト。
        検索、オークション、ニュース、天気、スポーツ、メール、ショッピングなど多数のサービスを展開。
        あなたの生活をより豊かにする「課題解決エンジン」を目指していきます。'
       }}/>`}</Code>
    <ExampleDark
      example={
        <View style={{ backgroundColor: "#404144", padding: 8 }}>
          <OGP
            type="external"
            og={{
              site_name: "Yahoo!",
              url: "https://news.yahoo.co.jp/",
              image: "https://s.yimg.jp/images/top/ogp/fb_y_1500px.png",
              title: "Yahoo! JAPAN",
              description:
                "日本最大級のポータルサイト。検索、オークション、ニュース、天気、スポーツ、メール、ショッピングなど多数のサービスを展開。あなたの生活をより豊かにする「課題解決エンジン」を目指していきます。"
            }}
          />
        </View>
      }
    />
  </PageContainer>
);
