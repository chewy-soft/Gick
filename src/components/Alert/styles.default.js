import colors from "../../colors";
export default {
  container: {
    flexDirection: "row",
    backgroundColor: colors.background,
    minHeight: undefined,
    borderRadius: 6,
    borderWidth: 2,
    paddingHorizontal: 12,
    alignItems: "center"
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
