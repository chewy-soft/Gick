import colors from "../../colors";
import c from "../../lib/css";
export default {
  container: {
    ...c.flex_row_center,
    backgroundColor: colors.background,
    minHeight: undefined,
    borderRadius: 6,
    borderWidth: 2,
    paddingHorizontal: 12
  },
  error: {
    borderColor: colors.error
  },
  warning: {
    borderColor: colors.warning
  },
  success: {
    borderColor: colors.success
  },
  content: {
    paddingHorizontal: 8,
    alignItems: "center",
    color: "#fff"
  }
};
