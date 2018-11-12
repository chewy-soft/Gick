import React from "react";
import MateIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

class CustomIcon extends React.Component {
  render() {
    const { icon, color, size } = this.props;
    const awesome = [
      "weibo",
      "chevron-left",
      "chevron-right",
      "chevron-up",
      "chevron-down",
      "bullhorn",
      "group",
      "quote-left",
      "quote-right",
      "pencil-square-o"
    ];
    if (awesome.includes(icon)) {
      return (
        <AwesomeIcon
          name={icon}
          size={size || 26}
          color={color || "#fff"}
        />
      );
    } else {
      return (
        <MateIcon name={icon} size={size || 30} color={color || "#fff"} />
      );
    }
  }
}

export default CustomIcon;
