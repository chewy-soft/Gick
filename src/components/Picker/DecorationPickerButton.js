import React from "react";
import View from "../View/View";
import Symbol from "../Symbol";

class DecorationPickerButton extends React.Component {
  render() {
    const { onPress, decoration } = this.props;
    let dec;
    switch (decoration) {
      case "quote":
        dec = "quoteFont";
        break;
      case "aphorism":
        dec = "aphorismFormat";
        break;
      case "warning":
        dec = "warning";
        break;
      case "error":
        dec = "error";
        break;
      case "success":
        dec = "checked";
        break;
      case "award":
        dec = "awardSvg";
        break;
      case "surprised":
        dec = "surprisedR";
        break;
      case "drops":
        dec = "drops";
        break;
      case "basic":
      default:
        dec = "photoFrame";
        break;
    }
    return (
      <View onPress={onPress}>
        <Symbol name={dec} size={32} />
      </View>
    );
  }
}
export default DecorationPickerButton;
