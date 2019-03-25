import React from "react";
import Text from "../../../components/Text/Text";
import Symbol from "../../../components/Symbol";
import { styles, params } from "./styles/Interaction404/styles";
import View from "../../../components/View/View";

export default props => (
  <View style={styles.container}>
    <Symbol name="area51Font" size={params.icon} color="#fff" />
    <View style={styles.content}>
      <Text style={styles.info}>这里什么都没有哟！</Text>
      <Text style={styles.sub}>文章出现未知错误或可能已被删除</Text>
    </View>
  </View>
);
