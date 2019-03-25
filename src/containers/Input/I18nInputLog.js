import React from "react";
import View from "../../components/View/View";
import Text from "../../components/Text/Text";
import styles from "./styles/InputLog/styles";
import _ from "lodash";
import Format from "../../components/Text/Format";
import TimeFormat from "../../components/Text/TimeFormat";
import User from "../User/User";
import HoverView from "../../components/View/HoverView";
import Image from "../../components/Image/Image";
import Loader from "../../components/Loader";
import Alert from "../../components/Alert";
import { translate } from "../../lib/i18n";
import * as bucket from "../../lib/bucket";
import HandlerContext from "../../context/HandlerContext";

export default class InputLog extends React.Component {
  static contextType = HandlerContext;
  state = { log: undefined, error: undefined };
  load = async () => {
    try {
      const { id, type, path, locale } = this.props;
      const { t, getFieldLog } = this.context;
      const l = await getFieldLog({
        object_type: type,
        object_id: id,
        path: path
      });

      const log = _.chain(l)
        .filter(l => !!translate(l.value, locale))
        .uniqBy(l => translate(l.value, locale))
        .value();

      this.setState({ log });
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  };
  componentDidMount() {
    this.load();
  }

  renderRow = (t, field, locale) => {
    const value = translate(field.value, locale);
    if (!value) return null;
    return (
      <HoverView hoverColor="light" key={field._id}>
        <View style={[styles.row, styles.historyCell]}>
          <Format value={value} format="string" style={styles.tr} />
          <Format
            value={_.get(field, ["meta", "comments", locale]) || "-"}
            format="text"
            style={styles.tr}
          />
          <TimeFormat
            format="fullDate"
            value={field.created_at}
            style={styles.tr}
          />
          <Text style={styles.tr}>
            <User size="xxs" theme="light" id={field.meta.user_ids[locale]} />
          </Text>
          <Text
            style={[styles.tr, styles.return]}
            onPress={() => this.props.onRevert(field._id, locale)}
          >
            <HoverView hoverColor="transprent" theme="link">
              {t("还原到此存档", locale)}
            </HoverView>
          </Text>
        </View>
      </HoverView>
    );
  };

  render() {
    const { locale, onRevert } = this.props;
    const { log, error } = this.state;
    const { t } = this.context;

    if (error) return <Alert message={"ERROR"} visible={true} />;
    if (log === undefined) return <Loader />;

    const titles = [
      { key: "value", value: t("编辑内容", "zh") },
      { key: "comment", value: t("附言", "zh") },
      { key: "date", value: t("编辑日期", "zh") },
      { key: "editer", value: t("编辑者", "zh") },
      { key: "return", value: t("存档还原", "zh") }
    ];

    return (
      <View style={styles.table}>
        <View style={styles.tableHead}>
          {_.map(titles, title => (
            <View style={styles.th} key={title.key}>
              <Text style={styles.td}>{title.value}</Text>
            </View>
          ))}
        </View>
        <View style={styles.body}>
          {_.map(log, field => this.renderRow(t, field, locale))}
        </View>
      </View>
    );
  }
}
