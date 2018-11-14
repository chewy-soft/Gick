import React from "react";
import { TextInput, View } from "react-native";
import styles from "./AreaInput/styles";
import Symbol from "../../Symbol";

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
  onChange(value) {
    this.props.onChange && this.props.onChange(value);
    this.setState({ value: value });
  }
  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
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
      onRef,
      theme
    } = this.props;
    let placeholderTextColor;
    let css_textarea;
    let iconColor;
    switch (theme) {
      case "light":
        placeholderTextColor = "rgba(0,0,0,.4)";
        css_textarea = [styles.textareaContent, styles.light];
        iconColor = "rgba(0,0,0,.4)";
        break;
      case "dark":
      default:
        placeholderTextColor = "rgba(255,255,255,.2)";
        css_textarea = styles.textareaContent;
        iconColor = "#fff";
        break;
    }
    return (
      <View style={styles.contianer}>
        <View style={styles.before}>
          <Symbol name="quoteOpen" color={iconColor} />
        </View>
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
          ref={onRef}
          placeholderTextColor={placeholderTextColor}
          selectionColor="#fff"
        />
        <View style={styles.after}>
          <Symbol name="quoteClose" color={iconColor} />
        </View>
      </View>
    );
  }
}

export default AreaInput;
