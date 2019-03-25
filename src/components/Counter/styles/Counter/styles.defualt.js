import colors from "../../../../colors";
import c from "../../../../lib/css";
export default {
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    borderRadius: undefined,
    ...c.flex_center,
    minHeight: undefined,
    padding: undefined
  },
  info: { color: "#fff", fontSize: undefined },
  content: { ...c.flex_row, alignItems: "flex-end" },
  count: {
    color: colors.lightOrange,
    fontSize: undefined,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,.6)",
    textShadowOffset: { width: 1, height: 0 }
  },
  suffix: {
    color: "#fff",
    paddingBottom: undefined,
    fontSize: undefined,
    marginLeft: undefined
  }
};
