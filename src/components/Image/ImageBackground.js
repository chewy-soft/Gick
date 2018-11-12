import React from "react";
import { ImageBackground } from "react-native";
import View from "../View/View";
import styles from "./styles/Background/styles";
import Symbol from "../Symbol";

export default props => {
  const { height, src, blur, opacity, style } = props;
  return (
    <View style={[styles.content, { maxHeight: height }, style]}>
      {(src && (
        <ImageBackground
          source={{ uri: src }}
          style={[
            (blur && [styles.background, styles.backgroundBlur]) ||
              styles.background,
            { opacity: opacity || 1 }
          ]}
          blurRadius={blur || 0}
        />
      )) || (
        <View style={styles.back}>
          <View style={[styles.monster, styles.leftTop]}>
            <Symbol name="monsterFont" size={96} />
          </View>
          <View style={[styles.monster, styles.leftBottom]}>
            <Symbol name="monsterFont" size={64} />
          </View>
          <View style={[styles.monster, styles.top]}>
            <Symbol name="monsterFont" size={76} />
          </View>
          <View style={[styles.monster, styles.rightTop]}>
            <Symbol name="monsterFont" size={76} />
          </View>
          <View style={[styles.monster, styles.rightBottom]}>
            <Symbol name="monsterFont" size={64} />
          </View>
        </View>
      )}
      {props.children}
    </View>
  );
};
