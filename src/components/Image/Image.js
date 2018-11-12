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
    loading: false,
    sourceKey: getSourceKey(this.props.source)
  };

  resize = () => {
    CustomImage.getSize(this.props.src, (width, height) => {
      if (this._mounted) {
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
      }
    });
  };
  componentDidMount() {
    this._mounted = true;
    this.resize();
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  bubbleEvent = (propertyName, event) => {
    if (typeof this.props[propertyName] === "function") {
      this.props[propertyName](event);
    }
  };

  handleLoadStart = () => {
    this.setState({ loading: true });
    this.bubbleEvent("onLoadStart");
  };

  handleLoadEnd = event => {
    if (this._mounted) {
      this.bubbleEvent("onLoadEnd", event);
    }
  };

  handleError = event => {
    if (this._mounted) {
      this.setState({
        loading: false,
        error: event.nativeEvent
      });
      this.bubbleEvent("onError", event);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
    const { src, size, style } = this.props;
    const styles = getStyles(size || "middle");
    const params = getParams(size || "middle");
    const { width, height, sourceKey, loading, error } = this.state;
    if (src === undefined) {
      return (
        <View style={[styles.image, styles.error]}>
          <Symbol name="bad" size={params.svg} />
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
        {!error && <CustomImage
          style={css_image}
          key={sourceKey}
          source={{ uri: src }}
          resizeMode={"contain"}
          onLoadStart={this.handleLoadStart}
          onLoad={this.handleLoad}
          onLoadEnd={this.handleLoadEnd}
          onError={this.handleError}
        />}
        {loading && (
          <View style={[styles.image, styles.loader]}>
            <Loader />
          </View>
        )}
        {error && (
          <View style={[styles.image, styles.error]}>
            <Symbol name="brokenImage" size={params.svg} />
          </View>
        )}
      </View>
    );
  }
}

export default Image;