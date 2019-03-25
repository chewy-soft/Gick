import colors from "../../../colors";
import c from "../../../lib/css";

export default {
  container: {
    flex: 1,
    ...c.flex_row
  },
  content: {
    justifyContent: "center",
    flex: 1,
    paddingRight: undefined,
    overflow: "hidden"
  },
  avatar: {
    paddingRight: undefined,
    alignSelf: "center",
    margin: "auto",
  },
  text: {
    color: undefined,
    fontSize: undefined
  },
  sub: {
    overflow: "hidden",
    color: "#9EB5E8",
    fontSize: undefined
  },
  downSub: {
    alignItems: "center",
    justifyContent: "center",
    color: "#9F9F9F",
    fontSize: undefined
  }
};

export const themes = {
  dark: {
    text: { color: "#cfcfcf" }
  },
  light: {
    text: { color: colors.background }
  }
};

export const defaultParams = {
  dark: {
    highLight: "rgba(255,255,255,.2)",
    icon: undefined,
    iconColor: "#cfcfcf",
    hoverIcon: "#fff"
  },
  light: {
    highLight: colors.lightBlue,
    icon: undefined,
    iconColor: colors.background,
    hoverIcon: "#fff"
  }
};
