import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  content: {
    color: "#fff",
    flex: 1,
    outline: "none",
    background: "transparent",
    border: 0,
    resize: "none",
    fontSize: "14px",
    fontFamily:
      '"varela_roundregular","Whitney","Helvetica Neue","Helvetica","Segoe UI","Microsoft YaHei","Meiryo UI","Flaticon","Material Design Icons","Arial","sans-serif"'
  }
});

class AutoExpandingInput extends React.Component {
  constructor(props) {
    super();
    const defaultValue =
      props.defaultValue !== undefined ? String(props.defaultValue) : "";

    this.preHeight = 0;
    this.state = { value: defaultValue };
  }
  resize = () => {
    this.inputRef.style.height = "auto";
    this.inputRef.style.height = this.inputRef.scrollHeight + "px";
    if (this.preHeight && this.preHeight !== this.inputRef.scrollHeight) {
      this.props.onContentSizeChange && this.props.onContentSizeChange();
    }
    this.preHeight = this.inputRef.scrollHeight;
  };
  clear = () => {
    this.inputRef.style.height = "auto";
    this.inputRef.focus();
    this.setState({ value: "" });
    this.props.onChange("");
  };
  onChange = e => {
    this.props.onChange(e.target.value);
    this.setState({ value: e.target.value });
    this.resize();
  };
  onKeyPress = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onCommit && this.props.onCommit();
    }
  };
  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
    this.resize();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  render() {
    const {
      maxLength,
      placeholder,
      maxHeight,
      autoFocus,
      onKeyPress,
      onContentSizeChange
    } = this.props;
    const { value } = this.state;
    return (
      <textarea
        onKeyDown={this.onKeyPress}
        onChange={this.onChange}
        className={css(styles.content)}
        style={{ maxHeight: `${maxHeight}px` }}
        maxLength={maxLength}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        value={value}
        ref={ref => (this.inputRef = ref)}
        rows="1"
      />
    );
  }
}

export default AutoExpandingInput;
