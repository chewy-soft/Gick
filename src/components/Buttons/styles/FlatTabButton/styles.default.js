import colors from "../../../../colors";

export const defaultStyles = {
  tabContainer: {
    backgroundColor: "hsla(0,0%,100%,.8)",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "rgba(0,0,0,.1)",
    borderRadius: 6,
    padding: undefined,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  title: {
    fontSize: undefined,
    marginTop: undefined,
    color: undefined
  },
  info: {
    color: "#99aab5",
    fontSize: 14,
    marginTop: undefined,
    paddingHorizontal: 15
  },
  button: {},
  icon: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: undefined
  }
};

export const themes = {
  blue: { title: { color: "#7289da" } },
  green: { title: { color: colors.normalGreen } },
  orange: { title: { color: "#f57c00" } },
  gold: { title: { color: colors.gold } },
  disable: { title: { color: "#aaa" } }
};
