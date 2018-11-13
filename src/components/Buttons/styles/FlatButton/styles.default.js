import colors from "../../../../colors";
export default {
  button: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: undefined,
    justifyContent: "center",
    alignItems: "center",
    height: undefined,
    borderRadius: undefined,
    backgroundColor: undefined
  },
  content: {
    letterSpacing: 2,
    color: "#fff",
    fontSize: undefined
  },
  icon: { paddingRight: 12 },
  square: { borderRadius: 0 }
};

export const themes = {
  blue: {
    button: { backgroundColor: "#7289da" },
    buttonHover: { backgroundColor: "#697ec4" }
  },
  lightBlue: {
    button: { backgroundColor: colors.lightBlue },
    buttonHover: { backgroundColor: colors.hoverBlue }
  },
  lightGreen: {
    button: { backgroundColor: "#80CBC4" },
    buttonHover: { backgroundColor: "#619590" }
  },
  darkBlue: {
    button: { backgroundColor: colors.darkBlue },
    buttonHover: { backgroundColor: colors.hoverDarkBlue }
  },
  lightOrange: {
    button: { backgroundColor: colors.lightOrange },
    buttonHover: { backgroundColor: colors.hoverOrange }
  },
  green: {
    button: { backgroundColor: colors.normalGreen },
    buttonHover: { backgroundColor: colors.hoverNormalGreen }
  },
  orange: {
    button: { backgroundColor: "#f57c00" },
    buttonHover: { backgroundColor: "#C46504" }
  },
  gold: {
    button: { backgroundColor: colors.gold },
    buttonHover: { backgroundColor: "#987223" }
  },
  disable: {
    button: { backgroundColor: "#aaa" },
    buttonHover: { backgroundColor: "#aaa" }
  },
  transparent: {
    button: {
      borderColor: "rgba(255,255,255,.6)",
      borderWidth: 1,
      backgroundColor: "transparent"
    },
    buttonHover: {
      borderColor: "rgba(255,255,255,.6)",
      borderWidth: 1,
      backgroundColor: "rgba(255,255,255,.6)"
    }
  }
};
