
import c from "../../../../lib/css";
export default {
  outSide: { flexGrow: 1, flexShrink: 0, height: "100%" },
  container: {
    flexDirection: undefined,
    paddingHorizontal: undefined,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  title: {
    letterSpacing: 1,
    color: "#fff",
    fontSize: undefined,
    paddingLeft: undefined,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  badge: {
    ...c.absolute,
    top: undefined,
    right: undefined
  },
  smallBadge: {
    ...c.absolute,
    top: undefined,
    right: undefined
  },
  label: {
    ...c.absolute,
    top: undefined,
    right: undefined
  }
};
