import React from "react";
import _ from "lodash";

class Promised extends React.Component {
  state = { promise: undefined };
  resolve = async () => {
    const { promise } = this.props;
    const result = await promise();
    if (this._mount) {
      this.setState({ promise: result });
    }
  };
  componentDidMount() {
    this._mount = true;
    this.resolve();
  }
  componentDidUpdate(preProps, preState) {
    if (preState.promise === undefined && this.state.promise) {
      this.props.onResolve && this.props.onResolve();
    }
  }
  componentWillUnmount() {
    this._mount = false;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      (this.props.onShouldComponentUpdate &&
        this.props.onShouldComponentUpdate(this.props, nextProps)) ||
      this.state !== nextState
    );
  }

  render() {
    const { Loader } = this.props;
    if (this.state.promise === undefined) return Loader ? <Loader /> : null;
    return this.props.children(this.state.promise, this.props);
  }
}
export default Promised;
