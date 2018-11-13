import React from "react";
import { ImageBackground } from "react-native";
import View from "../View/View";
import Symbol from "../Symbol";
import { getStyles, getParams } from "./styles";

export default props => {
  const { size, online, src, userBadge, svg, theme } = props;
  const styles = getStyles(size || "s", online || "online", theme || "dark");
  const params = getParams(size || "s");

  return (
    <View>
      {userBadge && (
        <View style={styles.badge} elevation={1}>
          <Symbol size={params.title} name={userBadge} />
        </View>
      )}
      {(src && (
        <View style={styles.outline}>
          <ImageBackground source={{ uri: src }} style={styles.image} />
        </View>
      )) || <Symbol size={params.svg} name={svg || "apologize"} />}
      <View style={styles.onlineState} />
    </View>
  );
};
