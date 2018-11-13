import React from "react";
import PageTitle from "../../sampleUI/PageTitle";
import { Example } from "../../sampleUI/Example";
import Description from "../../sampleUI/Description";
import Format from "../../../src/components/Text/Format";
import PageContainer from "../../sampleUI/PageContainer";
import Code from "../../sampleUI/Code";
import { View, Text } from "react-native";
const formats = [
  "string",
  "score",
  "number",
  "player",
  "min",
  "hour",
  "age",
  "text",
  "price",
  "rmb",
  "RMB",
  "counter",
  undefined
];

const Render = (value, format, type) => {
  var f = format || "undefined";
  var v = value ? value : "undefined";
  v = typeof value == "object" ? JSON.stringify(value) : value;
  var t = type || "undefined";
  return (
    <View key={f}>
      <Code>{`<Format value="${v}" format="${f}", type="${t}" />`}</Code>
      <Text>
        <Format value={value} format={format} type={type} />
      </Text>
    </View>
  );
};
const text = `
    ABCDEFG 
    ABCDEFG 
    ABCDEFG 
    ABCDEFG 
    `;

export default props => (
  <PageContainer>
    <PageTitle title="Text Single Format Component" />
    <Description info="undefined Test" />
    <Example example={formats.map(format => Render(undefined, format))} />
    <Description info="Integer Test" />
    <Example example={formats.map(format => Render(123456789, format))} />
    <Description info="Float Test" />
    <Example example={formats.map(format => Render(123.456789, format))} />
    <Description info="String Test" />
    <Example example={formats.map(format => Render("123456789", format))} />
    <Description info="String Test 2" />
    <Example example={formats.map(format => Render("1234567.89", format))} />
    <Description info="String Test 3" />
    <Example example={formats.map(format => Render("ABCDEFG", format))} />
    <Description info="String Test 4" />
    <Example example={formats.map(format => Render(text, format))} />
    <PageTitle title="Type minmax Component" />
    <Description info="undefined Test" />
    <Example
      example={formats.map(format => Render(undefined, format, "minmax"))}
    />
    <Description info="Integer Test" />
    <Example
      example={formats.map(format => Render(123456789, format, "minmax"))}
    />
    <Description info="Float Test" />
    <Example
      example={formats.map(format => Render(123.456789, format, "minmax"))}
    />
    <Description info="String Test" />
    <Example
      example={formats.map(format => Render("123456789", format, "minmax"))}
    />
    <Description info="String Test 2" />
    <Example
      example={formats.map(format => Render("1234567.89", format, "minmax"))}
    />
    <Description info="String Test 3" />
    <Example
      example={formats.map(format => Render("ABCDEFG", format, "minmax"))}
    />
    <Description info="String Test 4" />
    <Example example={formats.map(format => Render(text, format, "minmax"))} />
    <Description info="MinMax Object Test 4" />
    <Example
      example={formats.map(format =>
        Render({ min: 11111.1111, max: 3333.333 }, format, "minmax")
      )}
    />
  </PageContainer>
);
