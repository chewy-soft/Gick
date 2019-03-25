import React from "react";
import Text from "../Text/Text";
import Symbol from "../Symbol";
import { getStyles, getParams } from "./styles/styles";
import View from "../View/View";

export default props => {
  const { theme, size } = props;
  const styles = getStyles(size || "l", theme || "dark");
  const params = getParams(size || "l", theme || "dark");
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <Symbol
          name={(theme == "light" && "ufoFont_d") || "ufoFont"}
          size={params.icon}
        />
        <Text style={styles.error}>404</Text>
      </View>
      <Text style={styles.text}>哎呀呀 ! 要找的页面似乎被外星人劫走了 !</Text>
    </View>
  );
};
