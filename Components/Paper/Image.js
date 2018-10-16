import React from "react";
import { Image as CustomImage } from "react-native";
import Symbol from "../Symbol";
import { getStyles, getParams } from "./styles/Image/styles";
import View from "../View/View";
import Loader from "../Loader";

const getSourceKey = source => (source && source.uri) || String(source);

class Image extends React.Component {
  state = {
    uri: this.props.src,
    width: null,
    height: null,
    loading: true,
    thresholdReached: false,
    sourceKey: getSourceKey(this.props.source)
  };

  resize = () => {
    CustomImage.getSize(this.props.src, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({
          width: this.props.width,
          height: height * (this.props.width / width),
          loading: false
        });
      } else if (!this.props.width && this.props.height) {
        this.setState({
          width: width * (this.props.height / height),
          height: this.props.height,
          loading: false
        });
      } else {
        this.setState({ width: width, height: height, loading: false });
      }
    });
  };

  componentDidMount() {
    this.thresholdTimer = setTimeout(() => {
      this.setState({ thresholdReached: true });
    }, 50);
  }

  componentWillUnmount() {
    if (this.thresholdTimer) {
      clearTimeout(this.thresholdTimer);
    }
  }

  bubbleEvent = (propertyName, event) => {
    if (typeof this.props[propertyName] === "function") {
      this.props[propertyName](event);
    }
  };

  handleLoadStart = () => {
    this.bubbleEvent("onLoadStart");
  };

  handleLoadEnd = event => {
    this.resize();
    this.bubbleEvent("onLoadEnd", event);
  };

  handleError = event => {
    this.setState({
      loading: false,
      error: event.nativeEvent
    });
    this.bubbleEvent("onError", event);
  };

  render() {
    const { src, size, style } = this.props;
    const styles = getStyles(size || "middle");
    const params = getParams(size || "middle");
    const {
      width,
      height,
      sourceKey,
      loading,
      error,
      thresholdReached
    } = this.state;
    if (src === undefined) {
      return (
        <View style={[styles.image, styles.error]}>
          <Symbol name="bad" size={params.svg} />
        </View>
      );
    }

    let loader;
    if (loading && thresholdReached) {
      loader = (
        <View style={[styles.image, styles.loader]}>
          <Loader />
        </View>
      );
    } else if (error) {
      loader = (
        <View style={[styles.image, styles.error]}>
          <Symbol name="brokenImage" size={params.svg} />
        </View>
      );
    }

    let css_image;
    if (size == "auto") {
      css_image = [{ width: width, height: height }, style];
    } else {
      css_image = [style, styles.image];
    }
    return (
      <View style={styles.content}>
        <CustomImage
          style={css_image}
          key={sourceKey}
          source={{ uri: src }}
          resizeMode={"contain"}
          onLoadStart={this.handleLoadStart}
          onLoad={this.handleLoad}
          onLoadEnd={this.handleLoadEnd}
          onError={this.handleError}
        />
        {loader}
      </View>
    );
  }
}

export default Image;
