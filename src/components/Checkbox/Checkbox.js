import React from "react";
import Text from "../Text/Text";
import View from "../View/View";
import _ from "lodash";
import c from "../../lib/css";
import Button from "../Buttons/Button";
import yang from "../../lib/yang";

class Checkbox extends React.Component {
  state = { value: [] };
  onPress = item => {
    this.props.onPress && this.props.onPress(id);
    item.onPress && item.onPress();
    var multi = this.props.multi || false;
    var active = this.state.active;
    active = yang.arrayPushOrRemove(active, item.key, multi);
    this.setState({ value: active });
  };
  clear = () => this.setState({ value: [] });

  set = v => {
    let value = v || [];
    value = _.isArray(value) ? value : [value];
    this.setState({ value: value });
  };

  componentDidMount() {
    this.set(this.props.defaultValue);
    if (this.props.onRef) this.props.onRef(this);
  }

  isActive(value) {
    if (this.props.value) {
      const v = _.isArray(this.props.value)
        ? this.props.value
        : [this.props.value];
      return _.indexOf(v, value) !== -1;
    } else {
      return _.indexOf(this.state.value, value) !== -1;
    }
  }

  render() {
    const { activeColor, defaultColor, size, items } = this.props;

    return (
      <View style={{ ...c.flex_row_between }}>
        {_.map(items, item => (
          <Button
            key={item.key}
            content={item.label}
            size={size}
            theme={
              (this.isActive(item.key) && (activeColor || "lightOrange")) ||
              (defaultColor || "darkBlue")
            }
            icon={(this.isActive(item.key) && "checkOutline") || null}
            onPress={() => this.onPress(item)}
          />
        ))}
      </View>
    );
  }
}

export default Checkbox;
