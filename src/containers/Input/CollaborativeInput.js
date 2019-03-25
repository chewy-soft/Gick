import _ from "lodash";
import React from "react";

import Button from "../../components/Buttons/Button";
import Input from "../../components/TextField/Input";
import styles from "./styles/I18nInput/styles";
import Text from "../../components/Text/Text";
import User from "../User/User";
import View from "../../components/View/View";
import Checkbox from "../../components/Checkbox/Checkbox";
import format from "../../lib/format";
import FilePicker from "../../components/Picker/FilePicker";
import Alert from "../../components/Alert";
import { toFileObjectLike } from "../../lib/bucket";
import HandlerContext from "../../context/HandlerContext";

const initialState = {
  value: undefined,
  comment: undefined,
  editing: false,
  error: undefined
};
export default class CollaborativeInput extends React.Component {
  static contextType = HandlerContext;
  state = {
    ...initialState
  };

  reset = () => {
    const { value, schema } = this.props;
    if (this.input) this.input.set(_.toString(value) || "");
    if (this.checkbox) this.checkbox.set(value);
    if (this.comment) this.comment.set("");
    if (this.file) this.file.set(toFileObjectLike(value, schema.type));
    this.setState({
      ...initialState,
      value
    });
  };

  onChange = value => {
    this.setState({
      value,
      editing: value != this.props.value && value != "" && !_.isNil(value)
    });
  };

  onChangeComment = comment => {
    this.setState({ comment });
  };

  save = async () => {
    const { value, comment } = this.state;
    try {
      await this.props.onSave(value, comment);
    } catch (error) {
      this.setState({ error: "上传出现错误，请重试!" });
    }
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
      this.state !== nextState
    );
  }

  render() {
    let { value, schema, meta, locale } = this.props;
    const { editing, error } = this.state;
    const { t } = this.context;
    const { type } = schema;
    meta = meta || {};
    const { user_id, comment } = meta;
    const f = format(t);

    return (
      <View>
        <Text style={styles.label}>{t(schema.label, "en")}</Text>
        {error && <Alert message={error} visible={true} />}
        <View style={styles.format}>
          <View style={styles.cell}>
            {type == "integer" && (
              <Input
                type="integer"
                placeholder={t("字符", "zh")}
                theme="light"
                onChange={this.onChange}
                onRef={ref => (this.input = ref)}
              />
            )}
            {type == "choice" && (
              <Checkbox
                onRef={ref => (this.checkbox = ref)}
                items={_.map(schema.choices, choice => ({
                  key: choice,
                  label: f(choice, schema.format),
                  onPress: () => this.onChange(choice)
                }))}
              />
            )}
            {type == "image" && (
              <FilePicker
                maxFiles={1}
                onChange={files => this.onChange(_.first(files))}
                onRef={ref => (this.file = ref)}
              />
            )}
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
        {user_id && !editing && (
          <View style={[styles.row, styles.subInfo]}>
            <User size="xxs" id={user_id} />
            <View>
              <Text style={styles.subInfoText}>{t("编译", "zh")}</Text>
            </View>
          </View>
        )}

        {comment && !editing && (
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
