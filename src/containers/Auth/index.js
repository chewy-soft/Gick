import React from "react";
import Loader from "../../components/Loader";
import RoundButton from "../../components/Buttons/RoundButton";
import { authorizeWeibo, authorizeWeixin, authorizeQQ } from "./authorize";
import styles from "./styles";
import View from "../../components/View/View";

export default class Auth extends React.Component {
  constructor(props) {
    super();
    this.auth = this.auth.bind(this);
    this.state = { loading: false };
  }

  auth = async site => {
    switch (site) {
      case "weibo":
        try {
          let token = await authorizeWeibo();
          token && this.props.successAuth(token);
        } catch (error) {
          if (error.message !== "User cancelled") {
            this.props.errorAuth();
          }
        }
        break;
      case "weixin":
        try {
          let token = await authorizeWeixin();
          token && this.props.successAuth(token);
        } catch (error) {
          if (error.code !== -2) {
            this.props.errorAuth();
          }
        }
        break;
      case "qq":
        try {
          let token = await authorizeQQ();
          token && this.props.successAuth(token);
        } catch (error) {
          if (error.code !== -2) {
            this.props.errorAuth();
          }
        }
        break;
    }
  };

  render() {
    const active = !this.state.loading && this.props.active;
    return (
      <View style={styles.container}>
        {active && (
          <View style={styles.content}>
            <RoundButton
              size="l"
              theme="qq"
              icon="qq"
              onPress={() => this.auth("qq")}
            />
            <RoundButton
              size="l"
              theme="wechat"
              icon="wechat"
              onPress={() => this.auth("weixin")}
            />
            <RoundButton
              size="l"
              theme="weibo"
              icon="weibo"
              onPress={() => this.auth("weibo")}
            />
            {process.env.NODE_ENV == "development" && (
              <RoundButton
                size="l"
                theme="black"
                icon="group"
                onPress={() => this.props.successAuth("admin")}
              />
            )}
          </View>
        )}
        {!active && (
          <View style={styles.content}>
            <Loader size="large" />
          </View>
        )}
      </View>
    );
  }
}
