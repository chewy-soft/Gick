import React from "react";
import PageTitle from "../../sampleUI/PageTitle";
import { Example, ExampleDark } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import PageContainer from "../../sampleUI/PageContainer";
import Input from "../../../src/components/TextField/Input";
import SimpleInput from "../../../src/components/TextField/parts/SimpleInput";
import Code from "../../sampleUI/Code";
import { View } from "react-native";

export default props => (
  <PageContainer>
    <PageTitle title="TextField Component" />
    <Description info="Simple Input Component (DONT USE THIS COMPONENT DIRECTORY) " />
    <ExampleDark
      example={
        <View>
          <Code>{"<SimpleInput theme='chat' />"}</Code>
          <SimpleInput theme="chat" />
          <Code>{"<SimpleInput theme='light' />"}</Code>
          <SimpleInput theme="light" />
          <Code>{"<SimpleInput />"}</Code>
          <SimpleInput />
          <Code>{"<SimpleInput type='integer' />"}</Code>
          <SimpleInput type="integer" />
          <Code>{"<SimpleInput type='float' />"}</Code>
          <SimpleInput type="float" />
          <Code>{"<SimpleInput type='number' />"}</Code>
          <SimpleInput type="number" />
          <Code>
            {"<SimpleInput type='number' placeholder='please input' />"}
          </Code>
          <SimpleInput type="number" placeholder="please input" />
          <Code>{"<SimpleInput type='float' defaultValue={123.456} />"}</Code>
          <SimpleInput type="float" defaultValue={123.456} />
        </View>
      }
    />

    <Description info="Input Component (DONT USE THIS COMPONENT DIRECTORY) " />
    <ExampleDark
      example={
        <View>
          <Code>{"<Input label='test label' />"}</Code>
          <Input label="test label" />
        </View>
      }
    />
    <Example
      example={
        <View>
          <Code>{"<LabelInput theme='light' label='test label' />"}</Code>
          <Input theme="light" label="test label" />
        </View>
      }
    />

    <Description info="Input Component Minmax" />
    <Example
      example={
        <View>
          <Code>{"<Input theme='light' label='test label' />"}</Code>
          <Input theme="light" label="test label" />
        </View>
      }
    />
    <Example
      example={
        <View>
          <Code>
            {"<Input type='minmax' theme='light' label='test label' />"}
          </Code>
          <Input type="minmax" theme="light" label="test label" />
        </View>
      }
    />

    <ExampleDark
      example={
        <View>
          <Code>
            {"<Input type='minmax' theme='dark' label='test label' />"}
          </Code>
          <Input type="minmax" theme="dark" label="test label" />
        </View>
      }
    />

    <Description info="AreaInput Component" />
    <Example
      example={
        <View>
          <Code>
            {
              "<Input type='text' numberOfLines={10} theme='light' label='test label' />"
            }
          </Code>
          <Input
            type="text"
            numberOfLines={10}
            theme="light"
            label="test label"
          />
        </View>
      }
    />
    <ExampleDark
      example={
        <View>
          <Code>
            {
              "<Input type='text' numberOfLines={10} theme='dark' label='test label' />"
            }
          </Code>
          <Input
            type="text"
            numberOfLines={10}
            theme="dark"
            label="test label"
          />
        </View>
      }
    />

    <Description info="Auto Expanding Input" />
    <ExampleDark
      example={
        <View>
          <Code>
            {"<Input type='autoExpanding' maxHeight={148} maxLength={600} />"}
          </Code>
          <Input
            type="autoExpanding"
            maxLength={600}
            maxHeight={148}
            placeholder={"placeholder"}
          />
        </View>
      }
    />
  </PageContainer>
);
