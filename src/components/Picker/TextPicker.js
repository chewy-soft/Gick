import React from "react";
import { StyleSheet } from "react-native";
import Text from "../Text/Text";
import View from "../View/View";
import Input from "../TextField/Input";
import Label from "../Label";
import Button from "../Buttons/Button";
import yang from "../../lib/yang";
import c from "../../lib/css";

const styles = StyleSheet.create({
  tagContent: { ...c.flex_row, ...c.flex_wrap },
  tag: { marginRight: 6, marginTop: 6 },
  button: { marginLeft: "auto", marginTop: 4 },
  divider: {
    ...c._margin(6, "auto", 4, 0),
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,.2)"
  }
});

class TopicManagement extends React.Component {
  state = { tags: [], value: "" };
  onChange = value => {
    this.props.onChange && this.props.onChange(value);
    this.setState({ value: value });
  };
  onCommit = value => {
    this.props.onCommit && this.props.onCommit(value);
    var value = this.state.value;
    var tags = this.state.tags;
    tags = yang.arrayCheckPush(tags, value);
    this.setState({ tags });
    this.tagInput.clear();
    this.setState({ value: "" });
  };
  onDeleteTag = tag => {
    var tags = this.state.tags;
    tags.splice(tags.indexOf(tag), 1);
    this.setState({ tags });
  };

  render() {
    const { labelSize, labelTheme, tagInfo } = this.props;
    const { tags } = this.state;

    return (
      <View>
        <Input
          placeholder="add some tag"
          placeholderTextColor="#fff"
          theme="search"
          onChange={this.onChange}
          onRef={input => {
            this.tagInput = input;
          }}
        />
        <View style={styles.button}>
          <Button
            onPress={this.onCommit}
            theme="darkGreen"
            size="s"
            icon="add"
            content="追加"
          />
        </View>
        <View style={styles.divider}>
          <Text style={{ ...c.li, color: "#aaa" }}>{tagInfo}</Text>
        </View>
        <View style={styles.tagContent}>
          {_.map(tags, (tag, index) => (
            <Label
              content={tag}
              key={index}
              size={labelSize || "l"}
              theme={labelTheme || "darkBlue"}
              onChange={() => this.onDeleteTag(tag)}
              style={styles.tag}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default TopicManagement;
