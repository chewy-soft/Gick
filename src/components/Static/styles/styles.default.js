import c from "../../../lib/css";
export default {
  container: {
    flex: 1,
    ...c.flex_center
  },
  error: {
    fontSize: undefined,
    marginLeft: undefined
  },
  text: {
    letterSpacing: 2,
    fontSize: undefined,
    marginTop: undefined
  },
  subtext: {
    letterSpacing: 2,
    fontSize: undefined,
    marginTop: undefined
  },
  svg: { ...c.flex_row_center }
};

export const themes = {
  light: {
    error: {
      color: "rgba(0,0,0,.4)"
    },
    text: {
      color: "#2b2b2b"
    },
    subtext: { color: "#2b2b2b" }
  },
  dark: {
    error: {
      color: "rgba(255,255,255,.4)"
    },
    text: {
      color: "#a2a2a2"
    },
    subtext: { color: "#a2a2a2" }
  }
};

export const theme_params = {
  light: {
    color: "rgba(0,0,0,.8)"
  },
  dark: {
    color: "rgba(255,255,255,.8)"
  }
};
