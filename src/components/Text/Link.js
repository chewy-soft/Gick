import React from "react";
import { StyleSheet, Text } from "react-native";
import View from "../View/View";

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 6,
    borderBottomWidth: 2,
    borderColor: "transparent"
  },
  link: {
    color: "rgba(255,255,255,.6)",
    paddingBottom: 7,
    fontSize: 13
  },
  big: { fontWeight: "bold", fontSize: 14, letterSpacing: 1 },
  highLightLink: { color: "#fff" },
  highLight: { borderColor: "#fff" }
});

class Link extends React.Component {
  state = { highLight: false };
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.highLight !== nextState.highLight;
  }

  render() {
    const { text, onPress, size } = this.props;
    let link_css;
    const { highLight } = this.state;
    switch (size) {
      case "s":
        link_css = styles.link;
        break;
      case "m":
      default:
        link_css = [styles.link, styles.big];
        break;
    }
    css_style = StyleSheet.flatten([
      (highLight && [link_css, styles.highLightLink]) || link_css
    ]);
    return (
      <View
        onMouseOver={() => this.setState({ highLight: true })}
        onMouseOut={() => this.setState({ highLight: false })}
        onPress={onPress}
        style={
          (highLight && [styles.content, styles.highLight]) || styles.content
        }
      >
        <Text style={css_style}>{text}</Text>
      </View>
    );
  }
}

export default Link;
