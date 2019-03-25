import React from "react";
import Text from "../Text/Text";
import Code from "../Code/Code";

const SimpleFormat = props => {
  const { simple_format, simple_value, onResize } = props;
  if (simple_format == "number") {
    if (simple_value >= 10000) {
      return <Text>{Number(simple_value / 10000).toFixed(1)}万</Text>;
    } else {
      return String(simple_value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
  if (simple_format == "counter") {
    return (
      (simple_value > 9 && parseInt(simple_value)) ||
      "0" + parseInt(simple_value)
    );
  } else {
    return (
      <Text>
        {simple_format == "integer" && parseInt(simple_value)}
        {simple_format == "float" && Number(simple_value).toFixed(2)}
        {simple_format == "string" && simple_value}
        {simple_format == "code" && <Code value={simple_value} onResize={onResize} />}
        {simple_format == "text" && simple_value}
        {simple_format == "percent" && parseInt(simple_value * 100)}
        {simple_format == "price" && Number(simple_value).toFixed(2)}
      </Text>
    );
  }
};

class Format extends React.Component {
  render() {
    const {
      value,
      type,
      format,
      style,
      numberOfLines,
      selectable,
      onResize
    } = this.props;
    if (value === undefined || value === null) return <Text />;
    let simple_format;
    let suffix;
    switch (format) {
      case "number":
        simple_format = "number";
        break;
      case "score":
        simple_format = "float";
        break;
      case "player":
        simple_format = "integer";
        suffix = " 人";
        break;
      case "min":
        simple_format = "integer";
        suffix = " 分钟";
        break;
      case "hour":
        simple_format = "integer";
        suffix = " 小时";
        break;
      case "year":
        simple_format = "integer";
        suffix = " 年";
        break;
      case "age":
        simple_format = "integer";
        suffix = " +";
        break;
      case "text":
        simple_format = "text";
        break;
      case "percent":
        simple_format = "percent";
        suffix = "%";
        break;
      case "rmb":
      case "RMB":
      case "price":
        simple_format = "price";
        suffix = " 元";
        break;
      case "counter":
        simple_format = "counter";
        break;
      case "code":
        simple_format = "code";
        break;
      case "string":
      default:
        simple_format = "string";
        break;
    }
    let content;
    if (typeof value == "object") {
      if (!value.max || !value.min || value.min == value.max) {
        return (
          <Text style={style} selectable={selectable}>
            <SimpleFormat
              simple_format={simple_format}
              simple_value={value.min || value.max}
              onResize={onResize}
            />
            {suffix}
          </Text>
        );
      } else {
        return (
          <Text style={style} selectable={selectable}>
            <SimpleFormat
              simple_format={simple_format}
              simple_value={value.min}
              onResize={onResize}
            />{" "}
            -{" "}
            <SimpleFormat
              simple_format={simple_format}
              simple_value={value.max}
              onResize={onResize}
            />
            {suffix}
          </Text>
        );
      }
    }
    return (
      <Text style={style} numberOfLines={numberOfLines} selectable={selectable}>
        <SimpleFormat simple_format={simple_format} simple_value={value} onResize={onResize} />
        {suffix}
      </Text>
    );
  }
}

export default Format;
