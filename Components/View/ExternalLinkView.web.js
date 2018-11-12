import React from "react";

export default props => (
  <a
    target="_blank"
    style={{
      textDecoration: "none",
      display: "flex",
      flex: "1",
      color: "inherit"
    }}
    href={props.url}
  >
    {props.children}
  </a>
);
