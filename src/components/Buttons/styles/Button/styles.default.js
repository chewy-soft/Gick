import colors from "../../../../colors";

export default {
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: undefined,
    borderRadius: undefined,
    height: undefined,
    backgroundColor: undefined
  },
  text: { color: "#fff", letterSpacing: 2, fontSize: undefined },
  icon: {
    paddingRight: undefined,
    alignItems: "center",
    justifyContent: "center"
  }
};

const hoverColors = {
  moss: colors.hoverMoss,
  halfMoss: colors.hoverMoss,
  red: colors.hoverRed,
  halfRed: colors.hoverRed,
  darkGreen: colors.hoverDarkGreen,
  halfDarkGreen: colors.hoverDarkGreen,
  darkBlue: colors.hoverDarkBlue,
  halfDarkBlue: colors.hoverDarkBlue,
  orange: colors.hoverOrange,
  halfOrange: colors.hoverOrange,
  yellow: colors.lightOrange,
  halfYellow: colors.lightOrange,
  lightGray: "#aaa",
  blue: colors.hoverBlue,
  halfBlue: colors.hoverBlue,
  noStyle: "transparent",
  flat: "transparent",
  transparent: "rgba(255,255,255,.6)",
  disabledTheme: "rgb(223, 223, 223)"
};
export const getColors = theme => hoverColors[theme];

export const themes = {
  moss: {
    content: { backgroundColor: colors.moss }
  },
  halfMoss: {
    content: { backgroundColor: "rgba(163,130,79,.4)" }
  },
  red: {
    content: { backgroundColor: colors.lightRed }
  },
  halfRed: {
    content: { backgroundColor: "rgba(240,10,107,.4)" }
  },
  darkGreen: {
    content: { backgroundColor: colors.darkGreen }
  },
  halfDarkGreen: {
    content: { backgroundColor: "rgba(100,124,100,.4)" }
  },
  darkBlue: {
    content: { backgroundColor: colors.darkBlue }
  },
  halfDarkBlue: {
    content: { backgroundColor: "rgba(47,53,62,.4)" }
  },
  orange: {
    content: { backgroundColor: colors.lightOrange }
  },
  halfOrange: {
    content: { backgroundColor: "rgba(224,67,50,.4)" }
  },
  yellow: {
    content: { backgroundColor: colors.warning }
  },
  halfYellow: {
    content: { backgroundColor: "rgba(251,192,45,.4)" }
  },
  lightGray: {
    content: {
      backgroundColor: colors.lightGray
    },
    text: { color: colors.background }
  },
  blue: {
    content: { backgroundColor: colors.lightBlue }
  },
  halfBlue: {
    content: { backgroundColor: "rgba(77,189,253,.4)" }
  },
  noStyle: {
    content: { backgroundColor: "transparent" }
  },
  flat: {
    content: { backgroundColor: "transparent" },
    text: { color: colors.background }
  },
  transparent: {
    content: {
      borderColor: "rgba(255,255,255,.6)",
      borderWidth: 1,
      backgroundColor: "transparent"
    }
  },
  disabledTheme: {
    content: { backgroundColor: "rgb(223, 223, 223)" },
    text: { color: "rgb(161, 161, 161)" }
  }
};

export const sizes = {
  s: {
    content: {
      paddingHorizontal: 4,
      height: 21,
      borderRadius: 4
    },
    icon: {
      paddingRight: 2
    },
    text: { fontSize: 13 }
  },
  m: {
    content: {
      paddingHorizontal: 8,
      borderRadius: 2,
      height: 30
    },
    icon: {
      paddingRight: 4,
      paddingTop: 1
    },
    text: { fontSize: 16 }
  }
};
