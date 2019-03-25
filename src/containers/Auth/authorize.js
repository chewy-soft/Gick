import config from "../../config";
import redirects from "./configureRedirects";
import WeiboAPI from "@dongxii/react-native-weibo";
import * as WeTopicAPI from "react-native-wechat";
import * as QQAPI from "react-native-qq";

if (WeTopicAPI) {
  WeTopicAPI.registerApp(config.weixin.native_appid);
}

if (WeiboAPI) {
  WeiboAPI.init({
    appKey: config.weibo.native_appid,
    scope: "all",
    redirectURI: config.weibo.redirect_uri
  });
}

export const authorizeQQ = async () => {
  if (QQAPI) {
    const params = config.qq;
    const response = await QQAPI.login(params.scope);
    const { access_token } = response;
    let uri = config.token_uri + "/qq/" + encodeURIComponent(access_token);
    return fetch(uri).then(response => {
      if (response.status !== 200) {
        throw { code: response.status, message: response.statusText };
      } else {
        return response.text();
      }
    });
  } else {
    throw "qq native authorization is called on invalid platform";
  }
};

export const authorizeWeixin = async () => {
  if (WeTopicAPI) {
    const params = config.weixin;
    const response = await WeTopicAPI.sendAuthRequest(params.scope_native);
    const { errCode, errStr, code } = response;
    if (errCode || errStr) {
      throw `[${errCode}]${errStr}`;
    }
    let uri = config.token_uri + "/weixin/" + encodeURIComponent(code);
    return fetch(uri).then(response => {
      if (response.status !== 200) {
        throw { code: response.status, message: response.statusText };
      } else {
        return response.text();
      }
    });
  } else {
    throw "weixin native authorization is called on invalid platform";
  }
};

export const authorizeWeibo = async () => {
  if (WeiboAPI) {
    let { accessToken } = await WeiboAPI.authenticate();
    let uri = config.token_uri + "/weibo/" + encodeURIComponent(accessToken);
    return fetch(uri).then(response => response.text());
  } else {
    throw "weibo native authorization is called on invalid platform";
  }
};
