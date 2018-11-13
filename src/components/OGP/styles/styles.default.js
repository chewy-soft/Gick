import colors from "../../../colors";
export default {
  container: {
    flexDirection: "row",
    borderRadius: 3,
    maxWidth: undefined,
    overflow: "hidden",
    backgroundColor: "rgba(46,48,54,.3)"
  },
  leftLine: { height: "100%", width: 4, backgroundColor: colors.lightBlue },
  content: {
    maxWidth: undefined,
    flex: 1,
    paddingRight: undefined
  },
  inside: {
    flex: 1,
    maxWidth: undefined,
    flexDirection: "row",
    padding: undefined,
    borderColor: "rgba(46,48,54,.6)",
    borderWidth: 1
  },
  site_name: { flex: 1, color: "#87909c", fontSize: 12 },
  title: { flex: 1, color: colors.lightBlue },
  description: { color: "#ccc" },
  margin: { marginTop: undefined }
};
