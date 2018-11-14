import colors from "../../../colors";
export default {
  label: {
    color: "#fff",
    marginRight: "auto",
    alignItems: "center",
    paddingHorizontal: undefined,
    borderRadius: undefined,
    justifyContent: "center",
    fontSize: undefined,
    height: undefined
  }
};

export const themes = {
  black: {
    label: {
      backgroundColor: "rgba(0,0,0,.6)"
    }
  },
  orange: {
    label: {
      backgroundColor: colors.lightOrange
    }
  },
  darkBlue: {
    label: {
      backgroundColor: colors.darkBlue
    }
  }
};
