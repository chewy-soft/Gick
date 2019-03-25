import React from "react";
import { StyleSheet, Picker } from "react-native";
import colors from "../../colors";
import View from "../View/View";
import c from "../../lib/css";

const styles = StyleSheet.create({
  container: { ...c.flex_row_center, flex: 1 },
  dark: {
    backgroundColor: colors.background,
    borderWidth: 0,
    color: "#fff"
  }
});

class DropDown extends React.Component {
  constructor(props) {
    super();
    if (props.defaultValue !== undefined) {
      let value = props.items
        .map(item => item.value)
        .indexOf(props.defaultValue);
      if (value !== -1) {
        this.state = { selected: value };
      } else {
        this.state = { selected: undefined };
      }
    } else {
      this.state = { selected: undefined };
    }
  }

  onChange = index => {
    const item = this.props.items[index];
    this.props.onChange(item.value);
    this.setState({ selected: index });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value || this.state !== nextState;
  }

  getSelectedFromValue = value => {
    const selected = this.props.items.map(item => item.value).indexOf(value);
    return selected == -1 ? undefined : selected;
  };

  render() {
    const { style, items, value, theme, mode } = this.props;
    let selected;
    if (value) {
      selected = this.getSelectedFromValue(value);
    } else {
      selected = this.state.selected;
    }
    let backColor;
    switch (theme) {
      case "dark":
        backColor = styles.dark;
        break;
    }
    const css_style = StyleSheet.flatten([style, backColor]);

    return (
      <View style={styles.container}>
        <Picker
          style={css_style}
          selectedValue={selected}
          onValueChange={this.onChange}
          mode={mode || "dropdown"}
        >
          {items.map((item, index) => (
            <Picker.Item value={index} label={item.label} key={index} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default DropDown;
