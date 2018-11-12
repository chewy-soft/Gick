import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import PageContainer from "../sampleUI/PageContainer";
import ExternalLinkView from "../../src/components/View/ExternalLinkView";
import Image from "../../src/components/Image/Image";
import colors from "../../src/colors";

const styles = {
  head: { fontSize: 34, fontWeight: "bold", marginBottom: 32 },
  title: { fontSize: 18, marginBottom: 12 },
  text: { fontSize: 16 },
  linkContent: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginRight: "auto"
  },
  link: {
    fontSize: 20,
    paddingRight: 18,
    color: colors.lightBlue,
    fontStyle: "italic",
    textDecorationLine: "underline"
  },
  qr: { marginTop: 32, marginRight: "auto" }
};

const Welcome = props => (
  <PageContainer>
    <Text style={styles.head}>Welcome to Gick UI</Text>
    <Text style={styles.title}>
      This is a Storybook for Board Game App Gick Components
    </Text>
    <View style={styles.linkContent}>
      <ExternalLinkView url="https://boardgamereview.cn/">
        <Text style={styles.link}>WebSite</Text>
      </ExternalLinkView>
      <ExternalLinkView url="http://chewy-soft.com/">
        <Text style={styles.link}>Componey</Text>
      </ExternalLinkView>
      <ExternalLinkView url="https://github.com/chewy-soft/Gick">
        <Text style={styles.link}>GitHub</Text>
      </ExternalLinkView>
      <ExternalLinkView url="http://www.chewy-soft.cn/category/gick-app/">
        <Text style={styles.link}>Blog</Text>
      </ExternalLinkView>
    </View>
    <View style={styles.qr}>
      <Image src="http://assets.boardgamereview.cn/qrcode_for_gh_98c6978f0ebc_258.jpg" />
    </View>
  </PageContainer>
);

export default storiesOf("Welcome", module).add("Hello Gick", () => (
  <Welcome />
));
