import React from "react";
import { StyleSheet, TextInput } from "react-native";
import styles from "./SimpleInput/styles";

class SimpleInput extends React.Component {
  constructor(props) {
    super();
    const defaultValue =
      props.defaultValue !== undefined ? String(props.defaultValue) : "";
    const { viewValue, modelValue } = this.formatValue(
      defaultValue,
      props.type,
      defaultValue
    );
    this.state = { focus: false, viewValue: viewValue, modelValue: modelValue };
  }
  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
  }
  clear = () => {
    this.setState({ viewValue: "", modelValue: undefined });
  };
  setFocus = bool => {
    this.setState({ focus: bool });
  };
  onChange = value => {
    const { viewValue, modelValue } = this.formatValue(
      value,
      this.props.type,
      this.state.value
    );

    if (this.state.viewValue !== viewValue) {
      this.setState({ viewValue: viewValue, modelValue: modelValue });
      this.props.onChange && this.props.onChange(modelValue);
    }
  };
  formatValue = (value, type, defaultValue) => {
    var viewValue, modelValue;
    if (value == "") {
      viewValue = "";
      modelValue = undefined;
    } else {
      switch (type) {
        case "integer":
        case "number":
          modelValue = parseInt(value);
          viewValue = isNaN(modelValue) ? defaultValue : value;
          break;
        case "float":
          modelValue = parseFloat(value);
          viewValue = isNaN(modelValue) ? defaultValue : value;
          modelValue = isNaN(modelValue) ? undefined : modelValue;
          break;
        default:
          viewValue = value;
          modelValue = value;
          break;
      }
    }
    return { viewValue, modelValue };
  };
  onKeyPress = e => {
    this.props.onKeyPress && this.props.onKeyPress(e);
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      this.props.onCommit && this.props.onCommit();
    }
  };
  render() {
    let {
      type,
      theme,
      placeholder,
      autoFocus,
      maxLength,
      editable,
      onRef,
      fontSize
    } = this.props;
    let keyboardType = "default";
    switch (type) {
      case "integer":
      case "number":
      case "float":
        keyboardType = "numeric";
        break;
    }
    const themes = [styles.input, { fontSize: fontSize || 14 }];
    let underlineColorAndroid;
    switch (theme) {
      case "search":
        themes.push(styles.search);
        underlineColorAndroid = "transparent";
        if (this.state.focus) themes.push(styles.searchOnFocus);
        break;
      case "transparent":
        themes.push(styles.transparent);
        underlineColorAndroid = "transparent";
        if (this.state.focus) themes.push(styles.transparentOnFocus);
        break;
      case "light":
        themes.push(styles.light);
        underlineColorAndroid = "transparent";
        if (this.state.focus) themes.push(styles.lightOnFocus);
        break;
      case "dark":
      default:
        themes.push(styles.dark);
        underlineColorAndroid = "#fff";
        if (this.state.focus) themes.push(styles.darkOnFocus);
        break;
    }
    return (
      <TextInput
        autoCorrect={false}
        style={StyleSheet.flatten(themes)}
        onFocus={() => this.setFocus(true)}
        onBlur={() => this.setFocus(false)}
        autoFocus={autoFocus}
        onKeyPress={this.onKeyPress}
        onChangeText={this.onChange}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={(this.state.focus && "transparent") || "#aaa"}
        value={this.state.viewValue}
        underlineColorAndroid={underlineColorAndroid}
        enablesReturnKeyAutomatically
        maxLength={maxLength}
        editable={editable}
      />
    );
  }
}

export default SimpleInput;
