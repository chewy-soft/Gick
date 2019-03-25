import config from "../../config";
import { Platform } from "react-native";
let pathname;
if (Platform.OS == "web") {
  pathname = window.location.pathname;
}
const weiboSrc = config => {
  return (
    config.url +
    "?client_id=" +
    config.appid +
    "&scope=" +
    config.scope +
    "&redirect_uri=" +
    encodeURIComponent(config.redirect_uri) +
    "&state=" +
    encodeURIComponent(pathname) +
    "&response_type=code"
  );
};

const weixinSrc = config => {
  const weixin = config;
  const self_redirect = weixin.self_redirect === true ? "true" : "false";

  let src =
    config.url +
    "?appid=" +
    config.appid +
    "&scope=" +
    config.scope +
    "&redirect_uri=" +
    encodeURIComponent(config.redirect_uri) +
    "&state=" +
    encodeURIComponent(pathname) +
    (config.response_type ? "&response_type=" + config.response_type : "") +
    (config.login_type ? "&login_type=" + config.login_type : "") +
    (config.self_redirect ? "&self_redirect=true" : "") +
    (config.style ? "&style=" + config.style : "");
  return src;
};

const qqSrc = config => {
  return (
    config.url +
    "?client_id=" +
    config.appid +
    "&redirect_uri=" +
    encodeURIComponent(config.redirect_uri) +
    "&state=" +
    encodeURIComponent(pathname) +
    "&response_type=code" +
    "&scope=" +
    config.scope +
    "&display=" +
    config.display +
    "&self_redirect=true"
  );
};
export default {
  weibo: weiboSrc(config.weibo),
  qq: qqSrc(config.qq),
  weixin: weixinSrc(config.weixin)
};
