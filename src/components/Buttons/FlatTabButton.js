import React from "react";
import { Text } from "react-native";
import View from "../View/View";
import FlatButton from "./FlatButton";
import Image from "../Image/Image";
import Symbol from "../Symbol";
import { params, getStyles } from "./styles/FlatTabButton/styles";

export default class FlatTabButton extends React.Component {
  state = { hover: false };
  highLight = () => {
    this.setState({ hover: !this.state.hover });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.hover !== nextState.hover;
  }

  render() {
    const { title, info, onPress, theme, button, src, icon } = this.props;
    const styles = getStyles(theme || "disable");
    const { hover } = this.state;

    return (
      <View
        onPress={onPress}
        disabled={(theme == "disable" && true) || false}
        style={{ flex: 1 }}
      >
        <View
          style={styles.tabContainer}
          onMouseOver={this.highLight}
          onMouseOut={this.highLight}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.info}>{info}</Text>
          <View style={styles.icon}>
            {(icon && <Symbol name={icon} size={params.svg} />) || (
              <Image src={src} size="small" />
            )}
          </View>
          <View style={styles.button}>
            <FlatButton
              theme={theme}
              content={button}
              size="s"
              highLight={hover}
              onPress={onPress}
            />
          </View>
        </View>
      </View>
    );
  }
}
