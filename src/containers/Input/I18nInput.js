import _ from "lodash";
import React from "react";

import Button from "../../components/Buttons/Button";
import c from "../../lib/css";
import FilePicker from "../../components/Picker/FilePicker";
import Input from "../../components/TextField/Input";
import styles from "./styles/I18nInput/styles";
import Symbol from "../../components/Symbol";
import Loader from "../../components/Loader";
import Text from "../../components/Text/Text";
import TimeFormat from "../../components/Text/TimeFormat";
import User from "../User/User";
import View from "../../components/View/View";
import { translate } from "../../lib/i18n";

export default class I18nInput extends React.Component {
  state = {
    value: undefined,
    comment: undefined,
    text: undefined,
    valid: false,
    editing: false
  };
  constructor(props) {
    super();
    const { t } = props;

    this.inputProps = {
      type: "text",
      placeholder: t("字符", "zh")
    };
  }

  reset = () => {
    const { value, locale } = this.props;
    const text = translate(value, locale);

    if (this.input) this.input.set(text || "");
    if (this.comment) this.comment.set("");
    this.setState({ text, comment: undefined, editing: false });
  };

  save = async () => {
    const { text, comment } = this.state;
    try {
      await this.props.onSave(text, comment);
    } catch (error) {
      console.log(error);
    }
  };

  onChange = text => {
    const { value, locale } = this.props;
    this.setState({
      text,
      editing: text != _.get(value, locale) && text !== ""
    });
  };

  onChangeComment = comment => {
    this.setState({ comment });
  };

  componentDidMount() {
    this.reset();
  }

  componentDidUpdate(preProps) {
    if (
      preProps.value !== this.props.value ||
      preProps.meta !== this.props.meta
    ) {
      this.reset();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.value !== this.props.value ||
      nextProps.meta !== this.props.meta ||
      nextProps.schema !== this.props.schema ||
      nextProps.locale !== this.props.locale ||
      this.state !== nextState
    );
  }

  render() {
    const { value, locale, t, meta, schema } = this.props;
    const { text, editing } = this.state;
    const inputProps = this.inputProps;
    const { origin_locale, user_ids, comments } = meta || {};
    const user_id = editing ? null : _.get(user_ids, locale);
    const comment = _.get(comments, locale);

    return (
      <View>
        <Text style={styles.label}>{t(schema.label, "en")}</Text>
        <View style={styles.format}>
          <View style={styles.cell}>
            <Input
              {...inputProps}
              defaultValue={translate(value, origin_locale) || ""}
              theme="dark"
              disabled
            />
          </View>
          <View style={styles.arrow}>
            <Symbol name="arrowRight" size={18} />
          </View>
          <View style={styles.cell}>
            <Input
              {...inputProps}
              defaultValue={translate(value, locale)}
              theme="light"
              onChange={this.onChange}
              onRef={ref => (this.input = ref)}
            />
            {editing && (
              <View style={styles.onCommentContent}>
                <Text style={styles.label}>{t("编译中...", "zh")}</Text>
                <View style={styles.onComment}>
                  <View style={{ flex: 1 }}>
                    <Input
                      type="text"
                      theme="light"
                      numberOfLines={3}
                      placeholder={t("您可对本次编辑附言以便进一步探讨", "zh")}
                      onChange={this.onChangeComment}
                      onRef={ref => (this.comment = ref)}
                    />
                  </View>
                  <View style={styles.editButton}>
                    <Button
                      content={t("放弃编译", "zh")}
                      icon="close"
                      size="s"
                      theme="darkBlue"
                      onPress={this.reset}
                    />
                    <Button
                      content={t("确定", "zh")}
                      icon="send"
                      theme="darkGreen"
                      onPress={this.save}
                    />
                    {/* onPress={onSend} */}
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* if have orignal value */}
        {user_id && (
          <View style={[styles.row, styles.subInfo]}>
            <User size="xxs" id={user_id} />
            <View>
              <Text style={styles.subInfoText}>{t("编译", "zh")}</Text>
            </View>
          </View>
        )}

        {comment && (
          <View style={styles.subInfo}>
            <Text style={styles.subInfoText}>
              {t("编者附言", "zh")}：{comment}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
