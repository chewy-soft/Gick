import React from "react";
import { View, Text } from "react-native";
import Code from "../../sampleUI/Code";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import Card from "../../../src/components/Card/Card";
import HorizontalCard from "../../../src/components/Card/HorizontalCard";
import colors from "../../../src/colors";

const menus = [];
menus.push(
  { key: "good", icon: "good", color: colors.darkGreen, label: "cool" },
  { key: "delete", icon: "delete", color: colors.hoverOrange, label: "danger" }
);
export default props => (
  <PageContainer>
    <PageTitle title="Cards" />
    <Description info="Gallery Card" />
    <Example
      example={
        <View>
          <Code>{"<Card size='m' />"}</Code>
          <Card size="m" />
        </View>
      }
    />
    <Description info="Gallery Card Usage" />
    <Example
      example={
        <View>
          <Code>
            {
              "<Card src='...' size='l' title='some title text' src='...' onPress={...} component={any component View} />"
            }
          </Code>
          <Card
            size="l"
            title="some title text"
            src="http://image.boardgamereview.cn/000000000000000000000000"
            onPress={() => alert("coooool!")}
            component={
              <View style={{ backgroundColor: colors.basic }}>
                <View style={{ height: 50 }}>
                  <Text style={{ color: colors.loader, padding: 6 }}>
                    description text description text description text
                    description text
                  </Text>
                </View>
                <Text style={{ color: "#fff", padding: 6 }}>
                  some other sub component here
                </Text>
              </View>
            }
          />
        </View>
      }
    />
    <Description info="List Card" />
    <ExampleDark
      example={
        <View>
          <Code>
            {
              "<HorizontalCard  src='image...' title='some text' subTitle='Hello Gick' component={<Text>...</Text>}/>"
            }
          </Code>
          <HorizontalCard
            src="http://image.boardgamereview.cn/000000000000000000000000"
            title="image size auto"
            subTitle="Hello Gick"
            component={
              <Text style={{ color: "#fff" }}>I don't have onPress !</Text>
            }
          />
        </View>
      }
    />
    <ExampleDark
      example={
        <View>
          <Code>{"<HorizontalCard onPress={...} ... />"}</Code>
          <HorizontalCard
            src="http://image.boardgamereview.cn/000000000000000000000000"
            title="image size auto"
            subTitle="Hello Gick"
            onPress={() => alert("hello there")}
            component={
              <Text style={{ color: "#fff" }}>I got some onPress here</Text>
            }
          />
        </View>
      }
    />
    <ExampleDark
      example={
        <View>
          <Code>{"<HorizontalCard back={image src} ... />"}</Code>
          <HorizontalCard
            back="http://image.boardgamereview.cn/000000000000000000000000"
            title="image background"
            subTitle="Hello Gick"
            onPress={() => alert("hello there")}
          />
        </View>
      }
    />
    <ExampleDark
      example={
        <View>
          <Code>{"<HorizontalCard menus={menu json} ... />"}</Code>
          <HorizontalCard
            src="http://image.boardgamereview.cn/000000000000000000000000"
            title="I have a menu to do someting for me"
            subTitle="that's cool !"
            menus={menus}
          />
        </View>
      }
    />
  </PageContainer>
);
