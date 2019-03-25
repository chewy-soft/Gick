import React from "react";
import Text from "../Text/Text";
import moment from "moment";

const SimpleFormat = props => {
  const { simple_format, simple_value, locale } = props;

  return (
    <Text>
      {simple_format == "moment" &&
        moment(simple_value)
          .locale(locale || "zh-cn")
          .fromNow()}
      {simple_format == "fullDate" &&
        moment(new Date(simple_value)).format("YYYY年MM月DD日 HH:mm")}
      {simple_format == "month" &&
        moment(new Date(simple_value)).format("MM月DD日 HH:mm")}
      {simple_format == "day" &&
        moment(new Date(simple_value)).format("DD日 HH:mm")}
      {simple_format == "time" &&
        moment(new Date(simple_value)).format("h:mm a")}
      {simple_format == "aphorism" &&
        moment(new Date(simple_value)).format("MMM. YYYY")}
      {/* + locale */}
    </Text>
  );
};

class Format extends React.Component {
  render() {
    const {
      value,
      type,
      locale,
      end_format,
      format,
      style,
      numberOfLines
    } = this.props;
    if (value === undefined || value === null) return <Text />;
    let simple_format;
    let suffix;
    switch (format) {
      case "fullDate":
        simple_format = "fullDate";
        break;
      case "month":
        simple_format = "month";
        break;
      case "day":
        simple_format = "day";
        break;
      case "time":
        simple_format = "time";
        break;
      case "aphorism":
        simple_format = "aphorism";
        break;
      case "moment":
      default:
        simple_format = "moment";
        break;
    }

    let limit_format;
    if (moment(value.end).isSame(value.start, "year")) {
      if (moment(value.end).isSame(value.start, "month")) {
        if (moment(value.end).isSame(value.start, "day")) {
          limit_format = "time";
        } else {
          limit_format = "day";
        }
      } else {
        limit_format = "month";
      }
    } else {
      limit_format = end_format || simple_format;
    }

    if (typeof value == "object") {
      if (!value.end || !value.start || value.start == value.end) {
        return (
          <Text style={style}>
            <SimpleFormat
              simple_format={simple_format}
              simple_value={value.start || value.end}
            />
            {suffix}
          </Text>
        );
      } else {
        return (
          <Text style={style}>
            <SimpleFormat
              simple_format={simple_format}
              simple_value={value.start}
            />
            ～
            <SimpleFormat
              simple_format={limit_format}
              simple_value={value.end}
            />
            {suffix}
          </Text>
        );
      }
    }
    return (
      <Text style={style} numberOfLines={numberOfLines}>
        <SimpleFormat
          simple_format={simple_format}
          simple_value={value}
          locale={locale}
        />
        {suffix}
      </Text>
    );
  }
}

export default Format;
