import React from "react";
import Text from "../Text/Text";
import Symbol from "../Symbol";
import { getStyles, getParams } from "./styles/styles";
import View from "../View/View";

export default props => {
  const { theme, size } = props;
  const styles = getStyles(size || "m", theme || "dark");
  const params = getParams(size || "m", theme || "dark");
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <Symbol
          name={(theme == "light" && "alienFont_d") || "alienFont"}
          size={params.icon}
        />
      </View>
      <Text style={styles.text}>發生不明錯誤！</Text>
      <Text style={styles.subtext}>數據被外星人吃掉啦...</Text>
    </View>
  );
};
