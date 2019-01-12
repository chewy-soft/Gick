import React from "react";
import Text from "../Text/Text";
import styles from "./styles/Card/styles";
import View from "../View/View";
import colors from "../../colors";
import c from "../../lib/css";

export default class Card extends React.Component {
  state = { hover: false };
  hover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    const {
      onPress,
      title,
      description,
      component,
      theme,
      shadow,
      header,
      fontColor,
      subFontColor,
      width,
      headerComponent,
      componentBackColor,
      iconCompnent
    } = this.props;

    const { hover } = this.state;
    const hover_color = hover && colors.lightBlue;

    return (
      <View
        style={[{ width: width }, shadow && styles.shadow]}
        onMouseOver={this.hover}
        onMouseOut={this.hover}
      >
        {shadow && <View style={[styles.boxShadow, styles.left]} />}
        {shadow && <View style={[styles.boxShadow, styles.right]} />}
        <View onPress={onPress}>
          {header}
          <View style={{ ...c.absolute_full }}>{headerComponent}</View>
        </View>
        <View
          style={[
            styles.content,
            {
              backgroundColor:
                (theme == "simple" && "transparent") ||
                componentBackColor ||
                colors.basic
            }
          ]}
        >
          <Text
            style={[
              styles.title,
              { color: hover_color || fontColor || "#fff" }
            ]}
            numberOfLines={1}
            onPress={onPress}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.description,
              { color: hover_color || subFontColor || "#ccc" }
            ]}
            numberOfLines={1}
            onPress={onPress}
          >
            {description}
          </Text>
          {iconCompnent}
          {component}
        </View>
      </View>
    );
  }
}
