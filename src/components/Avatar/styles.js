import { StyleSheet } from "react-native";
import colors from "../../colors";
import _ from "lodash";

const defaultStyles = {
  onlineState: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: undefined
  },
  outline: {
    overflow: "hidden"
  },
  badge: {
    position: "absolute",
    zIndex: 1
  }
};

const svgSizes = {
  xxs: {
    svg: 20,
    title: 16
  },
  xs: {
    svg: 24,
    title: 20
  },
  s: {
    svg: 33,
    title: 24
  },
  m: {
    svg: 53,
    title: 36
  },
  l: {
    svg: 68,
    title: 44
  },
  xl: {
    svg: 78,
    title: 50
  }
};

const themes = {
  lightBlue: {
    onlineState: { borderColor: "#6D798A" }
  },
  blue: {
    onlineState: { borderColor: "#2f3136" }
  },
  dark: {
    onlineState: { borderColor: colors.background }
  },
  light: {
    onlineState: { borderColor: "#fff" }
  }
};

export const getParams = size => svgSizes[size];

const sizes = {
  xxs: {
    image: { width: 20, height: 20 },
    outline: { borderRadius: 10 },
    badge: { right: -4, top: -3 },
    onlineState: {
      height: 6,
      width: 6,
      borderRadius: 3,
      borderWidth: 1
    }
  },
  xs: {
    image: { width: 24, height: 24 },
    outline: { borderRadius: 24 },
    badge: { right: -4, top: -3 },
    onlineState: {
      height: 9,
      width: 9,
      borderRadius: 9,
      borderWidth: 1
    }
  },
  s: {
    image: { width: 33, height: 33 },
    outline: { borderRadius: 33 },
    badge: { right: -8, top: -1 },
    onlineState: {
      height: 11,
      width: 11,
      borderRadius: 11
    }
  },
  m: {
    image: { width: 53, height: 53 },
    outline: { borderRadius: 53 },
    badge: { right: -12, top: -2 },
    onlineState: {
      height: 18,
      width: 18,
      borderRadius: 18
    }
  },
  l: {
    image: { width: 68, height: 68 },
    outline: { borderRadius: 68 },
    badge: { right: -14, top: -3 },
    onlineState: {
      height: 23,
      width: 23,
      borderRadius: 23
    }
  },
  xl: {
    image: { width: 78, height: 78 },
    outline: { borderRadius: 78 },
    badge: { right: -16, top: -3 },
    onlineState: {
      height: 26,
      width: 26,
      borderRadius: 26,
      borderWidth: 3
    }
  }
};

export const onlineState = {
  online: { onlineState: { backgroundColor: colors.success } },
  offline: { onlineState: { backgroundColor: colors.normalGray } },
  unknown: { onlineState: { display: "none" } }
};

export const getStyles = (size, online, theme) => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, sizes[size]);
  styles = _.merge(styles, onlineState[online]);
  styles = _.merge(styles, themes[theme]);
  return StyleSheet.create(styles);
};
