import colors from "../../../../colors";
export default {
  content: {
    flex: 1,
    position: "relative",
    minHeight: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: colors.background
  },
  background: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  back: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
  monster: {
    position: "absolute",
    opacity: 0.4
  },
  leftTop: {
    top: -2,
    left: -16,
    transform: [{ rotate: "10deg" }]
  },
  leftBottom: {
    bottom: -16,
    left: 21,
    transform: [{ rotate: "-15deg" }]
  },
  rightTop: {
    bottom: 0,
    right: 32,
    transform: [{ rotate: "-10deg" }]
  },
  rightBottom: {
    top: 18,
    right: 3,
    transform: [{ rotate: "-80deg" }]
  },
  top: {
    left: 120,
    top: -10,
    transform: [{ rotate: "180deg" }]
  }
};
