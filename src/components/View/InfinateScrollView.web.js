import React from "react";
import { View } from "react-native";
import { AutoSizer, List } from "react-virtualized";
import DefaultFooter from "./parts/ScrollFooter";
import DefaultLoader from "../Loader";

export default class InfiniateScrollView extends React.Component {
  renderItem = ({ index, isScrolling, isVisible, key, parent, style }) => {
    if (!isVisible) return null;
    const data = this.props.data || [];
    const isLast = data.length + 1 == index + 1;
    const Footer = this.props.Footer || DefaultFooter;
    if (isLast) {
      return (
        <View key={key} style={style}>
          <Footer {...this.props} />
        </View>
      );
    }
    const height = this.props.itemHeight;
    const renderItem = this.props.renderItem;
    const item = data[index];
    return (
      <View key={key} style={style}>
        {renderItem(item)}
      </View>
    );
  };

  onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
    const margin = scrollHeight - scrollTop - clientHeight;
    if (margin < 100 && this.props.hasMore && !this.props.loading) {
      this.props.onLoad();
    }
  };

  init = () => {
    const { data, onLoad, hasMore, loading } = this.props;
    if ((data === undefined || data.length == 0) && !loading && hasMore) {
      onLoad();
    }
  };

  componentDidUpdate() {
    this.init();
  }

  componentDidMount() {
    this.init();
  }

  render() {
    const {
      itemHeight,
      data,
      renderItem,
      Footer,
      loading,
      hasMore,
      Empty
    } = this.props;
    if (data === undefined) return <DefaultLoader />;
    if (data.length == 0 && !hasMore && !loading)
      return <View style={{ flex: 1 }}>{Empty ? <Empty /> : null}</View>;

    const count = data.length + 1; // + Footer
    return (
      <View style={{ flex: 1 }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              rowCount={count}
              rowHeight={itemHeight}
              rowRenderer={this.renderItem}
              onScroll={this.onScroll}
            />
          )}
        </AutoSizer>
      </View>
    );
  }
}
