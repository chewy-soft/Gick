import React from "react";
import View from "./View";
import HoverView from "./HoverView";
import ChackBox from "../Checkbox/Checkbox";

class MessageContent extends React.Component {
  render() {
    const { maxWidth, align, onCheck } = this.props;
    let side;
    switch (align) {
      case "left":
        side = { marginRight: "auto" };
        break;
      case "right":
        side = { marginLeft: "auto" };
        break;
      case "center":
      default:
        side = null;
        break;
    }
    return (
      <HoverView style={[side, { maxWidth: maxWidth || "100%", flex: 1 }]}>
        {this.props.children}
        {onCheck && (
          <View style={{ position: "absolute", right: -18 }}>
            <ChackBox size="s" onChange={onCheck} />
          </View>
        )}
      </HoverView>
    );
  }
}

export default MessageContent;
