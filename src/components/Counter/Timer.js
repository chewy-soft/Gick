import React from "react";
import Text from "../Text/Text";
import { getStyles } from "./styles/Timer/styles";
import Format from "../Text/Format";
import View from "../View/View";
import _ from "lodash";

const suffixs = ["m", "l"];
const Colon = props => {
  const { size } = props;
  const styles = getStyles(size || "m");
  return <Text style={styles.colon}>:</Text>;
};

const Cell = props => {
  const { theme, suffix, times, size } = props;
  const styles = getStyles(size || "m");
  let css_time = (theme == "red" && styles.red) || styles.normal;
  const haveSuffix = _.indexOf(suffixs, size) !== -1 ? true : false;

  return (
    <View style={styles.timeContent}>
      {haveSuffix && <Text style={styles.suffix}>{suffix}</Text>}
      <Format style={[styles.time, css_time]} value={times} format="counter" />
    </View>
  );
};

class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => this.forceUpdate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { size, time, theme, style } = this.props;
    if (_.isNil(time)) return null;
    const styles = getStyles(size || "m");
    const now = Math.round(new Date().getTime() / 1000);
    const to = Math.round(new Date(time).getTime() / 1000);
    var seconds = to - now < 0 ? 0 : to - now;
    var days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    var hrs = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    var mnts = Math.floor(seconds / 60);
    seconds -= mnts * 60;
    const haveSuffix = _.indexOf(suffixs, size) !== -1 ? true : false;

    return (
      <View style={[styles.container, style]}>
        {theme !== "hours" && <Cell times={days} suffix="天" size={size} />}
        {haveSuffix && <View style={styles.space} />}
        {haveSuffix && theme !== "hours" && <Text style={styles.days}>天</Text>}
        <Cell times={hrs} suffix="小时" size={size} />
        <Colon size={size} />
        <Cell times={mnts} suffix="分钟" size={size} />
        <Colon size={size} />
        <Cell times={seconds} suffix="秒" theme="red" size={size} />
      </View>
    );
  }
}

export default Timer;
