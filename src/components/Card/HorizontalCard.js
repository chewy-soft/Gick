import React from "react";
import { Text } from "react-native";
import Image from "../Image/Image";
import ImageBackground from "../Image/ImageBackground";
import View from "../View/View";
import { styles, params } from "./styles/HorizontalCard/styles";
import LinearGradientView from "../View/LinearGradientView";
import colors from "../../colors";
import Symbol from "../Symbol";
import HoverView from "../View/HoverView";

class HorizontalCard extends React.Component {
  state = { hover: false, menu: false };
  onMouseOut = () => {
    this.setState({ hover: false });
  };
  onMouseOver = () => {
    this.setState({ hover: true });
  };
  ShowMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.hover !== nextState.hover || this.state.menu !== nextState.menu
    );
  }

  render() {
    const {
      src,
      back,
      onPress,
      component,
      title,
      subTitle,
      menus
    } = this.props;
    const { hover, menu } = this.state;
    let onPress_type = (menus && this.ShowMenu) || onPress;
    return (
      <View style={styles.container}>
        <HoverView
          style={styles.gameCard}
          hoverColor="rgba(255,255,255,.1)"
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onPress={onPress_type}
        >
          <View style={styles.leftContainer}>
            {src && <Image src={src} size="card_small" />}
            {back && (
              <ImageBackground src={back} style={{ width: 128, height: 85 }} />
            )}
          </View>
          <View style={styles.rightContainer}>
            <Text
              numberOfLines={1}
              style={[styles.title, hover && styles.textHover]}
            >
              {title}
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.subTitle, hover && styles.textHover]}
            >
              {subTitle}
            </Text>
            {component}
          </View>
        </HoverView>
        {menus && (
          <View
            onPress={() => this.setState({ menu: true })}
            style={styles.more}
          >
            <Symbol name="menuMore" color="white" size={params.icon} />
          </View>
        )}
        <LinearGradientView
          start={colors.darkBlue}
          end={colors.basic}
          theme="leftToRight"
          style={{ height: 1, width: "100%" }}
        />

        {menus &&
          menu && (
            <View
              style={styles.menu}
              activeOpacity={1}
              onPress={() => this.setState({ menu: false })}
            >
              <View style={styles.close}>
                <Symbol name="dropRight" size={params.icon} color="#fff" />
              </View>
              {_.map(menus, menu => (
                <View
                  style={[styles.menus, { backgroundColor: menu.color }]}
                  key={menu.key}
                  onPress={menu.onPress}
                  activeOpacity={1}
                >
                  <Symbol name={menu.icon} size={30} />
                  <Text style={styles.menuLabel}>{menu.label}</Text>
                </View>
              ))}
            </View>
          )}
      </View>
    );
  }
}

export default HorizontalCard;
