import React from "react";
import LinearGradient from "react-native-linear-gradient";

class LinearGradientView extends React.Component {
  render() {
    const { theme, start, end, style } = this.props;
    let css_end;
    switch (theme) {
      case "topToBottom":
        css_end = { x: 0.0, y: 1.0 };
        break;
      case "leftToRight":
        css_end = { x: 1.0, y: 0.0 };
        break;
      case "angular":
      default:
        css_end = { x: 1.0, y: 1.0 };
        break;
    }

    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={css_end}
        // locations={[0, 0.5]} location of each gradient color stop
        colors={[start, end]}
        style={style}
      >
        {this.props.children}
      </LinearGradient>
    );
  }
}

export default LinearGradientView;
