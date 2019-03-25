import React from "react";
import View from "../View/View";
import Text from "../Text/Text";
import Symbol from "../Symbol";
import { getStyles, getParams } from "./styles/styles";

export default props => {
  const { theme, size } = props;
  const styles = getStyles(size || "l", theme || "dark");
  const params = getParams(size || "l", theme || "dark");
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <Symbol
          name={(theme == "light" && "logonFont_d") || "logonFont"}
          size={params.icon}
        />
      </View>
      <Text style={styles.text}>哎哟哟！快来抢占这块领地！</Text>
    </View>
  );
};
