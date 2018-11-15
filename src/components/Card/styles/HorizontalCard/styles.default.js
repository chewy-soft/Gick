import colors from "../../../../colors";
export default {
  container: {
    height: 87,
    overflow: "hidden"
  },
  gameCard: {
    flexDirection: "row",
    backgroundColor: "#171717",
    position: "relative",
    flex: 1
  },
  cardCell: {
    minWidth: 306,
    width: 390,
    maxWidth: 390
  },
  leftContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 128
  },
  rightContainer: {
    flex: 1,
    padding: 4,
    overflow: "hidden",
    justifyContent: "space-between"
  },
  textHover: { color: "#fff" },
  title: { fontSize: 15, color: "#ccc" },
  subTitle: { fontSize: 12, color: "#767676" },
  standLine: {
    position: "absolute",
    backgroundColor: colors.background,
    height: 70,
    width: 1,
    left: 0,
    alignSelf: "center"
  },
  line: {
    position: "absolute",
    backgroundColor: colors.background,
    height: 1,
    width: "90%",
    bottom: 0,
    alignSelf: "center"
  },
  more: {
    position: "absolute",
    width: 28,
    height: 30,
    right: 0,
    top: 4
  },
  menus: {
    width: 85,
    justifyContent: "center",
    alignItems: "center"
  },
  menu: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.4)",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    overflow: "hidden"
  },
  close: {
    backgroundColor: colors.darkBlue,
    height: "100%",
    width: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  menuLabel: { color: "#fff", fontSize: 12 }
};
