import React from "react";
import View from "../../components/View/View";
import Symbol from "../../components/Symbol";
import colors from "../../colors";
import styles, { params } from "./styles/InsertMessage/styles";

export default props => {
  const { message } = props;

  return (
    <View style={styles.container}>
      <Symbol name="quoteOpen" color={colors.normalGray} size={params.icon} />
      <View style={styles.message}>{message}</View>
      <View style={styles.quote}>
        <Symbol
          name="quoteClose"
          color={colors.normalGray}
          size={params.icon}
        />
      </View>
    </View>
  );
};
