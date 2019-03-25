import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../colors";
import View from "../../components/View/View";
import NavBar from "../../components/ToolBar/NavBar";
import NavItem from "../../components/ToolBar/NavItem";
import Avatar from "../../components/Avatar";

const styles = StyleSheet.create({
  add: {
    backgroundColor: colors.lightOrange,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    flexGrow: 1,
    width: 30,
    marginHorizontal: 4
  }
});

export default props => {
  const { router, notices } = props;
  const index = props.navigation.state.index;
  return (
    <NavBar
      type="center"
      component={
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "stretch",
            backgroundColor: colors.basic
          }}
        >
          <NavItem
            title="话题"
            icon="home"
            onPress={router.toTop}
            active={index == 0}
          />
          <NavItem
            title="商店"
            icon="topic"
            noticeSize="s"
            notice={notices}
            onPress={router.toMessages}
            active={index == 1}
          />
          <View style={styles.add} onPress={() => alert("router.createTopic")}>
            <Avatar size="m" id={user.avatar} />
          </View>
          <NavItem
            title="游戏"
            icon="shop"
            onPress={router.toHot}
            active={index == 2}
          />
          <NavItem
            title="测评"
            icon="interactions"
            onPress={router.toInteractionList}
            active={index == 3}
          />
        </View>
      }
    />
  );
};
