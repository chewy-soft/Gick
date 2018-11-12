import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";

const Code = props => (
  <SyntaxHighlighter
    fontSize={props.size}
    language="javascript"
    highlighter={"prism" || "hljs"}
  >
    {props.children}
  </SyntaxHighlighter>
);

export default Code;
