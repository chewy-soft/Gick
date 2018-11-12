import React from "react";
import { View } from "react-native";
import Arrow from "./parts/Arrow";
import PageButton from "./parts/PageButton";
import styles from "./styles";

class Gallery extends React.Component {
  constructor(props) {
    super();
    this.interval = props.interval || defaultProps.interval;
    this.schedule = undefined;
    this._scheduleAuto = undefined;
    this.load = this.load.bind(this);
    this.scheduleLoad = this.scheduleLoad.bind(this);
    this.scheduleAuto = this.scheduleAuto.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onJump = this.onJump.bind(this);
    this.auto = true;
    this.state = { component: null, currentPage: 1 };
  }

  onNext() {
    const { numberOfPages } = {
      ...defaultProps,
      ...this.props
    };
    this.auto = false;
    this.load((this.state.currentPage % numberOfPages) + 1);
  }

  onPrevious() {
    const { numberOfPages } = {
      ...defaultProps,
      ...this.props
    };
    this.auto = false;
    this.load(
      ((this.state.currentPage + numberOfPages - 2) % numberOfPages) + 1
    );
  }

  onJump(page) {
    this.auto = false;
    this.load(page);
  }

  scheduleLoad(page) {
    const { numberOfPages } = {
      ...defaultProps,
      ...this.props
    };
    const interval = this.props.interval || defaultProps.interval;
    this.schedule = setTimeout(() => {
      this.load(page);
    }, interval);
  }

  scheduleAuto() {
    const { numberOfPages } = {
      ...defaultProps,
      ...this.props
    };
    if (this.auto === false) {
      this._scheduleAuto = setTimeout(() => {
        this.auto = true;
        this.scheduleLoad((this.state.currentPage % numberOfPages) + 1);
      }, 20000);
    }
  }

  load(page) {
    const { numberOfPages } = {
      ...defaultProps,
      ...this.props
    };
    this.schedule && clearTimeout(this.schedule);
    this._scheduleAuto && clearTimeout(this._scheduleAuto);
    var component = this.props.onLoad ? this.props.onLoad(page) : null;
    this.setState({ component, currentPage: page });
    if (this.auto) {
      this.scheduleLoad((page % numberOfPages) + 1);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.schedule);
    clearTimeout(this._scheduleAuto);
  }

  componentDidMount() {
    this.load && this.load(this.state.currentPage);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state || this.props !== nextProps;
  }

  render() {
    const { component, currentPage } = this.state;
    const { numberOfPages } = {
      ...defaultProps,
      ...this.props
    };
    if (numberOfPages == 0) return null;
    const navis = [];
    for (i = 0; i < numberOfPages; ++i) {
      const index = i;
      navis.push(
        <PageButton
          active={i + 1 == currentPage}
          key={i}
          onPress={() => this.onJump(index + 1)}
        />
      );
    }
    return (
      <View>
        {component}
        <View style={styles.arrow}>
          <Arrow side="left" onPress={this.onPrevious} />
          <View style={styles.active}>{navis}</View>
          <Arrow side="right" onPress={this.onNext} />
        </View>
      </View>
    );
  }
}

const defaultProps = {
  interval: 3000,
  numberOfPages: 10
};
export default Gallery;
