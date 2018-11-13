import React from "react";
import ReactDOM from "react-dom";
import { StyleSheet, css } from "aphrodite";
import RoundButton from "../Buttons/RoundButton";

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0,0,0,.6)",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 4
  },
  close: {
    paddingTop: 8,
    paddingRight: 8,
    marginLeft: "auto",
    zIndex: 1
  },
  content: {
    display: "flex",
    flex: 1,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: "auto"
  },
  hide: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

class Modal extends React.Component {
  constructor(props) {
    super();
    this.node = props.node || document.body;
    this.el = document.createElement("div");
  }

  componentDidMount() {
    this.node.appendChild(this.el);
  }

  componentWillUnmount() {
    this.node.removeChild(this.el);
  }

  render() {
    const component = (
      <div className={css(styles.modal)}>
        <div className={css(styles.close)}>
          <RoundButton
            theme="darkBlue"
            icon="close"
            onPress={this.props.onClose}
          />
        </div>
        <div className={css(styles.hide)} onClick={this.props.onClose} />
        <div className={css(styles.content)}>{this.props.children}</div>
      </div>
    );
    return ReactDOM.createPortal(component, this.el);
  }
}

export default Modal;
