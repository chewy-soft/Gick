import colors from "../../../../colors";
export default {
  filterContainer: {
    position: "relative",
    flex: 1
  },
  hideContainer: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  filter: {
    width: "70%",
    marginLeft: "auto",
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 34,
    justifyContent: "center",
    backgroundColor: colors.loader,
    paddingHorizontal: 8
  },
  headerText: {
    color: "#fff"
  },
  components: {
    paddingVertical: undefined,
    paddingHorizontal: undefined
  },
  line: {
    width: "100%",
    backgroundColor: "#C5C5C5",
    height: 1,
    margin: "auto",
    marginVertical: 16
  },
  support: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  footer: {
    flexDirection: "row"
  },
  text: {
    color: "#fff",
    fontSize: 15
  },
  custmize: { marginTop: 12 },
  tagList: { marginTop: 8 },
  tagTitle: { fontSize: undefined },
  itemTitle: {
    fontSize: undefined,
    color: colors.background,
    fontWeight: "bold"
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden"
  },
  tag: { marginTop: 6, marginRight: 12 },
  fullTags: { overflow: "visible", height: "auto" }
};
