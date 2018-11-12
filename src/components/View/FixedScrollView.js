import React from "react";
import { ScrollView } from "react-native";

class FixedScrollView extends React.Component {
  scrollActive = true;
  offsetY = 0;
  isEnd = e => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const contentHeight = e.nativeEvent.contentSize.height;
    const scrollHeight = e.nativeEvent.layoutMeasurement.height;
    return offsetY + scrollHeight == contentHeight;
  };
  onScroll = e => {
    const preOffsetY = this.offsetY;
    this.offsetY = e.nativeEvent.contentOffset.y;
    const currentOffsetY = this.offsetY;
    const margin = this.props.scrollTopMargin || 0;
    const padding = this.props.scrollTopPadding || 0;
    if (
      this.scrollActive === true &&
      preOffsetY !== 0 &&
      this.isEnd(e) == false
    ) {
      this.props.onScrollOff && this.props.onScrollOff();
      this.scrollActive = false;
    } else if (this.scrollActive === false && this.isEnd(e)) {
      this.props.onScrollOn && this.props.onScrollOn();
      this.scrollActive = true;
    }
    if (currentOffsetY < margin) {
      this.props.onScrollTop && this.props.onScrollTopOut();
    }

    if (currentOffsetY < margin + padding && preOffsetY >= margin + padding) {
      this.props.onScrollTop && this.props.onScrollTop();
    }

    if (currentOffsetY >= margin + padding && preOffsetY < margin + padding) {
      this.props.onScrollTopLeft && this.props.onScrollTopLeft();
    }
  };
  scrollTo = pos => {
    this.scroll.scrollTo(pos);
  };
  onScrollSizeChange = () => {
    this.props.autoScroll && this.scrollActive && this.scroll.scrollToEnd();
  };
  onContentSizeChange = () => {
    this.props.autoScroll &&
      this.scrollActive &&
      this.scroll.scrollToEnd({ animated: false });
  };
  render() {
    return (
      <ScrollView
        ref={scroll => (this.scroll = scroll)}
        onScroll={this.onScroll}
        onContentSizeChange={this.onContentSizeChange}
        scrollEventThrottle={1000}
        style={this.props.style}
      >
        {this.props.children}
      </ScrollView>
    );
  }
}

export default FixedScrollView;
