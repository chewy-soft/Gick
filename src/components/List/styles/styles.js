import defaultStyles from "./styles.default";
import { themes, defaultParams } from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {
  content: {
    paddingRight: 4
  },
  avatar: {
    paddingRight: 4
  }
};

const sizes = {
  xxs: {
    text: {
      fontSize: 10
    },
    sub: {
      fontSize: 9
    },
    downSub: {
      fontSize: 8
    }
  },
  xs: {
    text: {
      fontSize: 12
    },
    sub: {
      fontSize: 10
    },
    downSub: {
      fontSize: 8
    }
  },
  s: {
    text: {
      fontSize: 12
    },
    sub: {
      fontSize: 10
    },
    downSub: {
      fontSize: 8
    }
  },
  m: {
    text: {
      fontSize: 14
    },
    sub: {
      fontSize: 12
    },
    downSub: {
      fontSize: 12
    }
  }
};

export const getStyles = (size, theme) => {
  let styles = {};
  styles = _.merge(styles, defaultStyles, diff, sizes[size]);
  styles = _.merge(styles, themes[theme]);
  return StyleSheet.create(styles);
};

const paramsDiff = {
  dark: { icon: 18 },
  light: { icon: 18 }
};

export const getParams = theme => {
  var params = _.merge(defaultParams, paramsDiff);
  return _.merge(params[theme]);
};
