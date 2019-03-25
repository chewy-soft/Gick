import colors from "../../../../../colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  cell: {
    position: "relative",
    overflow: "hidden"
  },
  container: {
    backgroundColor: "#484C50",
    marginVertical: 6,
    padding: 4
  },
  scoreContainer: { height: 42, justifyContent: "center" },
  scoreContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.darkBlue,
    height: 34,
    paddingHorizontal: 6
  },
  score: {
    color: "#fff",
    fontSize: 15
  },
  scoreIcon: {
    marginRight: 4,
    fontSize: 16
  },
  date: {
    fontSize: 13,
    marginLeft: "auto",
    color: "#bbb"
  },
  interactionContent: {
    color: "#fff",
    fontSize: 14
  },
  hideMore: {
    height: 54,
    minHeight: 54,
    overflow: "hidden"
  },
  showButton: {
    padding: 4,
    textAlign: "right",
    fontSize: 14,
    color: "#aaa",
    height: 26
  },
  footer: {
    borderTopWidth: 1,
    borderColor: colors.normalGray,
    paddingTop: 6,
    height: 50
  },
  commentTitle: {
    color: "#ccc",
    fontSize: 12
  },
  commentButton: { flexDirection: "row", alignItems: "center" },
  button: { marginLeft: 6 },
  report: {
    flexDirection: "row",
    marginLeft: "auto",
    position: "relative",
    alignItems: "center"
  },
  reportText: { color: "#fff", marginLeft: 2, fontSize: 12 },
  total: {
    fontSize: 12,
    color: "#ddd",
    paddingRight: 2
  },
  fullInteractionContent: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 57
  },
  closeFull: { position: "absolute", top: 4, right: 4, zIndex: 1 }
});
