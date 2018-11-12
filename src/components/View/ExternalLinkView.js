import React from "react";
import { TouchableOpacity, Linking } from "react-native";

class ExternalLinkView extends React.Component {
  openUrl = url => {
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  };

  render() {
    const { url, style } = this.props;
    return (
      <TouchableOpacity
        style={[{ flex: 1 }, style]}
        onPress={() => this.openUrl(url)}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default ExternalLinkView;
