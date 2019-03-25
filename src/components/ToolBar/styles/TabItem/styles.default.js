
import c from "../../../../lib/css";export default {
  tab: {
    color: "#aaa",
    paddingTop: undefined,
    paddingBottom: undefined,
    fontSize: undefined,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: undefined,
    borderBottomWidth: undefined,
    borderColor: "#fff",
    height: "100%"
  },
  notice: { ...c.absolute, right: undefined, top: undefined },
  icon: { alignItems: "center", marginTop: -10 },
  bottomText: { color: undefined, fontSize: 10, paddingTop: 1 }
};
