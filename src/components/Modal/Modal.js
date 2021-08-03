import { Component } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div
        className={styles.Modal__backdrop}
        onClick={this.handleBackdropClick}
      >
        <div
          style={{ backgroundColor: this.props.color }}
          className={styles.Modal__content}
        >
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;