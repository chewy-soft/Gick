import colors from "../../../../colors";
import c from "../../../../lib/css";
export default {
  cell: { height: 318 },
  container: {
    backgroundColor: "#484C50",
    height: 296
  },
  header: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 78,
    padding: 4
  },
  image: { backgroundColor: colors.loader, width: 50, height: 50 },
  names: { marginLeft: 8, justifyContent: "space-between" },
  gameName: { backgroundColor: colors.loader, width: "50%", height: 16 },
  gameSubName: {
    backgroundColor: colors.loader,
    width: "40%",
    height: 14
  },
  scoreContent: {
    backgroundColor: colors.darkBlue,
    marginVertical: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    height: 33
  },
  text: { height: 50, backgroundColor: colors.loader },
  showButton: { backgroundColor: colors.loader, height: 34, width: 28 },
  footer: {
    borderTopWidth: 1,
    borderColor: colors.normalGray,
    paddingTop: 6
  },
  commentTitle: {
    backgroundColor: colors.loader,
    height: 14,
    width: 126
  },
  commentButton: { ...c.flex_row, alignItems: "center" },
  button: { width: 22 },
  total: {
    backgroundColor: colors.loader,
    height: 14
  }
};
