import React from "react";
import { TextInput, View } from "react-native";
import styles from "./AreaInput/styles";
import Label from "../../Label";

class AreaInput extends React.Component {
  constructor(props) {
    super();
    const defaultValue =
      props.defaultValue !== undefined ? String(props.defaultValue) : "";
    this.state = { focus: false, value: defaultValue };
    this.setFocus = this.setFocus.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  setFocus(bool) {
    this.setState({ focus: bool });
  }
  clear = () => {
    this.setState({ value: "" });
  };
  set = value => {
    this.setState({ value: value });
  };
  onChange(value) {
    this.props.onChange && this.props.onChange(value);
    this.setState({ value: value });
  }
  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
    if (this.props.onRef) this.props.onRef(this);
  }
  componentWillUpdate(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }
  render() {
    const {
      numberOfLines,
      placeholder,
      onKeyPress,
      autoFocus,
      maxLength,
      theme,
      disabled
    } = this.props;
    let placeholderTextColor;
    let css_textarea;
    switch (theme) {
      case "light":
        placeholderTextColor = "rgba(0,0,0,.4)";
        css_textarea = [styles.textareaContent, styles.light];
        break;
      case "dark":
      default:
        placeholderTextColor = "rgba(255,255,255,.2)";
        css_textarea = [
          styles.textareaContent,
          { borderColor: (this.state.focus && "#fff") || "#aaa" }
        ];
        break;
    }
    return (
      <View>
        {maxLength && (
          <View style={{ marginLeft: "auto", marginBottom: 4, marginRight: 2 }}>
            <Label
              theme="blue"
              content={`${_.size(this.state.value)}/${maxLength}`}
              size="m"
            />
          </View>
        )}
        <TextInput
          style={css_textarea}
          onFocus={() => this.setFocus(true)}
          onBlur={() => this.setFocus(false)}
          autoFocus={autoFocus}
          onKeyPress={onKeyPress}
          onChangeText={this.onChange}
          placeholder={placeholder}
          multiline={true}
          numberOfLines={numberOfLines || 10}
          underlineColorAndroid="transparent"
          value={this.state.value}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor}
          selectionColor="#fff"
          disabled={disabled}
        />
      </View>
    );
  }
}

export default AreaInput;
