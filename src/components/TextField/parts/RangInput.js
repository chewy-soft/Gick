import React from "react";
import { StyleSheet } from "react-native";
import View from "../../View/View";
import Text from "../../Text/Text";
import _ from "lodash";
import SimpleInput from "./SimpleInput";
import c from "../../../lib/css";
import Button from "../../Buttons/Button";

const styles = StyleSheet.create({
  middle: {
    paddingHorizontal: 10,
    ...c.margin_l("auto"),
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

class RangeInput extends React.Component {
  constructor() {
    super();
    this.state = { range: false };
    this.toggleRange = this.toggleRange.bind(this);
    this.toRange = this.toRange.bind(this);
  }
  toRange(value) {
    this.props.onChange &&
      this.props.onChange({
        min: value,
        max: value
      });
  }
  toggleRange() {
    this.setState({ range: !this.state.range });
  }
  render() {
    const {
      onRefMin,
      onRefMax,
      autoFocus,
      maxLength,
      buttonStyle,
      inputStyle,
      style
    } = this.props;
    const { range } = this.state;
    return (
      <View style={style}>
        <View style={buttonStyle}>
          {range && (
            <Button
              content="x范围"
              theme="orange"
              size="s"
              onPress={this.toggleRange}
            />
          )}
          {!range && (
            <Button
              content="+范围"
              theme="moss"
              size="s"
              onPress={this.toggleRange}
            />
          )}
        </View>
        <View style={inputStyle}>
          {range && (
            <View style={styles.minmax}>
              <View style={styles.minmaxInput}>
                <SimpleInput
                  type="number"
                  onChange={this.onChangeMin}
                  autoFocus={autoFocus}
                  maxLength={maxLength}
                  onRef={onRefMin}
                  {...this.props}
                />
              </View>
              <Text style={styles.middle}>-</Text>
              <View style={styles.minmaxInput}>
                <SimpleInput
                  type="number"
                  onChange={this.onChangeMax}
                  maxLength={maxLength}
                  onRef={onRefMax}
                  {...this.props}
                />
              </View>
            </View>
          )}
          {!range && (
            <SimpleInput
              type="number"
              onChange={this.toRange}
              {...this.props}
            />
          )}
        </View>
      </View>
    );
  }
}
export default RangeInput;
