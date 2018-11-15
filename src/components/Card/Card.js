import React from "react";
import { Text } from "react-native";
import { getStyle } from "./styles/Card/styles";
import ImageBackground from "../Image/ImageBackground";
import LinearGradientView from "../View/LinearGradientView";
import View from "../View/View";

export default props => {
  const { onPress, src, title, component, size, rowInfo } = props;
  const styles = getStyle(size || "l");

  return (
    <View style={styles.container} onPress={onPress} elevation={3}>
      <ImageBackground style={styles.image} src={src}>
        {rowInfo && (
          <LinearGradientView
            start="#e8f5fc"
            end="#cce9f9"
            theme="topToBottom"
            style={styles.users}
          >
            <LinearGradientView
              style={styles.arrow}
              start="#e8f5fc"
              end="#cce9f9"
            />
            <Text style={styles.userText}>{rowInfo}</Text>
          </LinearGradientView>
        )}
        {title && (
          <LinearGradientView
            start="transparent"
            end="rgba(0,0,0,.8)"
            theme="topToBottom"
            style={styles.name}
          >
            <Text style={styles.nameText} numberOfLines={1}>
              {title}
            </Text>
          </LinearGradientView>
        )}
      </ImageBackground>
      {component}
    </View>
  );
};
