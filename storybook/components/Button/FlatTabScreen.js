import React from "react";
import { View } from "react-native";
import PageContainer from "../../sampleUI/PageContainer";
import PageTitle from "../../sampleUI/PageTitle";
import { Example } from "../../sampleUI/Example";
import Code from "../../sampleUI/Code";
import Description from "../../sampleUI/Description";
import FlatTabButton from "../../../src/components/Buttons/FlatTabButton";

export default props => (
  <PageContainer>
    <PageTitle title="Flat Tab Button Component" />
    <Description info="Themes" />
    <Example
      example={
        <View>
          <Code>
            {`<FlatTabButton title="title" button="button text" theme="blue" info="some sub info"
              src="http://svg-support.boardgamereview.cn/013-people.png" onPress={...} />`}
          </Code>
          <FlatTabButton
            title="title"
            button="button text"
            theme="blue"
            info="some sub info"
            src="http://svg-support.boardgamereview.cn/013-people.png"
          />
          <Code>{'<FlatTabButton theme="green" ... />'}</Code>
          <FlatTabButton
            title="title"
            button="button text"
            theme="green"
            info="some sub info"
            svg="innocent"
          />
          <Code>{'<FlatTabButton theme="orange" ... />'}</Code>
          <FlatTabButton
            title="title"
            button="button text"
            theme="orange"
            info="some sub info"
            svg="innocent"
          />
          <Code>{'<FlatTabButton theme="gold" ... />'}</Code>
          <FlatTabButton
            title="title"
            button="button text"
            theme="gold"
            info="some sub info"
            svg="innocent"
          />
          <Code>{'<FlatTabButton theme="disable" ... />'}</Code>
          <FlatTabButton
            title="title"
            button="button text"
            theme="disable"
            info="some sub info"
            svg="innocent"
          />
        </View>
      }
    />
  </PageContainer>
);
