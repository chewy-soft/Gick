import { StyleSheet } from "react-native";
import colors from "../../../../colors";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.normalGray,
    borderRadius: 4,
    padding: 8,
    paddingVertical: 4
  },
  message: {
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 12,
    marginTop: -12
  },
  quote: { marginLeft: "auto" }
});

export const params = {
  icon: 22
};
