import colors from "../../../../colors";
import c from "../../../../lib/css";

export default {
  container: {
    maxWidth: undefined,
    flexWrap: "wrap",
    width: "max-content",
    ...c.flex_row_center,
    backgroundColor: colors.normalGray,
    borderRadius: 4,
    padding: 12
  },
  imageback: {},
  image: { width: 50, height: 50 },
  processbar: { marginTop: 4 },
  previewContent: { marginRight: 20 },
  delete: {
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "auto",
    backgroundColor: "rgba(0,0,0,.4)"
  },
  margin: { marginBottom: undefined },
  failed: {
    backgroundColor: "#fff",
    height: undefined,
    width: undefined,
    borderRadius: undefined,...c.flex_center,
    ...c.absolute,
    left: undefined,
    top: undefined
  }
};
