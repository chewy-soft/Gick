import React from "react";
import colors from "../../colors";
import Text from "../Text/Text"; import { StyleSheet, Platform, Animated } from "react-native";

const defaultProps = {
  fadeIn: 0,
  fadeOut: 0,
  visible: true,
  unmount: false
};
export default class FadeView extends React.Component {
  constructor(props) {
    super();
    this.animation = Animated;
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.state = {
      opacity: new Animated.Value(0),
      unmount: props.unmount && !props.visible
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.visible !== nextProps.visible ||
      this.state.opacity !== nextState.opacity ||
      this.state.unmount !== nextState.unmount
    );
  }

  fadeIn() {
    const fadeIn = this.props.fadeIn || defaultProps.fadeIn;
    this.props.onWillFadeIn && this.props.onWillFadeIn();
    this.animation
      .timing(this.state.opacity, {
        toValue: 1,
        duration: fadeIn,
        useNativeDriver: true // <-- Add this
      })
      .start(done => {
        if (done.finished) {
          this.props.onDidFadeIn && this.props.onDidFadeIn();
        }
      });
  }

  fadeOut() {
    const fadeOut = this.props.fadeOut || defaultProps.fadeOut;
    this.props.onWillFadeOut && this.props.onWillFadeOut();
    this.animation
      .timing(this.state.opacity, {
        toValue: 0,
        duration: fadeOut,
        useNativeDriver: true // <-- Add this
      })
      .start(done => {
        if (done.finished) {
          this.props.onDidFadeOut && this.props.onDidFadeOut();
          this.setState({ unmount: true });
        }
      });
  }

  componentDidMount() {
    const { visible } = this.props;
    if (visible) this.fadeIn();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      if (nextProps.visible) this.fadeIn();
      else this.fadeOut();
      if (this.state.unmount && nextProps.visible)
        this.setState({ unmount: false });
    }
  }

  render() {
    let { opacity, unmount } = this.state;
    if (unmount) return null;
    const style = this.props.style || {};

    return (
      <Animated.View
        style={[
          style,
          {
            opacity: opacity
          }
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
