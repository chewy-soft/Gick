import React from "react";
import SimpleInput from "./parts/SimpleInput";
import AreaInput from "./parts/AreaInput";
import AutoExpandingInput from "./parts/AutoExpandingInput";
import RangeInput from "./parts/RangInput";
import Text from "../Text/Text";
import { StyleSheet } from "react-native";
import View from "../View/View";
import c from "../../lib/css";

const styles = StyleSheet.create({
  middle: {
    paddingHorizontal: 10,
    paddingTop: 16,
    color: "#a1a1a1",
    fontWeight: "bold"
  },
  minmax: {
    ...c.flex_row,
    alignItems: "flex-end",
    width: "100%"
  },
  minmaxInput: {
    flex: 1
  }
});

class Input extends React.Component {
  constructor(props) {
    super();
    this.onChange = this.onChange.bind(this);
    this.onChangeMin = this.onChangeMin.bind(this);
    this.onChangeMax = this.onChangeMax.bind(this);
    if (props.type == "minmax") {
      var value = props.defaultValue || {};
      this.value = { min: undefined, max: undefined, ...value };
    } else {
      this.value = props.defaultValue;
    }
  }
  onChangeMin(value) {
    this.onChange({ ...this.value, min: value });
  }
  onChangeMax(value) {
    this.onChange({ ...this.value, max: value });
  }
  onChange(value) {
    this.value = value;
    this.props.onChange && this.props.onChange(value);
  }
  shouldComponentUpdate(nextProps) {
    return (
      this.props.value !== nextProps.value ||
      this.props.placeholder !== nextProps.placeholder
    );
  }
  render() {
    const {
      type,
      placeholder,
      numberOfLines,
      theme,
      autoFocus,
      maxLength,
      onRef,
      onRefMin,
      onRefMax
    } = this.props;
    switch (type) {
      case "minmax":
        return (
          <View style={styles.minmax}>
            <View style={styles.minmaxInput}>
              <SimpleInput
                placeholder={placeholder}
                theme={theme}
                type="number"
                onChange={this.onChangeMin}
                defaultValue={this.value.min}
                autoFocus={autoFocus}
                maxLength={maxLength}
                onRef={onRefMin}
              />
            </View>
            <Text style={styles.middle}>-</Text>
            <View style={styles.minmaxInput}>
              <SimpleInput
                type="number"
                placeholder={placeholder}
                theme={theme}
                onChange={this.onChangeMax}
                defaultValue={this.value.max}
                maxLength={maxLength}
                onRef={onRefMax}
              />
            </View>
          </View>
        );
      case "text":
        return <AreaInput {...this.props} />;
      case "autoExpanding":
        return <AutoExpandingInput {...this.props} />;
      case "range":
        return <RangeInput {...this.props} />;
      case "number":
      case "string":
      default:
        return <SimpleInput {...this.props} />;
    }
  }
}

export default Input;
