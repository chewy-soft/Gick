import { StyleSheet } from "react-native";
import colors from "../../../../colors";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.normalGray,
    borderRadius: 4,
    padding: 12,
    paddingVertical: 8
  },
  message: {
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 18,
    marginTop: -18
  },
  quote: { marginLeft: "auto" }
});

export const params = {
  icon: 32
};
