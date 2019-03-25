import React from "react";
import UserBase from "./UserBase";

const User404 = props => (
  <UserBase
    user={{
      name: "查无此人或用户已被封禁",
      avatar: "http://assets.boardgamereview.cn/user404.png"
    }}
    size={props.size}
    style={props.style}
    theme={props.theme}
  />
);

export default User404;
