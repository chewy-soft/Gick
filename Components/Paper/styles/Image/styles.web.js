import { StyleSheet } from "react-native";
import _ from "lodash";

const sizes = {
  small: { image: { width: 78, height: 78 } },
  middle: { image: { width: 270, height: 280 } },
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
  middle: { svg: 250 },
  small: { svg: 78 },
  tiny: { svg: 50 },
  card_small: { svg: 60 },
  auto: { svg: 90 }
};

export const getParams = size => {
  return params[size];
};
