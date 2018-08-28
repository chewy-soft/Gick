import React from "react";
import { Text } from "react-native";
import Gallery from "./Gallery";

export default class Temp extends React.Component {
  state = {};

  onLoad = page => {
    if (!this.props.keys || !this.state.columns) return null;
    let { columns } = this.props;
    columnsCount = columns || 2;
    let offset = (page - 1) * columnsCount;
    let visibles = this.state.columns.slice(offset, offset + columnsCount);
    return visibles.map(key => <Text key={key}>{key}</Text>);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.keys !== nextProps.keys || this.state !== nextState;
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.columns !== undefined) {
      return;
    }
    this.updateColumns(nextProps);
  }

  componentDidMount() {
    if (this.props.keys !== undefined) {
      this.updateColumns(this.props);
    }
  }

  updateColumns = props => {
    this.setState({ columns: props.keys });
  };

  render() {
    const { keys } = this.props;
    if (keys === undefined || this.state.columns == undefined)
      return <Text>Loader</Text>;
    if (keys.length === 0) {
      return <Text>Empty Arr</Text>;
    }
    return <Gallery interval={5000} onLoad={this.onLoad} />;
  }
}
