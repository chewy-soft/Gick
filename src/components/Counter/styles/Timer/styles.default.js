import colors from "../../../../colors";
import c from "../../../../lib/css";

export default {
  container: {
    ...c.flex_row,
    alignItems: "stretch",
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.hoverDarkBlue
  },
  timeContent: { alignItems: "center" },
  suffix: { color: "#C7E6F6", fontSize: undefined },
  time: {
    fontFamily: "varela_roundregular",
    textAlignVertical: "center",
    letterSpacing: 2,
    fontSize: undefined
  },
  normal: { color: "#fff" },
  red: { color: "#E04332" },
  colon: {
    color: "#fff",
    marginTop: "auto",
    fontSize: undefined,
    paddingBottom: undefined,
    marginHorizontal: undefined,
    marginRight: undefined,
    marginBottom: undefined
  },
  space: { width: undefined },
  days: {
    color: "#C7E6F6",
    fontSize: undefined,
    paddingHorizontal: undefined,
    paddingTop: undefined
  }
};
