import { StyleSheet } from "react-native";
import _ from "lodash";

const sizes = {
  small: { image: { width: 68, height: 68 } },
  middle: { image: { width: 155, height: 155 } },
  tiny: { image: { width: 50, height: 50 } },
  card_small: { image: { width: 128, height: 85 } }
};

export const getStyles = size => {
  let styles = {
    content: {
      justifyContent: "center",
      alignItems: "center"
    },
    loader: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,.2)"
    },
    error: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,.2)"
    }
  };
  styles = _.merge(styles, sizes[size]);
  return StyleSheet.create(styles);
};

const params = {
  middle: { svg: 155 },
  small: { svg: 68 },
  tiny: { svg: 50 },
  auto: { svg: 40 }
};

export const getParams = size => {
  return params[size];
};
