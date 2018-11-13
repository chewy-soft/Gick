import React, { Component } from "react";
import { Animated } from "react-native";

class ElasticView extends Component {
  state = { animation: new Animated.Value(0) };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: this.props.progress,
      duration: this.props.duration
      // useNativeDriver: true
    }).start();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.state.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
        // useNativeDriver: true
      }).start();
    }
  }

  render() {
    const { children, direction, style } = this.props;
    const interpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    });
    const animation =
      direction == "vertical"
        ? { height: interpolate }
        : { width: interpolate };
    return (
      <Animated.View style={[{ overflow: "hidden" }, animation, style]}>
        {children}
      </Animated.View>
    );
  }
}

export default ElasticView;
