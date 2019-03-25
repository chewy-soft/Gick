import colors from "../../../../colors";
import c from "../../../../lib/css";
export default {
  content: {
    height: 87,
    borderBottomWidth: 1,
    ...c.flex_row,
    backgroundColor: colors.basic,
    alignItems: "stretch"
  },
  border: {
    borderColor: "#767676"
  },
  right: { flex: 1 },
  left: { width: 128, alignItems: "center", justifyContent: "center" },
  image: { backgroundColor: colors.loader, width: 75, height: 75 },
  title: {
    marginTop: 8,
    backgroundColor: colors.loader,
    height: undefined,
    width: "50%",
    borderRadius: undefined
  },
  sub: {
    backgroundColor: colors.loader,
    height: undefined,
    width: "60%",
    marginTop: 4,
    borderRadius: undefined
  },
  subBottom: {
    backgroundColor: colors.loader,
    height: undefined,
    width: "30%",
    marginTop: "auto",
    marginBottom: 6,
    borderRadius: undefined
  }
};
