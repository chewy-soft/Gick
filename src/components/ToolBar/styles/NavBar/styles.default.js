import colors from "../../../../colors";
import c from "../../../../lib/css";
export default {
  container: {
    ...c.flex_row,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderColor: "#121010",
    alignItems: "stretch",
    height: undefined
  },
  left: {
    paddingHorizontal: undefined,
    ...c.flex_center,
    paddingTop: 2
  },
  logo: {
    ...c.flex_center
  },
  items: {
    ...c.flex_row_center,
    ...c.flex_row_between,
    margin: undefined
  },
  right: {
    ...c.flex_center
  }
};

export const types = {
  left: {
    items: {
      marginRight: "auto"
    }
  },
  center: {
    items: {
      flex: 1
    }
  },
  right: {
    items: {
      marginLeft: "auto"
    }
  }
};
