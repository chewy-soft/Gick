export default {
  container: {
    overflow: "hidden",
    position: "relative",
    borderRightWidth: 1,
    width: undefined,
    padding: undefined,
    borderBottomWidth: 2,
    borderColor: "rgba(0,0,0,.1)",
    borderRadius: 5
  },
  backContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: -1
  },
  background: {
    opacity: 0.1,
    position: "absolute"
  },
  centerWrap: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  title: {
    fontSize: 18,
    marginBottom: undefined,
    marginTop: 16,
    textAlign: "center",
    color: "#7289da",
    fontWeight: "bold"
  },
  bottomLeft: { bottom: -90, left: -50, transform: [{ rotate: "25deg" }] },
  bottomRight: { bottom: -40, right: -40, transform: [{ rotate: "-20deg" }] },
  top: { top: -80, right: 20, transform: [{ rotate: "-180deg" }] }
};
