import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SimpleInput from "./SimpleInput";
import AreaInput from "./AreaInput";
import AutoExpandingInput from "./AutoExpandingInput";
import styles from "./LabelInput/styles";

class LabelInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.type !== nextProps.type ||
      this.props.theme !== nextProps.theme ||
      this.props.label !== nextProps.label
    );
  }
  render() {
    const { type, theme, label } = this.props;
    const themes = [styles.label];
    if (theme == "light") themes.push(styles.light);
    else themes.push(styles.dark);

    return (
      <View style={{ width: "100%", flex: 1 }}>
        {label && <Text style={StyleSheet.flatten(themes)}>{label}</Text>}
        {type == "text" && <AreaInput {...this.props} />}
        {type !== "text" &&
          type !== "autoExpanding" && <SimpleInput {...this.props} />}
        {type == "autoExpanding" && <AutoExpandingInput {...this.props} />}
      </View>
    );
  }
}

export default LabelInput;
