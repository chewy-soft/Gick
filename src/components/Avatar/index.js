import React from "react";
import { ImageBackground } from "react-native";
import View from "../View/View";
import Text from "../Text/Text";
import Symbol from "../Symbol";
import { getStyles, getParams } from "./styles";
import _ from "lodash";
import colors from "../../colors";

export default props => {
  const { size, online, src, userBadge, svg, theme, border, name } = props;
  const styles = getStyles(size || "s", online, theme || "dark");
  const params = getParams(size || "s");

  BACK_COLORS = [
    colors.darkBlue,
    "#aed9d8",
    "#f2c494",
    "#f9f1e6",
    "#ff8b8b",
    "#85a9a2",
    "#414f67",
    "#512e47",
    "#178e96",
    "#cba0aa",
    "#6fbd69",
    "#dcbaae",
    "#bbabd0",
    "#91cfc9",
    "#6bb3c0",
    "#99bcdd",
    "#2d4e76",
    "#4198b9",
    "#1e5670",
    colors.loader,
    "#b8e4e5",
    "#d85c5e"
  ];

  return (
    <View>
      {userBadge && (
        <View style={styles.badge} elevation={1}>
          <Symbol size={params.title} name={userBadge} />
        </View>
      )}
      <View
        style={[
          styles.image,
          border && styles.border,
          {
            backgroundColor:
              (name && BACK_COLORS[name.charCodeAt(0) % 22]) || "transparent"
          }
        ]}
      >
        {src && <ImageBackground source={{ uri: src }} style={styles.image} />}
        {svg && <Symbol size={params.svg} name={svg || "apologize"} />}

        {_.isNil(src) && _.isNil(svg) && (
          <Text style={styles.name_font}>{_.first(name)}</Text>
        )}
      </View>
      {online && online !== "unknow" && <View style={styles.onlineState} />}
    </View>
  );
};
