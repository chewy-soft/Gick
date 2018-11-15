import React from "react";
import { StyleSheet, View } from "react-native";
import Divider from "../../Divider";
import Loader from "../../Loader";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    flexShrink: 0,
    paddingTop: 6,
    paddingBottom: 12
  },
  line: {
    paddingHorizontal: 8,
    marginTop: "auto"
  }
});

export default props => {
  const loading = !!props.loading;
  const hasMore = !!props.hasMore;
  if (loading) {
    return <Loader />;
  }
  if (!hasMore) {
    return (
      <View style={styles.content}>
        <View style={styles.line}>
          <Divider text="这里是底线了" />
        </View>
      </View>
    );
  }
  return null;
};
