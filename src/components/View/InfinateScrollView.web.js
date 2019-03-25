import React from "react";
import colors from "../../colors";
import { View, Text, Platform } from "react-native";
import {
  AutoSizer,
  List,
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized";
import DefaultFooter from "./parts/ScrollFooter";
import DefaultLoader from "../Loader";
import ReactDOM from "react-dom";
import { start } from "pretty-error";
import _ from "lodash";

const initialState = { data: undefined, uncommits: [] };

export default class InfiniateScrollView extends React.Component {
  state = initialState;
  data = undefined;
  uncommits = false;
  scrollState = undefined;

  FOOTER = "__FOOTER__";
  HEADER = "__HEADER__";
  LOADING = "__LOADING__";

  constructor(props) {
    super(props);
    var opts = {
      fixedWidth: true
    };
    opts.keyMapper = index => {
      if (this.data === undefined) return this.LOADING;
      const data = this.data;
      const count = data.length + 2;
      if (index == 0) return this.HEADER;
      if (index == count - 1) return this.FOOTER;
      const item = this.data[index - 1];
      if (props.keyMapper) return props.keyMapper(item);
      else return props.keyExtractor(item);
    };
    this.cache = new CellMeasurerCache(opts);
  }

  renderItem = ({ index, isScrolling, isVisible, key, parent, style }) => {
    if (this.data === undefined) return null;
    if (!isVisible) return null;
    const { Header, Footer } = this.props;
    const inversed = !!this.props.inversed;
    const data = this.data;
    const count = data.length + 2;
    const isFooter = index == (!inversed ? count - 1 : 0);
    const isHeader = index == (!inversed ? 0 : count - 1);
    const mixedStyle = inversed ? [style, inverseStyle] : style;
    const itemIndex = index - 1;
    if (isHeader) {
      return Header ? (
        <CellMeasurer
          key={this.HEADER}
          cache={this.cache}
          columnIndex={0}
          parent={parent}
          rowIndex={index}
        >
          {({ measure }) => (
            <View style={mixedStyle}>
              <Header onResize={measure} />
            </View>
          )}
        </CellMeasurer>
      ) : (
          <CellMeasurer
            key={this.HEADER}
            cache={this.cache}
            columnIndex={0}
            parent={parent}
            rowIndex={index}
          >
            <View style={mixedStyle} />
          </CellMeasurer>
        );
    }
    if (isFooter) {
      return Footer ? (
        <CellMeasurer
          key={this.FOOTER}
          cache={this.cache}
          columnIndex={0}
          parent={parent}
          rowIndex={index}
        >
          {({ measure }) => (
            <View style={mixedStyle}>
              <Footer onResize={measure} />
            </View>
          )}
        </CellMeasurer>
      ) : (
          <CellMeasurer
            key={this.FOOTER}
            cache={this.cache}
            columnIndex={0}
            parent={parent}
            rowIndex={index}
          >
            <View style={mixedStyle} />
          </CellMeasurer>
        );
    }

    const renderItem = this.props.renderItem;
    const item = data[itemIndex];
    return (
      <CellMeasurer
        key={this.props.keyExtractor(item)}
        cache={this.cache}
        columnIndex={0}
        parent={parent}
        rowIndex={index}
      >
        {({ measure }) => (
          <View style={mixedStyle}>{renderItem(item, measure)}</View>
        )}
      </CellMeasurer>
    );
  };

  onScroll = params => {
    const { clientHeight, scrollHeight, scrollTop } = params;
    const scrollState = {
      offsetY: scrollTop,
      contentHeight: scrollHeight,
      windowHeight: clientHeight
    };

    if (clientHeight > 0) {
      this.props.onScroll && this.props.onScroll(scrollState, this.scrollState);
    }

    this.top = scrollTop == 0;

    if (this.top && this.uncommits) {
      this.data = this.props.data;
      this.setState({ data: this.props.data });
      this.uncommits = false;
    }
    this.scrollState = scrollState;
  };

  checkNoData = () => {
    if (this.props.data === undefined) this.props.noData && this.props.noData();
  };

  shouldComponentUpdate = (p, s) =>
    !_.isEqual(p.data, this.props.data) ||
    !_.isEqual(p.extraData, this.props.extraData) ||
    !_.isEqual(s.data, this.state.data);

  componentWillUpdate() { }

  componentDidUpdate(preProps) {
    this.checkNoData();
    this.commitData();
  }

  componentDidMount() {
    this.checkNoData();
    if (this.props.data) {
      this.data = this.props.data;
      this.setState({ data: this.props.data });
    }
  }

  commitData = preProps => {
    const data = this.props.data;
    if (data === undefined) return;
    const stateData = this.data;
    if (_.isEqual(stateData, data)) return;

    if (stateData === undefined || _.size(stateData) == 0 || this.top) {
      const need_update = stateData === undefined && this.state.data;
      this.data = data;
      this.setState(
        { data: data },
        () => need_update && this.forceUpdateGrid()
      );
      this.uncommits = false;
      return;
    }
    if (_.first(stateData) == _.first(data)) {
      this.data = data;
      this.setState({ data: data });
      this.uncommits = false;
      return;
    }
    const last = _.last(stateData);
    if (data.indexOf(last) !== -1 && _.last(data) !== _.last(stateData)) {
      const tail = _.slice(data, data.indexOf(last) + 1, _.size(data));
      this.data = [...stateData, ...tail];
      this.setState({ data: this.data });
    }
    this.uncommits = true;
  };

  onWheel = e => {
    if (this.props.inversed && e.cancelable) {
      e.preventDefault();

      var deltaY = e.deltaY * -1;
      deltaY = Math.abs(deltaY) < 10 ? deltaY * 20 : deltaY

      if (deltaY > 0 && this.data.length < this.stopIndex) {
        this.list && this.list.scrollToRow(this.stopIndex);
        return;
      }
      const preOffsetY = this.scrollState.offsetY || 0;
      const offset = preOffsetY + deltaY;
      this.list && this.list.scrollToPosition(offset < 0 ? 0 : offset);
    }
    return;
  };
  onRowsRendered = ({ startIndex, stopIndex }) => {
    this.startIndex = startIndex;
    this.stopIndex = stopIndex;
  };

  reset = () => {
    this.list && this.list.scrollToPosition(0);
    this.startIndex = undefined;
    this.stopIndex = undefined;
    this.cache.clearAll();
    this.scrollState = undefined;
    this.uncommits = false;
    this.data = undefined;
  };

  clearCacheAll = () => this.cache.clearAll();
  clearCache = item => {
    if (_.indexOf(this.data, item) !== -1) {
      const itemIndex = _.indexOf(this.data, item) + 1;
      this.cache.clear(itemIndex, 0);
    }
  };

  scrollToTop = () => this.list && this.list.scrollToPosition(0);

  forceUpdateGrid = () => {
    this.list && this.list.forceUpdateGrid();
  };

  render() {
    const { Empty, Header, Footer } = this.props;
    const { data } = this.state;
    if (data === undefined)
      return (
        <View style={{ margin: "auto" }}>
          <DefaultLoader />
        </View>
      );
    if (data.length == 0)
      return <View style={{ flex: 1 }}>{Empty ? <Empty /> : null}</View>;
    let count = data.length + 2;
    const inversed = !!this.props.inversed;
    const transform = inversed ? inverseStyle : {};

    return (
      <View
        style={[{ flex: 1 }, transform]}
        onWheel={this.onWheel}
        ref="wrapper"
      >
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              rowCount={count}
              rowHeight={this.cache.rowHeight}
              rowRenderer={this.renderItem}
              onScroll={this.onScroll}
              ref={ref => (this.list = ref)}
              onRowsRendered={this.onRowsRendered}
            />
          )}
        </AutoSizer>
      </View>
    );
  }
}

const inverseStyle = {
  transform: [{ scaleY: -1 }]
};
