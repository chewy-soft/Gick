import c from "../../../../lib/css";
import colors from "../../../../colors";
export default {
  format: { flexDirection: "row", marginBottom: 12 },
  cell: { marginBottom: "auto", flex: 1 },
  minmax: {
    flex: 1,
    height: undefined
  },
  inputContent: { flex: 1, marginTop: "auto" },
  minmaxButton: { marginLeft: "auto" },
  label: { color: "#fff", fontSize: 14, marginBottom: 6 },
  row: { flexDirection: "row", alignItems: "center" },
  subInfo: { marginLeft: "auto", marginTop: 4 },
  subInfoText: { color: "#fff", fontSize: 12, marginLeft: 4 },
  arrow: { ...c.margin(22, "auto") },
  editButton: { marginLeft: 8, justifyContent: "space-between" },
  onCommentContent: {
    marginTop: 8,
    maxWidth: undefined
  },
  onComment: { flexDirection: "row" },
  numberInput: { height: undefined, marginTop: "auto" },
  pickerContent: { backgroundColor: "#fff", height: 280, padding: 12 },
  picker: { margin: "auto" },
  orignalImage: { backgroundColor: colors.loader },
  tags: { ...c.flex_wrap, ...c.flex_row },
  textTagInput: { ...c.margin_r(8) },
  textTagButton: {
    marginLeft: "auto",
    marginBottom: 8,
    ...c.flex_row,
    alignItems: "flex-end"
  }
};
