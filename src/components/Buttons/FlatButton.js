import React from "react";
import { Text } from "react-native";
import Symbol from "../Symbol";
import View from "../View/View";
import { getStyles } from "./styles/FlatButton/styles";

class FlatButton extends React.Component {
  state = { hover: false };
  highLight = () => {
    this.setState({ hover: !this.state.hover });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.hover !== nextState.hover ||
      this.props.highLight !== nextProps.highLight
    );
  }

  render() {
    const { theme, onPress, icon, content, size, shape } = this.props;
    const styles = getStyles(theme || "blue", size || "s");
    const radius = shape == "square" ? styles.square : null;
    const _hover = this.props.highLight || this.state.hover;

    return (
      <View disabled={(theme == "disable" && true) || false} onPress={onPress} style={{flex: 1}}>
        <View
          style={[styles.button, _hover && styles.buttonHover, radius]}
          onMouseOver={this.highLight}
          onMouseOut={this.highLight}
        >
          {icon && (
            <Text style={styles.icon}>
              <Symbol name={icon} size={20} />
            </Text>
          )}
          {content && <Text style={styles.content}>{content}</Text>}
        </View>
      </View>
    );
  }
}

export default FlatButton;
