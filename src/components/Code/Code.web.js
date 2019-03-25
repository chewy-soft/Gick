import React from "react"
import Loader from "../Loader"
import * as highlight from "../../lib/highlight"

export default class Code extends React.Component {
  state = { value: undefined }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value ||
      this.state.value !== nextState.value
  }

  componentDidUpdate(preProps) {
    if (this.props.value !== preProps.value) {
      this.resolve()
    }
  }

  componentDidMount() {
    this.resolve()
  }

  resolve = async () => {
    const value = this.props.value || ""
    const compiled = await highlight.parse(value)
    if (this._unmount) return
    this.setState({ value: compiled }, this.props.onResize)
  }

  componentWillUnmount() {
    this._unmount = true
  }

  render() {
    const { value } = this.state
    return value ? <div dangerouslySetInnerHTML={{ __html: value }}></div> : <Loader />
  }
}

function replaceAsync(str, re, callback) {
  // http://es5.github.io/#x15.5.4.11
  str = String(str);
  var parts = [],
    i = 0;
  if (Object.prototype.toString.call(re) == "[object RegExp]") {
    if (re.global)
      re.lastIndex = i;
    var m;
    while (m = re.exec(str)) {
      var args = m.concat([m.index, m.input]);
      parts.push(str.slice(i, m.index), callback.apply(null, args));
      i = re.lastIndex;
      if (!re.global)
        break; // for non-global regexes only take the first match
      if (m[0].length == 0)
        re.lastIndex++;
    }
  } else {
    re = String(re);
    i = str.indexOf(re);
    parts.push(str.slice(0, i), callback.apply(null, [re, i, str]));
    i += re.length;
  }
  parts.push(str.slice(i));
  return Promise.all(parts).then(function (strings) {
    return strings[1]
  });
}