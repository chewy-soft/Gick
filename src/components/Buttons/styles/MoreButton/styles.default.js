import colors from "../../../../colors";
export default {
  moreText: {
    color: undefined,
    fontSize: undefined
  },
  textHover: { color: "#fff" },
  more: {
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: undefined,
    paddingVertical: undefined,
    backgroundColor: undefined
  }
};

export const themes = {
  light: { moreText: { color: colors.background } },
  dark: { moreText: { color: "#ccc" } }
};

const hoverColors = {
  light: "rgba(0,0,0,.4)",
  dark: "rgba(255,255,255,.2)"
};

export const hoverColor = theme => hoverColors[theme];
