import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  content: {
    color: "#fff",
    flex: 1,
    lineHeight: 28
  }
});

class AutoExpandingInput extends React.Component {
  constructor(props) {
    super();
    const defaultValue =
      props.defaultValue !== undefined ? String(props.defaultValue) : "";
    this.state = { value: defaultValue, height: 28 };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.props.onChange && this.props.onChange(value);
    this.setState({ value: value });
  }
  clear = () => {
    this.setState({ value: "" });
  };
  onContentSizeChange = value => {
    this.props.onContentSizeChange && this.props.onContentSizeChange();
    this.setState({
      height: Math.min(value.nativeEvent.contentSize.height, 140)
    });
  };
  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
    const { placeholder, maxLength, autoFocus, onRef, onKeyPress } = this.props;
    return (
      <TextInput
        style={[styles.content, { height: this.state.height }]}
        multiline={true}
        underlineColorAndroid={"transparent"}
        autoFocus={autoFocus}
        placeholder={placeholder}
        multiline={true}
        ref={onRef}
        underlineColorAndroid="transparent"
        value={this.state.value}
        maxLength={maxLength}
        placeholderTextColor={"rgba(255,255,255,.2)"}
        selectionColor="#fff"
        onChange={this.onChange}
        onChangeText={this.onChange}
        onContentSizeChange={this.onContentSizeChange}
      />
    );
  }
}

export default AutoExpandingInput;
